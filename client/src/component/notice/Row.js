import React, { Component } from 'react';
import axios from 'axios';
import './Notice.css';
import { Collapse, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
    if (window.location.hash === '#/notice') {
      axios.get('/apiServer/notice')
        .then(response => {
          this.setState({ result: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
      var boldChange = document.getElementById('noticeLink');
      boldChange.style.fontWeight = 'bold';

    } else if (window.location.hash === '#/FAQ') {
      axios.get('/apiServer/FAQ')
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
    if (window.location.hash === '#/notice') {
      return (noticeExtra())
    } else if (window.location.hash === '#/FAQ') {
      return (FAQExtra())
    }
  }

  selectSpan() {
    if (window.location.hash === '#/FAQ') {
      return <span style={{ margin: "0 10px 0 2.5px", color: "#EC1468" }}>A</span>
    }
  }

  selectBrSplit(result) {
    var size = result.length;
    if(size >= 7) {
      return (<span>
        {this.brSplit1(result)}
        {this.brSplit2(result)}
        {this.brSplit3(result)}
        {this.brSplit4(result)}
      </span>
      )
    }if (size >= 5) {
      return (<span>
        {this.brSplit1(result)}
        {this.brSplit2(result)}
        {this.brSplit3(result)}
      </span>
      )
    } else if (size >= 3) {
      return (<span>{this.brSplit1(result)}
        {this.brSplit2(result)}
      </span>)
    } else {
      return (<span>{this.brSplit1(result)}</span>)
    }
  }

  brSplit1(result) {
    return <span>
      {result[0]}<br className="forMobile" />
      {result[1]}
    </span>
  }

  brSplit2(result) {
    return <span>
      <br />
      {result[2]}<br className="forMobile" />
      {result[3]}
    </span>
  }

  brSplit3(result) {
    return <span>
      <br />
      {result[4]}<br className="forMobile" />
      {result[5]}
    </span>
  }

  brSplit4(result) {
    return <span>
      <br />
      {result[6]}<br className="forMobile" />
      {result[7]}
    </span>
  }

  panel() {
    return (
      this.state.result.map((obj, i) => {
        const text = obj.desc;
        const re = '$$';
        const result = text.split(re);
        return <Panel extra={this.selectExtra()} header={obj.title} key={obj.num}>
          <div>
            {this.selectSpan()}
            {this.selectBrSplit(result)}
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
                  <Link to="/notice" id="noticeLink">공지사항</Link>
                </th>
                <th className="notice-th">
                  <Link to="/FAQ" id="FAQLink">FAQ</Link>
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
