import React from 'react'
import { gAction,gnAction } from './Redux.action'
import {useDispatch,useSelector} from 'react-redux'
const Message = () => {
    let dispatch=useDispatch()
    let message=useSelector((state)=>{
           return state.message
    })
    let gmHandler=()=>{
         dispatch(gAction())
    }
   let gnHandler=()=>{
        dispatch(gnAction())
    }
  return (
    <div>Message
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <div className="title">
                                <div className="card-header">
                                     <h1>{message}</h1>
                                </div>
                                <div className="card-body">
                                    <button className='btn btn-info me-2' onClick={gmHandler}>Click</button>
                                    <button className='btn btn-danger me-2'onClick={gnHandler}>Click me</button>
                                     </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Message