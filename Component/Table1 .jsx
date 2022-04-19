import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table' 
import {Cheakbox} from '@material-ui/core'
import  Axios from 'axios'
const Table1  = () => {
    const[data,setData]=useState([]);
    const [filter,setFilter]=useState(true)
    const columns=[
        {title:'Name', field:'name.first'},
        {title:'Mail ID' , field:'email'},
        {title:'Country', field:'location.country'}

    ]
    const handlechange=()=>{
          setFilter(!filter)
    }
    useEffect(()=>{
      Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist").
      then((Response)=>{
          setData(Response.data)
      })
      .catch()
    })

  return (
    <div>Table
        <div>
            <h1 align='center'>material</h1>
             <MaterialTable 
            title='emp data'
            data={data}
            columns={columns}
            options={{
                filtering:filter
            }}
            // actions={[
            //     {
            //         icon:()=><Cheakbox
            //         cheaked={filter}
            //         onChange={handlechange}
            //          />,
            //          tooltip: "hide/show filter  options",
            //         isFreeAction:true
            //         }
            // ]}
            />

               
            </div>
         </div>
  )
}
export default Table1