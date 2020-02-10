import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RowManager from './RowManager';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }
  componentDidMount() {
<<<<<<< HEAD
    axios.get('http://localhost:4000/notice')
=======
    axios.get('/apiServer/notice')
>>>>>>> 393c40bba901bd8f15bb795995c62775bce42ba8
      .then(response => {
        this.setState({ result: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  tabRow() {
    return this.state.result.map(function (object, i) {
      return <RowManager obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">Notice</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>내용</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
        <Link to="/noticeManager/create" className="btn btn-primary">Create</Link>
        
        </div>
          );
        }
  }