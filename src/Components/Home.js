import React from "react";
import Products from "./Products";
import Nav from "./Nav";

const Home = () => {
  return (
    <>
    <Nav/>
    <div className="hero">
      <div className="card bg-dark text-dark border-0">
        <img
          src="https://as2.ftcdn.net/v2/jpg/02/97/94/05/1000_F_297940536_2v3nLUIQcAWk8vxuPATZxm4kGIKuhqWZ.jpg"
          className="card-img"
          alt="Background"
        />
        <div className="card-img-overlay d-flex flex-column justfy-contect-center">
          <div classNameName="cotainer">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
            <p className="card-text lead fs-2">
              Check out all the Trend
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
    </>
  );
};

export default Home;
