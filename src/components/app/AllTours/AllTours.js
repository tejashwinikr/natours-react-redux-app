/* eslint-disable jsx-a11y/alt-text */
import { React, useEffect, useState } from "react";
import "./allTourStyle.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Header from "../header/header";
import Footer from "../footer/footer";
import { getAllTours } from "../../duck/actions/actions";
import { loadState } from "../../duck/reducers/commonReducer";
import { IApplicationState } from "../../duck/reducers/commonReducer";

const AllTours = () => {
  const [tours123, setTours] = useState([]);

  const dispatch = useDispatch();

  // Access specific properties from the state
  const { tours, GET_tours123LoadState, apiError } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(getAllTours());
    // console.log("coming here222", tours);
    if (GET_tours123LoadState === loadState.SUCCESS) {
      setTours(tours.data.data.data);
    }
  }, []);

  useEffect(()=>{

    console.log("== 32",tours123)
  },[tours123])

  useEffect(() => {
    async function fetchData() {
      console.log(tours)
      setTours(tours);
      // try {
      //   // const res = await fetch("http://localhost:3000/api/v1/tours/", {
      //   //   method: "GET",
      //   // });

      //   const res = await axios({
      //     method: "GET",
      //     url: "http://localhost:3000/api/v1/tours",
      //   });

      //   if (res.data.status === "success") {
      //     console.log("coming here", res);
      //     setTours(res.data.data.data);
      //     alert("success");
      //   }
      // } catch (err) {
      //   console.log("coming here111", err);
      //   alert(err.response.data.message);
      // }
    }

    fetchData();
  }, [tours]);

  return (
    <>
      <Header />
      <div className="main">
        <div className="card-container">
          {tours123 &&
            tours123.length > 0 &&
            tours123.map((item, index) => (
              <div className="card">
                <div className="card__header">
                  <div className="card__picture">
                    <div className="card__picture-overlay">
                      <img
                        className="card__picture-img"
                        // src={require(`../assets/tours/${tours123.imageCover}`)}
                      ></img>
                    </div>
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
                    <svg className="card__icon"></svg>
                    <span>{item.startLocation.description}</span>
                  </div>

                  <div className="card__data">
                    <svg className="card__icon"></svg>
                    <span>
                      {item.startDates[0].toLocaleString("en-us", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="card__data">
                    <svg className="card__icon"></svg>
                    <span>{item.locations.length}</span>
                  </div>

                  <div className="card__data">
                    <svg className="card__icon"></svg>
                    <span>{item.maxGroupSize}</span>
                  </div>
                </div>

                <div className="card__footer">
                  <p>
                    <span className="card__footer-value">{item.price}</span>

                    <span className="card__footer-text">per person</span>
                  </p>

                  <p className="card__ratings">
                    <span className="card__footer-value">
                      {item.ratingsAverage}
                    </span>

                    <span className="card__footer-text">
                      rating {item.ratingsQuantity}
                    </span>
                  </p>

                  <a className="btn.btn--green.btn--small">See Deatils</a>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllTours;
