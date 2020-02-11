import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row,Button } from 'antd';
import TableRow from './Row';
import './Result.css'

export default class Pass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }

  componentDidMount() {
    axios.get('/apiServer/result/' + this.props.match.params.key)
      .then((res) => this.setState({
        result: res.data
      }))
      .catch(function (error) {
        console.log(error);
      });

    var showDesign = document.getElementById('probation-design');
    showDesign.style.display = 'none';
    var showContent = document.getElementById('probation-content');
    showContent.style.display = 'none';

    this.state.result.map(function(object,i){
      if(object.team === "디자인팀" && object.pass === "합격"){
        showDesign.style.display = 'inline-block';
      } else if(object.team === "컨텐츠팀" && object.pass === "합격"){
        showContent.style.display = "inline-block";
      }
    })

  }

  tabRow() {
    return this.state.result.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div id="wrapper">
        <Row>
          <h2 id="title" align="center">결과 확인</h2>
        </Row>
        <hr />
        <div className="result-container">
          <h4 align="center" id="result-title">합격 / 불합격 문구</h4>
          <p align="center">추가 문구 및 안내사항</p>
          <table id="result-table">
            <thead id="result-thead">
              <tr>
                <th className="result-th">이름</th>
                <th className="result-th">학번</th>
                <th className="result-th">팀</th>
                <th className="result-th">합격 여부</th>
              </tr>
            </thead>
            <tbody>
              {this.tabRow()}
            </tbody>
          </table>
          <Button shape="round" id="probation-design">
            <Link to="/probationDesign">수습 과제 안내 페이지 바로 가기</Link>
          </Button>
          <Button shape="round" id="probation-content">
            <Link to="/probationContent">수습 과제 안내 페이지 바로 가기</Link>
          </Button>
        </div>
      </div>
    );
  }

}
