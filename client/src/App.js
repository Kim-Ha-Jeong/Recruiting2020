import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './component/about/About';
import NoticeManager from './component/notice/NoticeManager';
import Submit from './component/submit/Submit';
import Complete from './component/submit/Complete';
import Header from './component/menu/Header';
import Notice from './component/notice/Notice';
import Edit from './component/notice/Edit'
import Create from './component/notice/Create';
import Find from './component/result/Find';
import Result from './component/result/Result';
import Undefine from './component/submit/Undefine';
import Research1 from './component/research/research1';
import Research2 from './component/research/research2';
import Probation from './component/probation/Probation';

class App extends Component{
  render(){
    return(
      <div>
        <Header></Header>
        <div>
          <Route path="/" component={About} exact={true} />
          <Route path="/notice" component={Notice} exact={true} />
          <Route path="/submit" component={Submit} />
          <Route path="/complete" component={Complete} />
          <Route path="/FAQ" component={Notice} />
          <Route path='/noticeManager/edit/:id' component={Edit} />
          <Route path="/noticeManager" component={NoticeManager} exact={true} />
          <Route path="/noticeManager/create" component={Create} />
          <Route path="/result" component={Find} exact={true} />
          <Route path="/result/:key" component={Result} />
          <Route path="/undefine" component={Undefine} />
          <Route path="/research1" component={Research1} />
          <Route path="/research2" component={Research2} />
          <Route path="/probationDesign" component={Probation} />
          <Route path="/probationContent" component={Probation} />
        </div>
      </div>

    )
  }
}

export default App;
