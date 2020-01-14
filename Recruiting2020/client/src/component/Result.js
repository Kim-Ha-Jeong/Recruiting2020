import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './Create';
import Edit from './Edit';
import Index from './Index';
import Find from './Find';
import Pass from './Pass';
import UnPass from './UnPass';

class Result extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/create'} className="nav-link">Create</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/index'} className="nav-link">Index</Link>
                                </li>
                            </ul>
                        </div>
                    </nav> <br />
                    <h2>Welcome to React CRUD Tutorial</h2> <br />
                    <Switch>
                        <Route exact path='/create' component={Create} />
                        <Route path='/edit/:id' component={Edit} />
                        <Route path='/index' component={Index} />
                        <Route path="/find" component={Find} />
                        <Route path="/pass" component={Pass} />
                        <Route path="/unpass" component={UnPass} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Result;