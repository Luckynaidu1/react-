import React, { useEffect, useState } from 'react'
 import { useParams } from 'react-router-dom'
export const Products = () => {
   const {id} =useParams(); 
   const [Pro,setproduct]=useState([])
   const[loading,setloading]=useState(false)

   useEffect(()=>{
       const getproducts=async()=>{
           setloading(true);
           const response=await fetch(`https://fakestoreapi.com/products/${id}`)
           setproduct(await response.json());
           setloading(false);

       }
       getproducts(); 
   },[])
   const Loading=()=>{
       return<>
           <p>Loading.....</p>
       </>
   }
   const Showproduct=()=>{
       return (
           <> 
            <div className="col-md-6">
                <img src={Pro.image } alt={Pro.title} height='400px' width='400px' />
            </div>
            <div className="col-md-6">
                <h4 className='text-uppercase text-black-50'>{Pro.category}</h4>
                  <h1 className='display-5'>{Pro.title}</h1>
                  <p className='lead fw-folder'>
                   <i className='fa fa-star'></i>
                   {Pro.rating && Pro.rating.rate}</p>
                    <h3 className='display-6 fw-bold my-4'> ${Pro.price}</h3>
                    <p className='lead'>{Pro.description}</p>
                    <button className='btn btn-outline-dark me-2'>Add to cart</button>
                    <button className='btn btn-dark' >Go to cart</button>
                         
                </div>
                           </>
       )
   }
    return (
    <div>
         <div className="container">
             <div className="row">


                 { loading ? <Loading/>:<Showproduct/>}

             </div>
         </div>

    </div>
  )  
}
 export default Products
