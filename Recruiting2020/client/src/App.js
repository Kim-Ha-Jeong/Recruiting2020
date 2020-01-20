import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import NoticeManager from './component/notice/NoticeManager';
import Submit from './component/Submit';
import FAQ from './component/FAQ';
import Nav from './component/Nav';
import Notice from './component/notice/Notice';
import Edit from './component/notice/Edit'
import Create from './component/notice/Create';
import Result from './component/result/Result';
import Pass from './component/result/Pass';
import UnPass from './component/result/UnPass';
import Undefine from './component/result/Undefine';
import dnd from './component/dnd';

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
          <Route path='/noticeManager/edit/:id' component={Edit} />
          <Route path="/noticeManager" component={NoticeManager} exact={true} />
          <Route path="/noticeManager/create" component={Create} />
          <Route path="/result" component={Result} exact={true} />
          <Route path="/result/pass" component={Pass} />
          <Route path="/result/unpass" component={UnPass} />
          <Route path="/result/undefine" component={Undefine} />
          <Route path="/dnd" component={dnd}/>
        </div>
      </div>
    )
  }
}

export default App;