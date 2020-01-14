import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Notice from './component/Notice';
import Submit from './component/Submit';
import FAQ from './component/FAQ';
import Result from './component/Result';
import Nav from './component/Nav';

class App extends Component{
  render(){
    return(
      <div>
        <Nav></Nav>
        <div>
          <About></About>
          <Route path="/" component={Home} exact={true} />
          <Route path="/notice" component={Notice} />
          <Route path="/submit" component={Submit} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/result" component={Result} />
        </div>
      </div>
    )
  }
}

export default App;