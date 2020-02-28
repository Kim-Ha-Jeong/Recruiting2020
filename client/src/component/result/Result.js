import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Button } from 'antd';
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
    axios.post('/apiServer/result/' + this.props.match.params.key)
      .then((res) => this.setState({
        result: res.data
      }))
      .catch(function (error) {
        console.log(error);
      });
  }

  tabRow() {
    return this.state.result.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  selectButton() {
    return (this.state.result.map((object, i) => {
      if (object.team === "디자인팀" && object.pass === "서류합격") {
        return <Link to="/probationDesign">
          <Button shape="round" id="probation-content" className="probation-button">
            사전 과제 안내 페이지 바로 가기
        </Button>
        </Link>
      } else if (object.team === "컨텐츠팀" && object.pass === "서류합격") {
        return <Link to="/probationContent">
          <Button shape="round" id="probation-content" className="probation-button">
            사전 과제 안내 페이지 바로 가기
          </Button>
        </Link>
      }
    })
    )
  }

  selectWord() {
    return (this.state.result.map((object, i) => {
      if (object.pass === "서류합격" || object.pass === "최종합격") {
        return <span>축하합니다! 합격하셨습니다!</span>
      } else if (object.pass === "불합격") {
        return <span>지원해주셔서 감사합니다.</span>
      }
    })
    )
  }

  render() {
    return (
      <div id="wrapper">
        <Row>
          <h2 id="title" align="center">결과 확인</h2>
        </Row>
        <hr />
        <div className="result-container">
          <h5 align="center" id="result-title">{this.selectWord()}</h5>
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
          <div id="probation-wrapper">
            {this.selectButton()}
          </div>
        </div>
      </div>
    );
  }

}
