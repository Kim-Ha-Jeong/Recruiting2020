import React, { Component } from 'react';
import { Row } from 'antd';
import TableRow from './Row';
import './Notice.css';

export default class Notice extends Component {

  render() {
    return (
      <div id="wrapper">
        <Row>
          <h2 id="title" align="center">지원 문의</h2>
        </Row>
        <hr />
        <TableRow></TableRow>
      </div>
    );
  }
}