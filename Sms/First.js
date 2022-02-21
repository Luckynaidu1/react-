import React, { Component } from 'react';
class First extends Component {
    state={
        count:200
    }
    UpdateCountHandler=(event)=>{
        this.setState({count:event.target.maxLength-event.target.value.length})
    }

  render() {
    return (



    <div className="container mt-6">
    <div className="row">
        <div className="col md-6">
            <div className="card">
                <div className="card-header bg-success">
o0                 <h2>Sms Applications</h2>
                </div>
                <div className="card-body">
                    <form>
                        <div className='form-group'>
                            <textarea cols="30" row="3" onChange={this.UpdateCountHandler} className="form-control"  minLength="1" maxLength="200" ></textarea> 
                        </div>
                             <h5>remaining charcters:{this.state.count}</h5>
                    </form> 
                    
                </div>
            </div>
        </div>
    </div>
</div>
    )
  }
}
export default First
