import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useParams } from 'react-router-dom'
import Nav from './Nav'

const SingleProduct = () => {

    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const getProduct = async ()=>{
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json())
            setLoading(false)
        }
    },[])

    const Loading = () => {
        return (
          <>
            Loading....
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
            </div>
            </>
        )
      }


  return (
    <>
    <Nav/>
    <div>
        <div className='container'>
            <div className='row'>
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    </div>
    </>
  )
}

export default SingleProduct