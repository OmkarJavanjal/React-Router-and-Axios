import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import './index.css';
import EditInfo from './editRes';
import  HttpDemo from './httpDemo';

ReactDOM.render(<Router>
        <div>
            <Route path="/" component={App}/>
            <Route path="/getInfo" component={HttpDemo} />
            <Route path="/editInfo" component={EditInfo} />
        </div>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
