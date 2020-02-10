import React, { Component } from 'react';
import axios from 'axios';
import './Notice.css';
import { Collapse,Icon } from 'antd';
<<<<<<< HEAD
=======
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
>>>>>>> 393c40bba901bd8f15bb795995c62775bce42ba8

const { Panel } = Collapse;

const noticeExtra = () => (
  <Icon
    type="notification"
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

const FAQExtra = () => (
  <Icon
    type="question-circle"
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

class Row extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expandIconPosition: 'right',
      result: []
    };
  }

  componentDidMount() {
<<<<<<< HEAD
    if (window.location.pathname === '/notice') {
      axios.get('http://localhost:4000/notice')
=======
    if (window.location.hash === '#/notice') {
      axios.get('/apiServer/notice')
>>>>>>> 393c40bba901bd8f15bb795995c62775bce42ba8
        .then(response => {
          this.setState({ result: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
      var boldChange = document.getElementById('noticeLink');
      boldChange.style.fontWeight = 'bold';
<<<<<<< HEAD
    } else if(window.location.pathname === '/FAQ') {
      axios.get('http://localhost:4000/FAQ')
=======
    } else if(window.location.hash === '#/FAQ') {
      axios.get('/apiServer/FAQ')
>>>>>>> 393c40bba901bd8f15bb795995c62775bce42ba8
        .then(response => {
          this.setState({ result: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
      boldChange = document.getElementById('FAQLink');
      boldChange.style.fontWeight = 'bold';
    }
  }

  selectExtra() {
<<<<<<< HEAD
    if(window.location.pathname === '/notice'){
      return(noticeExtra())
    } else if(window.location.pathname === '/FAQ'){
=======
    if(window.location.hash === '#/notice'){
      return(noticeExtra())
    } else if(window.location.hash === '#/FAQ'){
>>>>>>> 393c40bba901bd8f15bb795995c62775bce42ba8
      return(FAQExtra())
    }
  }

  selectSpan(){
<<<<<<< HEAD
    if(window.location.pathname === '/FAQ'){
=======
    if(window.location.hash === '#/FAQ'){
>>>>>>> 393c40bba901bd8f15bb795995c62775bce42ba8
      return <span style={{margin: "0 10px 0 2.5px",color:"#EC1468"}}>A</span>
    }
  }


  panel() {
    return (
      this.state.result.map((obj, i) => {
        return <Panel extra={this.selectExtra()} header={obj.title} key={obj.num}>
                <div>
                  {this.selectSpan()}
                  {obj.desc}
                </div>
              </Panel>
      })
    )
  }

  render() {
    return (
      <div className="notice-container">
        <div align="center">
          <table id="notice-table">
            <thead id="notice-thead">
              <tr>
                <th className="notice-th">
<<<<<<< HEAD
                  <a href="/notice" id="noticeLink">공지사항</a>
                </th>
                <th className="notice-th">
                  <a href="/FAQ" id="FAQLink">FAQ</a>
=======
                  <Link to="/notice" id="noticeLink">공지사항</Link>
                </th>
                <th className="notice-th">
                  <Link to="/FAQ" id="FAQLink">FAQ</Link>
>>>>>>> 393c40bba901bd8f15bb795995c62775bce42ba8
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <Collapse expandIconPosition='right'>
          {this.panel()}
        </Collapse>
      </div>
    );
  }
}

<<<<<<< HEAD
export default Row;
=======
export default Row;
>>>>>>> 393c40bba901bd8f15bb795995c62775bce42ba8
