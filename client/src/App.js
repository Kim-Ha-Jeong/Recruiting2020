<<<<<<< HEAD
import React, { Component } from "react";
import { Route } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import NoticeManager from "./component/notice/NoticeManager";
import Submit from "./component/Submit";
import Header from "./component/Header";
import Notice from "./component/notice/Notice";
import Edit from "./component/notice/Edit";
import Create from "./component/notice/Create";
import Find from "./component/result/Find";
import Result from "./component/result/Result";
import Undefine from "./component/result/Undefine";
import Research1 from "./component/research/research1";
import Research2 from "./component/research/research2";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div>
          <Route path="/" component={About} exact={true} />
          <Route path="/notice" component={Notice} />
          <Route path="/submit" component={Submit} />
          <Route path="/FAQ" component={Notice} />
          <Route path="/noticeManager/edit/:id" component={Edit} />
=======
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import NoticeManager from './component/notice/NoticeManager';
import Submit from './component/Submit';
import Complete from './component/Complete';
import Header from './component/Header';
import Notice from './component/notice/Notice';
import Edit from './component/notice/Edit'
import Create from './component/notice/Create';
import Find from './component/result/Find';
import Result from './component/result/Result';
import Undefine from './component/result/Undefine';
import Research1 from './component/research/research1';
import Research2 from './component/research/research2';

class App extends Component{
  render(){
    return(
      <div>
        <Header></Header>
        <div>
          <Route path="/" component={Home} exact={true} />
          <Route path="/notice" component={Notice} exact={true} />
          <Route path="/submit" component={Submit} />
          <Route path="/complete" component={Complete} />
          <Route path="/FAQ" component={Notice} />
          <Route path='/noticeManager/edit/:id' component={Edit} />
>>>>>>> 393c40bba901bd8f15bb795995c62775bce42ba8
          <Route path="/noticeManager" component={NoticeManager} exact={true} />
          <Route path="/noticeManager/create" component={Create} />
          <Route path="/result" component={Find} exact={true} />
          <Route path="/result/:key" component={Result} />
<<<<<<< HEAD
          <Route path="/result/undefine" component={Undefine} />
=======
          <Route path="/undefine" component={Undefine} />
>>>>>>> 393c40bba901bd8f15bb795995c62775bce42ba8
          <Route path="/research1" component={Research1} />
          <Route path="/research2" component={Research2} />
        </div>
      </div>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 393c40bba901bd8f15bb795995c62775bce42ba8
  }
}

export default App;
