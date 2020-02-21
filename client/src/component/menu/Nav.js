import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import './Nav.css';
import logo from '../../logo.png';


class Nav extends Component {
  state = {
    current: false
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu id={this.props.id} onClick={this.handleClick} selectedKeys={[this.state.current]} mode={this.props.mode}>
        <Menu.Item key="submit">
          <NavLink to="/submit" className="link">
            지원서 제출
          </NavLink>
        </Menu.Item>
        <Menu.Item key="result">
          <NavLink to="/result" className="link">
            결과확인
          </NavLink>
        </Menu.Item>
        <Menu.Item key="notice">
          <NavLink to="/notice" className="link">
            지원문의
          </NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;