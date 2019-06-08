import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './index.css';

class App extends Component {
  constructor(){
    super();

      this.state = {
          resMsg : {},
          reqMsg: {
              title: 'foo',
              body: 'bar',
              userId: 1
              }
      };


      axios.post('https://jsonplaceholder.typicode.com/posts',this.state.reqMsg)
          .then(response => {
              this.setState({resMsg : response.data});
              console.log('greetingsMsg: ' + JSON.stringify(this.state.resMsg));
              sessionStorage.setItem('greetingsMsg', JSON.stringify(this.state.resMsg));
          })
          .catch(function (error) {
              console.log(error);
          })
  }
  render() {
    return (
      <div className="fluid-container">
        <h1 className=" welcomeBox"><b>React Router And Axios Demo</b></h1>
        <h4 className="welcomeBox2">{this.state.resMsg.title}</h4>
        <div>
          <ul className="">
            <li className=""><Link to="getInfo"> Get Data </Link></li>
            <li><Link to="editInfo"> Edit Data </Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
