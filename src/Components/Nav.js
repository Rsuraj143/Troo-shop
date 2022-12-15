import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Nav = () => {
  const state = useSelector((state) => state.handleCart);

  // Search bar functionality
  const [allData, setAllData] = useState([]);
  const [allFilterData, setAllFilterData] = useState([]);
  const [searchField, setSearchField] = useState("");
  

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
        
        
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

 

  const handleChange = (e) => {
    setSearchField(e.target.value.toLowerCase())
    const filteredPersons = allData.filter((person) => {
      return person.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    if (e.target.value === "") {
      setAllFilterData([])
    } else {
      setAllFilterData(filteredPersons)
    }
  };

  const clearSearch = (e)=>{
    e.preventDefault()
    setSearchField("")
    setAllFilterData([])
  }
  
  
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-white ">
        <div className="container-fluid bg-light py-2">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            TROOShopy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
            </ul>

            <form className="d-flex me-5 w-50">
              <input
                className="form-control me-2 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={handleChange}
                value={searchField}
              />
              <button className="btn btn-outline-success w-10" type="submit">
                Search
              </button>
            </form>

            <div className="button">
              <Link to="/login" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-in me-1"> LogIn</i>
              </Link>

              <Link to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1">
                  {" "}
                  Cart ({state.length})
                </i>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div>
      <div>
          {allFilterData.length > 0 && allFilterData.map((value) => {
            return (
              <div
                id="search"
                className="list-group"
                key={value.id}
                style={{ width: "500px", margin: "0 auto" }}
                onClick={clearSearch}
              >
                <Link
                  to={`/products/${value.id}`}
                  className="list-group-item list-group-item-action list-group-item-light"
                >
                  {value.title}
                </Link>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nav;
