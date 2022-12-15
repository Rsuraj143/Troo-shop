
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delCart } from "../redux/action";

export default function Cart() {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delCart(item));
  };


  
  const [count, setCount] = useState(1)

  const cartItems = (cartItem) => {
    return (
      <div className="container my-3 bg-light rounded-3">
        <div className="container py-1">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="close"
          ></button>

          <div className="row justify-content-center ">
            <div className="col-md-3" key={cartItem.id}>
              <img
                src={cartItem.image}
                alt={cartItem.title}
                width={150}
                height={150}
              />
            </div>
            <div className="col-md-3">
              <h5 className="fw-normal">{cartItem.title}</h5>
              <p className="lead fw-bold">
                {count} X ${cartItem.price} = $ {count * cartItem.price}
              </p>
              <button onClick={()=>setCount(count + 1)} className="btn btn-outline-dark me-4">
                <i className="fa fa-plus"></i>
              </button>
              <button onClick={()=>setCount((count<=1)?1:(count-1))} className="btn btn-outline-dark " >
                <i className="fa fa-minus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="container my-3 bg-light rounded-3">
        <div className="container py-4">
            <div className="row">
                <h3>Your Cart is Empty</h3>
                <Link to="/products">Continue Shopping</Link>
            </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </>
  );
}
