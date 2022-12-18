import React, { Component } from "react";
import Axios from "axios";
export default class Fetch extends Component {
  state = { User: [] };

  axiosHandler = () => {
    Axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
      // .then is used to show success response of API,
      .then((e) => {
        this.setState({ User: e.data });
      })
      // .catch is used to show failed response of API
      .catch();
  };
  render() {
    return (
      <div className="w-50">
        {/*here onclick we used to get the data from above event handler  */}
        <button className="btn btn-primary" onClick={this.axiosHandler}>
          Click
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
              <th scope="col">body</th>
            </tr>
          </thead>
          <tbody>
            {this.state.User.map((e) => {
              return (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

// To fetch the data we are using 3rd party package i.e axios
// to install the axios we need to enter at exact location
// to install the axios command is
// npm i axios
// npm install axios
// npm uninstall axios
// while importing axios we need to Enter the staring letter Caps and, while writing the path starting letter should be in small
// to get dummy API we can Jsonplaceholder
