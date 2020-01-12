import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Ewhaian from './Ewhaian';
import Team from './Team.js';
import OB from './OB.js';

class About extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/About/Ewhaian">이화이언 소개</Link></li>
                    <li><Link to="/About/Team">운영진 소개</Link></li>
                    <li><Link to="/About/OB">OB 소감</Link></li>
                </ul>
                <Route path="/About/Ewhaian" component={Ewhaian} exact={true} />
                <Route path="/About/Team" component={Team} />
                <Route path="/About/OB" component={OB} />
            </div>
        )
    }
}

export default About;