import React from "react";
import ReviewCard from "./reviewCard"; // Import your ReviewCard component

const Tour = ({ tour, user }) => {
    
  const overviewBox = (label, text, icon) => (
    <div className="overview-box__detail">
      <svg className="overview-box__icon">
        <use xlinkHref={`/img/icons.svg#icon-${icon}`} />
      </svg>
      <span className="overview-box__label">{label}</span>
      <span className="overview-box__text">{text}</span>
    </div>
  );

  return (
    <main className="main">
      <section className="section-header">
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
      </section>

      {/* Add other sections based on the converted Pug code */}

      {user ? (
        <section className="section-cta">
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
              <button
                className="btn btn--green span-all-rows"
                id="book-tour"
                data-tour-id={`${tour.id}`}
              >
                Book tour now!
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="section-cta">
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
              <a href="/login" className="btn btn--green span-all-rows">
                Log in to book tour
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Tour;
