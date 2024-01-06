/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ReviewCard from "./reviewCard"; // Import your ReviewCard component
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import { loadState } from "../../duck/reducers/commonReducer";
import "./tourdetailStyle.css";

const OverviewBox = ({ label, text, icon }) => (
  <div className="overview-box__detail">
    <svg className="overview-box__icon">
      <use xlinkHref={`/img/icons.svg#icon-${icon}`} />
    </svg>
    <span className="overview-box__label">{label}</span>
    <span className="overview-box__text">{text}</span>
  </div>
);

const TourDetail = () => {
  const { _id } = useSelector(
    (IApplicationState) => IApplicationState.app.userData
  );

  const { tours, tour, getATourLoadState } = useSelector(
    (IApplicationState) => IApplicationState.app
  );

  const { slug } = useParams();
  const dispatch = useDispatch();

  console.log("===", slug, tours, tour);

  return (
    <>
      <Header />
      {getATourLoadState === loadState.STARTED && (
        <div className="loader"> Loading</div>
      )}
      {getATourLoadState === loadState.SUCCESS && (
        <div className="tourdetail-container">
          <div className="section-header">
            <div className="header__hero">
              <div className="header__hero-overlay">&nbsp;</div>
              <img
                className="header__hero-img"
                src={`img/${tour.imageCover}`}
                alt={`img/${tour.name}`}
              />
            </div>

            <div className="heading-box">
              <h1 className="heading-primary">
                <span>{tour.name}</span>
              </h1>
              <div className="heading-box__group">
                <div className="heading-box__detail">
                  <svg className="heading-box__icon">
                    <use xlinkHref="/img/icons.svg#icon-clock" />
                  </svg>
                  <span className="heading-box__text">{`${tour.duration} days`}</span>
                </div>
                <div className="heading-box__detail">
                  <svg className="heading-box__icon">
                    <use xlinkHref="/img/icons.svg#icon-map-pin" />
                  </svg>
                  <span className="heading-box__text">
                    {tour.startLocation.description}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="section-description">
            <div className="overview-box">
              <div className="overview-box__group">
                <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
                <OverviewBox
                  label="Next date"
                  text={new Date(tour.startDates[0]).toLocaleString("en-us", {
                    month: "long",
                    year: "numeric",
                  })}
                  icon="calendar"
                />
                <OverviewBox
                  label="Difficulty"
                  text={tour.difficulty}
                  icon="trending-up"
                />
                <OverviewBox
                  label="Participants"
                  text={`${tour.maxGroupSize} people`}
                  icon="user"
                />
                <OverviewBox
                  label="Rating"
                  text={`${tour.ratingsAverage} /5`}
                  icon="star"
                />
              </div>
              <div className="overview-box__group">
                <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
                {tour.guides.map((guide) => (
                  <div key={guide.id} className="overview-box__detail">
                    <img
                      className="overview-box__img"
                      src={`/img/users/${guide.photo}`}
                      alt={guide.name}
                    />
                    <span className="overview-box__label">
                      {guide.role === "lead-guide"
                        ? "Lead guide"
                        : "Tour guide"}
                    </span>
                    <span className="overview-box__text">{guide.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="description-box">
              <h2 className="heading-secondary ma-bt-lg">{`About ${tour.name} tour`}</h2>
              {tour.description.split("\n").map((p, index) => (
                <p key={index} className="description__text">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="section-pictures">
            {tour.images.map((img, i) => (
              <div key={i} className="picture-box">
                <img
                  className={`picture-box__img picture-box__img--1`}
                  src={`/img/tours/${img}`}
                  alt={`The Park Camper Tour ${i + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Add  sections map display*/}
          {/* <div className="section-map"></section> */}

          <div className="section-reviews">
            <div className="reviews">
              {tour.reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>
          </div>

          <div className="section-cta">
            <div className="cta">
              <div className="cta__img cta__img--logo">
                <img src="/img/logo-white.png" alt="Natours logo" />
              </div>
              <img
                className="cta__img cta__img--1"
                src={`/img/tours/${tour.images[1]}`}
                alt="Tour Picture"
              />
              <img
                className="cta__img cta__img--2"
                src={`/img/tours/${tour.images[2]}`}
                alt="Tour Picture"
              />
              <div className="cta__content">
                <h2 className="heading-secondary">What are you waiting for?</h2>
                <p className="cta__text">{`${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!`}</p>
                {_id ? (
                  <button
                    className="btn btn--green span-all-rows"
                    id="book-tour"
                    data-tour-id={`${tour.id}`}
                  >
                    Book tour now!
                  </button>
                ) : (
                  <a href="/login" className="btn btn--green span-all-rows">
                    Log in to book tour
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default TourDetail;
