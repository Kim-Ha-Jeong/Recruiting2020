import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Row,Col,Icon, Popover,Button } from 'antd';
import logo from '../logo.jpg';
import './Nav.css';
import Nav from './Nav';


class Header extends Component {
  state = {
    current: false,
    visible: false
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  downloadHandler = () => {
    axios({
        url: 'http://localhost:4000/download/ewhaian_application_37.docx',
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'ewhaian_application_37.docx');
        document.body.appendChild(link);
        link.click();
      });
  }

  render() {
    return (
      <header>
        <Row id="mobile">
          <Col xs={8} offset={7}>
          <Link to="/">
            <img src={logo} className="logo" alt="Ewhaian-logo" key="logo"/>
          </Link>
          </Col>
          <Col xs={4} offset={5} id="popover">
          <Popover
            placement="bottomRight"
            content={
             <Nav mode="vertical"></Nav>
            }
            trigger="click"
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}
          >
            <Icon type="menu" />
          </Popover>
          </Col>
        </Row>
        <Row id="computer">
          <Col xs={3}>
            <Link to="/">
              <img src={logo} className="logo" alt="Ewhaian-logo" key="logo" />
            </Link>
          </Col>
          <Col xs={12}  offset={3}>
            <Nav mode="horizontal"></Nav>
          </Col>
          <Col xs={3} className="btn-wrap">
            <Button id="ewhaian" shape="round">
              <a href="http://ewhaian.com">이화이언 홈</a>
            </Button>
          </Col>
          <Col xs={3} className="btn-wrap">
            <Button id="download" shape="round" onClick={this.downloadHandler}>지원서 다운</Button>
          </Col>
        </Row>
      </header>
    );
  }
}

export default Header;