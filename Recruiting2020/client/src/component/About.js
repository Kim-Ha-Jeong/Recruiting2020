import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Ewhaian from './Ewhaian';
import Team from './Team.js';
import OB from './OB.js';

class About extends Component {
    render() {
        return (
            <div>
                <Route path="/about/Ewhaian" component={Ewhaian} exact={true} />
                <Route path="/about/Team" component={Team} />
                <Route path="/about/OB" component={OB} />
            </div>
        )
    }
}

export default About;