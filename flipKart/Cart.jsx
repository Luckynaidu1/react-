import React from 'react'
import { useCart } from 'react-use-cart'
 const Cart = () => {
    const {
      isEmpty,
      totalUniqueItems,
      items,
      totalItems,
      cartTotal,
      updateItemQuantity,
       removeItem, 
       emptyCart,
    }=useCart();
      

    if(isEmpty) return <h1 className='text-center'> your cart is emptyt</h1>
     return(
       <div>
       <section className='py-4 container'>
         <div className='row justify-content-center'> 
         <div className='col-12'>  
         <h5>cart:({totalUniqueItems}) total Items:({totalItems})</h5>
         <table className='table table-light table-hover m-0'>
                <tbody>
              {items.map((item,index)=>{
                return <tr key={index}>
                  <td> <img src={item.img} style={{height:'6rem'}} /></td>
                  <td>{item.title}</td>
                  <td>{item.price}</  td>
                  <td>Quantity({item.quantity})</td>
                  <td><button className='btn btn-info ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
                 <button className='btn btn-info'onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
                 <button className='btn btn-danger' onClick={()=>removeItem(item.id)}>Remove</button>
                </td>
                </tr>
              })}
              </tbody> 
         </table>
         </div>    
         <div className='col-auto ms-auto'>
           <h2>Total price:{cartTotal}</h2>
           <button className='btn btn-primary' onClick={()=>emptyCart()}>clear cart</button>
           <button className='btn btn-primary' >Buy now</button>
            
         </div>
              </div>
 
       </section>
     )

    </div>
  ) 
}
export default Cart