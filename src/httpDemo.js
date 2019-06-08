/**
 * Created by AC12396 on 5/30/2019.
 */
import React, { Component } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class HttpDemo extends Component {

    constructor(){
        super();
        this.state = {
            responseObj : {}
        };

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                this.setState({responseObj : response.data});
                console.log('response: ' + JSON.stringify(this.state.responseObj));
                sessionStorage.setItem('responseObj', JSON.stringify(this.state.responseObj));
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <div className="box">
                <div>
                    <label className="col-6 text-center"><b>UserId: </b></label>
                    <label className="col-6 text-center"><b>Id: </b></label>
                </div>
                <div className="">
                    <label className="col-6 text-center">{this.state.responseObj.userId}</label>
                    <label className="col-6 text-center">{this.state.responseObj.id}</label>
                </div>

                <div>
                    <div>
                        <label className="col-12 text-center"><b>Title: </b></label>
                    </div>
                    <div>
                        <label className="col-12 text-center">{this.state.responseObj.title}</label>
                    </div>
                </div>
                </div>

            </div>

        );
    }
}

export default HttpDemo;