import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import NoticeManager from './component/NoticeManager';
import Submit from './component/Submit';
import FAQ from './component/FAQ';
import Result from './component/Result';
import Nav from './component/Nav';
import Index from './component/Index';
import Edit from './component/Edit'
import Create from './component/Create';
import Pass from './component/Pass';
import UnPass from './component/UnPass';

class App extends Component{
  render(){
    return(
      <div>
        <Nav></Nav>
        <div>
          <About></About>
          <Route path="/" component={Home} exact={true} />
          <Route path="/notice" component={Index} />
          <Route path="/submit" component={Submit} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/result" component={Result} exact={true} />
          <Route path='/noticeManager/edit/:id' component={Edit} />
          <Route path="/noticeManager" component={NoticeManager} exact={true} />
          <Route path="/noticeManager/create" component={Create} />
          <Route path="/result/pass" component={Pass} />
          <Route path="/result/unpass" component={UnPass} />
        </div>
      </div>
    )
  }
}

export default App;