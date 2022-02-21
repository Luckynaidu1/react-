import React, { Component } from 'react';
class ContactDetails extends Component {
  render() {
    return <div>
        <div className='container mt-5'>
           {/*  <pre>{JSON.stringify(this.props)}</pre> */}
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-header'>
                            <img src={this.props.details.picture.large}></img>

                        </div>
                        <div className='card-body'>
                            <ul className='list-group' >
                                <li className='list-group-item'>{this.props.details.email}</li>
                                <li className='list-group-item'>{this.props.details.gender}</li>
                                <li className='list-group-item'>{this.props.details.dob.age}</li>
                                <li className='list-group-item'>{this.props.details.location.city}</li>
                            </ul>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
  }
}
export default ContactDetails
