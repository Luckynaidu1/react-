import React, { useState , useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'
export const Product = () => {
    const [Api,setApi]=useState([])
    const [filtter, setFilter]=useState(Api)
   const [loding, setloading]=useState(false)
   useEffect(()=>{
    let componentMounted=true
          const getProducts =async()=>{
                     setloading(true)
                     const response =await fetch("https://fakestoreapi.com/products");
                      if(componentMounted){
                        setApi(await response.clone().json());
                        setFilter(await response.json());
                        setloading(false)
                      }
                       return()=> { componentMounted= false;
                      }
                   }   
                   getProducts()  
               },[null])

          const Loading=()=>{
            return<>

            <h1 className='text-center'>Loading.....</h1>
             </>
          }

          const filterdata=(cat)=>{
              const update=Api.filter((x)=>x.category === cat)
              setFilter(update)
          }  
          const Showdata=()=>{
            return<> <div className='button d-flex justify-content-center mb-5 pb-5'>
           <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(Api)}>All</button>
           <button className='btn btn-outline-dark me-2' onClick={()=>filterdata("men's clothing")}>mens collection</button>
           <button className='btn btn-outline-dark me-2'onClick={()=>filterdata("women's clothing")}>Womens collection</button>
           <button className='btn btn-outline-dark me-2' onClick={()=>filterdata("jewelery")}>jewellary</button>
           <button className='btn btn-outline-dark me-2' onClick={()=>filterdata("electronics")}>electronics</button>
           </div>
           <div className='row justify-content-center'> 
              {
                  filtter.map((product,index)=>{
                  return<> 
              <div className='col-md-3 mb-4'key={product.id} > 
               <div className="card" >
                  <img src={product.image} className="card-img-top" alt={product.title} height='250px'/>
                  <div className="card-body">
                    <h5 className="card-title">{product.title.substring(0,12)}</h5>
                    <p className="card-text fw-bold">${product.price}</p>
                    <NavLink to={`/product/${product.id}`}className="btn btn-primary">Buy now</NavLink>
                  </div>
              </div>
                </div>
                </>
                })
              }
              </div>
            </>
          }
      
   return (

    <div>
        <div className='container my-5'>
          <div className='row'>
             <div className='col-12'>
                   <h1 className='text-center display-fx-bolder'>Latest product</h1>
                   <hr/>
        </div>
                    <div className='row-justify-content-center-4'>
                      {loding ? <Loading/>:<Showdata/>}
                    </div>     
             </div>

          </div>
    </div>
  )
}
export default Product
