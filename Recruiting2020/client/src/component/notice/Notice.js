import React, { Component } from 'react';
import axios from 'axios';
import Row from './Row';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {result: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/notice')
        .then(response => {
          this.setState({ result: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.result.map(function(object, i){
          return <Row obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">공지사항</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }