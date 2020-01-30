import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import NoticeManager from './component/notice/NoticeManager';
import Submit from './component/Submit';
import Header from './component/Header';
import Notice from './component/notice/Notice';
import Edit from './component/notice/Edit'
import Create from './component/notice/Create';
import Find from './component/result/Find';
import Result from './component/result/Result';
import UnPass from './component/result/UnPass';
import Undefine from './component/result/Undefine';
import dnd from './component/dnd';
import Research1 from './component/research/research1';
import Research2 from './component/research/research2';

class App extends Component{
  render(){
    return(
      <div>
        <Header></Header>
        <div>
          <About></About>
          <Route path="/" component={Home} exact={true} />
          <Route path="/notice" component={Notice} />
          <Route path="/submit" component={Submit} />
          <Route path="/FAQ" component={Notice} />
          <Route path='/noticeManager/edit/:id' component={Edit} />
          <Route path="/noticeManager" component={NoticeManager} exact={true} />
          <Route path="/noticeManager/create" component={Create} />
          <Route path="/result" component={Find} exact={true} />
          <Route path="/result/:key" component={Result} />
          <Route path="/result/unpass" component={UnPass} />
          <Route path="/result/undefine" component={Undefine} />
          <Route path="/dnd" component={dnd}/>
          <Route path="/research1" component={Research1} />
          <Route path="/research2" component={Research2} />
        </div>
      </div>
    )
  }
}

export default App;