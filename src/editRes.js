/**
 * Created by AC12396 on 6/7/2019.
 */
import React, { Component } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class EditInfo extends Component {

    constructor(){
        super();

        this.state = {
            responseObj : {}
        };

        this.handleEvent = this.handleEvent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        console.log('Component WILL MOUNT!');
        this.setState({responseObj : JSON.parse(sessionStorage.getItem('responseObj'))});
    }

    handleEvent(event){
        let fakeRes = Object.assign({}, this.state.responseObj);
        fakeRes.title = event.target.value;
        this.setState({responseObj:fakeRes});
    }

    handleSubmit(event){
        axios.put('https://jsonplaceholder.typicode.com/posts/1', this.state.responseObj)
            .then(response => {
                alert('Title is updated to: ' + this.state.responseObj.title);
                console.log('Success! ' + JSON.stringify(response));
            })
            .catch(function (error) {
                console.log(error);
            })

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="box">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <label  className="col-6 text-center"><b>UserId: </b></label>
                            <label className="col-6 text-center"><b>Id: </b></label>
                        </div>
                        <div>
                            <label className="col-6 text-center">{this.state.responseObj.userId}</label>
                            <label className="col-6 text-center">{this.state.responseObj.id}</label>
                        </div>
                    </div>

                    <div>
                        <label className="col-12 text-center"><b>Title: </b></label>
                    </div>
                    <div>
                        <input className="col-12 updateMobile" type="text" value={this.state.responseObj.title} onChange={this.handleEvent}/>
                    </div>
                    <div>
                        <input className="col-12 submitButton btn " type="submit" value="Submit"/>
                    </div>
                </form>
                </div>
            </div>
        );
    }
}

export default EditInfo;