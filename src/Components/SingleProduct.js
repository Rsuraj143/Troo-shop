import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { addCart } from '../redux/action'

const SingleProduct = () => {

    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const addProduct = (product)=>{
      dispatch(addCart(product))
    }


    useEffect(()=>{
        const getProduct = async ()=>{
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json())
            setLoading(false)
            
        }
        getProduct()
    },[])

    const Loading = () => {
        return (
          <>
            <div className='col-md-6'>
              <h2>
                Loading.....
              </h2>
            </div>
            <div className='col-md-6'>
            <h2>
                Loading.....
              </h2>
            </div>
          </>
        );
      };

      const ShowProduct =() =>{
        return(
            <>
            <div className='col-md-6'>
              <img src={product.image} alt={product.title} height="400px" width="400px" /> 
            </div>
            <div className='col-md-6 '>
                <h4 className='text-uppercase text-black-50'> {product.category}</h4>
                <h1 className='display-5' >{product.title}</h1>
                <p className='lead fw-bolder'>Rating {product.rating && product.rating.rate}
                  <i className='fa fa-star' ></i>
                </p>
                <h3 className='display-6 fw-bold my-6'>$ {product.price} </h3>
                <p className='lead'> {product.description}</p>
                <button onClick={()=>addProduct(product)} className='btn btn-outline-dark px-4 py-2 me-2'>Add to cart</button>

                <Link to="/cart" className='btn btn-dark me-2 px-3 py-2'>Go to cart</Link>

            </div>
            </>
        )
      }


  return (
    <>
   
    <div>
        <div className='container py-5'>
            <div className='row py-4'>
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    </div>
    </>
  )
}

export default SingleProduct