/* eslint-disable jsx-a11y/alt-text */
import { React, useEffect, useState } from "react";
import "./allTourStyle.css";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Header from "../header/header";
import Footer from "../footer/footer";
import { getAllTours } from "../../duck/actions/actions";
import { loadState } from "../../duck/reducers/commonReducer";
import { GET_TOURS_NOTSTARTED } from "../../duck/types/types";


const AllTours = () => {
  const [tours123, setTours] = useState([]);

  const dispatch = useDispatch();

  // Access specific properties from the state
  const { tours, GET_TOURSLoadState } = useSelector(
    (IApplicationState) => IApplicationState.app
  );

  useEffect(() => {
    dispatch(getAllTours());
  }, [dispatch]);

  useEffect(() => {
    if (GET_TOURSLoadState === loadState.SUCCESS) {
      setTours(tours);
      // dispatch({ type: GET_TOURS_NOTSTARTED });
    }
  }, [GET_TOURSLoadState, dispatch, tours]);

  return (
    <>
      <Header />
      {GET_TOURSLoadState === loadState.STARTED && (
        <div className="loader"> Loading</div>
      )}
      {GET_TOURSLoadState === loadState.SUCCESS && (
        <div className="main">
          <div className="card-container">
            {tours &&
              tours.length > 0 &&
              tours.map((item, index) => (
                <div className="card">
                  <div className="card__header">
                    <div className="card__picture">
                      <div className="card__picture-overlay">&nbsp;</div>
                      <img
                        className="card__picture-img"
                        src={`img/tours/${item.imageCover}`}
                        alt={item.name}
                      />
                    </div>
                    <h3 className="heading-tertirary">
                      <span>{item.name}</span>
                    </h3>
                  </div>

                  <div className="card__details">
                    <h4 className="card__sub-heading">
                      {item.difficulty} {item.duration}-day tour
                    </h4>
                    <p className="card__text">{item.summary}</p>

                    <div className="card__data">
                      <svg className="card__icon">
                        <use xlinkHref="/img/icons.svg#icon-map-pin" />
                      </svg>
                      <span>{item.startLocation.description}</span>
                    </div>

                    <div className="card__data">
                      <svg className="card__icon">
                        <use xlinkHref="/img/icons.svg#icon-calendar" />
                      </svg>
                      <span>
                        {new Date(item.startDates[0]).toLocaleString("en-us", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <div className="card__data">
                      <svg className="card__icon">
                        <use xlinkHref="/img/icons.svg#icon-flag" />
                      </svg>
                      <span>{item.locations.length}</span>
                    </div>

                    <div className="card__data">
                      <svg className="card__icon">
                        <use xlinkHref="/img/icons.svg#icon-user" />
                      </svg>
                      <span>{item.maxGroupSize}</span>
                    </div>
                  </div>

                  <div className="card__footer">
                    <p>
                      <span className="card__footer-value">{`$ ${item.price}`}</span>

                      <span className="card__footer-text">per person</span>
                    </p>

                    <p className="card__ratings">
                      <span className="card__footer-value">
                        {item.ratingsAverage}
                      </span>

                      <span className="card__footer-text">
                        {`rating ( ${item.ratingsQuantity})`}
                      </span>
                    </p>

                    <a
                      href={`/tour/${item.slug}`}
                      className="btn btn--green btn--small"
                    >
                      Details
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default AllTours;

//calling api directly
// useEffect(() => {
//   async function fetchData() {
//     try {
//       // const res = await fetch("http://localhost:3000/api/v1/tours/", {
//       //   method: "GET",
//       // });

//       const res = await axios({
//         method: "GET",
//         url: "http://localhost:3000/api/v1/tours",
//       });

//       if (res.data.status === "success") {
//         console.log("coming here", res);
//         setTours(res.data.data.data);
//         alert("success");
//       }
//     } catch (err) {
//       console.log("coming here111", err);
//       alert(err.response.data.message);
//     }
//   }

//   fetchData();
// },[]);
