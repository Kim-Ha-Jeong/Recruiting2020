import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Manager from './Manager';

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
  }

  tabRow() {
    return this.state.result.map(function (object, i) {
      return <Manager obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">Notice</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>이름</th>
              <th>학번</th>
              <th>이화이언 아이디</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
        </div>
          );
        }
  } 
