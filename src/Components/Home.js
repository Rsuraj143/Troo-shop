import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="hero">
        
          <div className="card bg-dark text-white border-0">
           
            <img
              src="https://img.freepik.com/free-vector/realistic-christmas-banner-with-white-gold-decoration_1361-2997.jpg?w=1380&t=st=1670912579~exp=1670913179~hmac=ff37585e275fcff46dcbe2d6ebc77cff5f8acbd6e91866ac935ad3a3c7a58af3"
              className="card-img img-fluid"
              alt="Background"
              height={700}
            />
         
            <div className="card-img-overlay " style={{ margin: "10px auto" }}>
              <div classNameName="cotainer">
                <h5
                  className="card-title fs-2 bg-light text-black fw-bolder text-center w-50 mb-0"
                  style={{ margin: "10px auto" }}
                >
                  NEW SEASON ARRIVAL
                </h5>
              </div>
            </div>
          </div>
  
        <Products />
      </div>
    </>
  );
};

export default Home;
