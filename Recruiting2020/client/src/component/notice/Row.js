import React, { Component } from 'react';
import axios from 'axios';
import './Notice.css';
import { Collapse,Icon } from 'antd';

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
    if (window.location.pathname === '/notice') {
      axios.get('http://localhost:4000/notice')
        .then(response => {
          this.setState({ result: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
      var boldChange = document.getElementById('noticeLink');
      boldChange.style.fontWeight = 'bold';
    } else if(window.location.pathname === '/FAQ') {
      axios.get('http://localhost:4000/FAQ')
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
    if(window.location.pathname === '/notice'){
      return(noticeExtra())
    } else if(window.location.pathname === '/FAQ'){
      return(FAQExtra())
    }
  }

  selectSpan(){
    if(window.location.pathname === '/FAQ'){
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
                  <a href="/notice" id="noticeLink">공지사항</a>
                </th>
                <th className="notice-th">
                  <a href="/FAQ" id="FAQLink">FAQ</a>
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

export default Row;