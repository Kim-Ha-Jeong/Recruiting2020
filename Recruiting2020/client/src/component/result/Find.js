
import React, { Component } from 'react';
import axios from 'axios';
import { Row } from 'antd';
import './Result.css';

export default class Find extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStudent_id = this.onChangeStudent_id.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      result:'',
      name: '',
      student_id: '',
      key: ''
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeStudent_id(e) {
    this.setState({
      student_id: e.target.value
    })  
  }
  
  onSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:4000/result/find/'+this.state.student_id+"/"+this.state.name)
        .then((res) => this.setState({
          result: res.data
        }))
        .then(res => this.state.result.map((x,i) => this.setState({
          key : x.key
        })))
        .then(res => this.props.history.push('/result/'+this.state.key));
  }

  render() {
    return (
        <div id="wrapper">
          <Row>
            <h2 id="title" align="center">결과 확인</h2>
          </Row>
            <hr/>
          <div className="main-container">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>성명</label>
                    <input 
                      type="text" 
                      className="form-control"
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>학번</label>
                    <input type="text" 
                      className="form-control"
                      onChange={this.onChangeStudent_id}
                      />
                </div>
                <div className="form-group" align="center">
                     <input type="submit"
                      value="확인"
                      className="ant-btn ant-btn-round"
                      id="submit-btn"
                     />
                </div>
            </form>
          </div>
      </div>

    )
  }
}