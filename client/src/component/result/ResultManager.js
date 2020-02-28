import React, { Component } from 'react';
import axios from 'axios';
import RowManager from './RowManager';

export default class ResultManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }
  componentDidMount() {
    axios.post('/apiServer/result')
      .then(response => {
        this.setState({ result: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })

      if(window.location.hash === "#/result2001Manager"){
        var hidden = document.getElementById("computer");
        hidden.style.display = "none"
      }
  }

  tabRow() {
    return this.state.result.map(function (object, i) {
      return <RowManager obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div style={{margin:"5% 15%"}}>
        <h3 align="center">지원자 리스트</h3>
        <table className="table table-striped" style={{ marginTop: "5%",tableLayout: "fixed"}}>
          <thead align="center">
            <tr>
              <th>이름</th>
              <th>학번</th>
              <th>이화이언 아이디</th>
              <th>수정하기</th>
            </tr>
          </thead>
          <tbody align="center">
            {this.tabRow()}
          </tbody>
        </table>
        </div>
          );
        }
  } 
