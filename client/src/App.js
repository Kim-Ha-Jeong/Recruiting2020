import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './component/about/About';
import Submit from './component/submit/Submit';
import Complete from './component/submit/Complete';
import Header from './component/menu/Header';
import Notice from './component/notice/Notice';
import Find from './component/result/Find';
import Result from './component/result/Result';
import Research1 from './component/research/research1';
import Research2 from './component/research/research2';
import Probation from './component/probation/Probation';
import ResultManager from './component/result/ResultManager';
import Edit from './component/result/Edit';

class App extends Component{
  render(){
    return(
      <div>
        <Header></Header>
        <div>
          <Route path="/" component={About} exact={true} />
          <Route path="/notice" component={Notice} exact={true} />
          <Route path="/submit" component={Submit} />
          <Route path="/success" component={Complete} />
          <Route path="/FAQ" component={Notice} />
          <Route path="/result" component={Find} exact={true} />
          <Route path="/result/:key" component={Result} />
          <Route path="/undefine" component={Complete} />
          <Route path="/research1" component={Research1} />
          <Route path="/research2" component={Research2} />
          <Route path="/probationDesign" component={Probation} />
          <Route path="/probationContent" component={Probation} />
          <Route path="/result2001Manager" component={ResultManager} />
          <Route path="/result2001Manager/edit/:id" component={Edit} />
        </div>
      </div>

    )
  }
}

export default App;
