import React from 'react';
import Axios from 'axios'
 class First extends React.Component {
state={User:[]  }
getdataHnadler=()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users')
              .then((response)=>{
               this.setState({User:response.data})

              })
              .catch()
}
    
  render() {
    return <>
    <h1>data</h1>
    <pre>{JSON.stringify}</pre>
    <button className='btn btn-danger' onClick={this.getdataHnadler}>Lucky</button> 
<div className="container">
    <div className="row">
        <div className="col-md-8">
            <div className="table table-hover">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                
    <tbody>
        { this.state.User.map((One)=>{
                return<tr>
                <td>{One.id}</td>
                <td>{One.name}</td>
                <td>{One.email}</td>  
                </tr>

            })
        }
    </tbody>
            </div>
        </div>
    </div>
</div> 
 
    </>

  }
}
export default First