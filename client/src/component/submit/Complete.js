import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Button, Icon } from 'antd';
import './Submit.css';

class Complete extends Component {

  constructor(props){
    super(props);
    this.state = {
      description: ''
    }
  }

  componentDidMount(){
    if(window.location.hash === "#/success"){
      this.setState({
        description: "제출에 성공했습니다!"
      })
    } else if(window.location.hash === "#/undefine"){
      this.setState({
        description: "잘못된 입력입니다!"
      })
    }
  }

  selectIcon(){
    if(window.location.hash === "#/success"){
      return <Icon type="check-circle" style={{ fontSize: "100px" }} />
    } else if(window.location.hash === "#/undefine"){
      return <Icon type="close-circle" style={{ fontSize: "100px" }} />
    }
  }

  selectMove(){
    if(window.location.hash === "#/success"){
      return <Link to="/">홈 바로 가기</Link>
    } else if(window.location.hash === "#/undefine"){
      return <Link to="/result">결과 확인 페이지 바로 가기</Link>
    }
  }

  render() {
    return (
      <div className="complete-container" align="center" >
        <Row id="icon-wrapper">
          {this.selectIcon()}
        </Row>
    <h2 id="title" align="center" className="btn-wrapper">{this.state.description}</h2>
        <Button shape="round" id="probation-design" className="probation-button">
          {this.selectMove()}
        </Button>
      </div>
    );
  }
}

export default Complete;