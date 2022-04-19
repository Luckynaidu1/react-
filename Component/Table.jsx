import React, {useState, useEffect} from 'react'
import MaterialTable from 'material-table'
import './Mat.css'
import {Checkbox,Select,MenuItem} from '@material-ui/core'
function Mat_table (){
    const[filter,setFilter]=useState(true)
    const[data,setdata]=useState([]);
    const columns=[
        {title:'Name', field:'name.first'},
        {title:'Mail ID', field:'email'},
        {title:'Country', field:'location.country'}
    ]
    useEffect(()=>{
        fetch("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
        .then(resp => resp.json())
        .then(resp => {setdata(resp)
        })
    },[])
    const handleChange=()=>{
        setFilter(!filter)
       }
    return(        
        <>
            <div className="App">
                <h1 align="center">React-App</h1>
                <h4 align='center'>Material Table</h4>
                {/* <Checkbox
                checked={filter}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
                /> */}
                <MaterialTable
                title="emp data"
                data={data}
                columns={columns}
                options={{
                    filtering:filter
                    }}
                actions={[
                    {
                    icon:()=><Checkbox
                    checked={filter}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    />,
                    tooltip:"Hide/Show Filter option",
                    isFreeAction:true
                    }
                ]}
                />
            </div>        
        </>
    )
}
export default Table;