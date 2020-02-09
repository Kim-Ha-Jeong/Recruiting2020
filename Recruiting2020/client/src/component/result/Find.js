
import React, { Component } from 'react';
import axios from 'axios';
import { Row, Form, message } from 'antd';
import './Result.css';

class Find extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStudent_id = this.onChangeStudent_id.bind(this);
    this.onChangeEwhaian_id = this.onChangeEwhaian_id.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      result: '',
      name: '',
      student_id: '',
      ewhaian_id: '',
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

  onChangeEwhaian_id(e) {
    this.setState({
      ewhaian_id: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) =>{
      if(!err){
        axios.post('/apiServer/result/find/' + this.state.student_id + "/" + this.state.name + "/" + this.state.ewhaian_id)
      .then((res) => this.setState({
        result: res.data
      }))
      .then(res => this.state.result.map((x, i) => this.setState({
        key: x.key
      })))
      .then(res => {
        if(this.state.key === undefined){
          this.props.history.push('/result/undefine')
        } else {
          this.props.history.push('/result/' + this.state.key)
        }
      })
      } else {
        message.error("성명,학번 둘 다 정확히 입력했는지 확인해주세요!")
      }
    })
    
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="wrapper">
        <Row>
          <h2 id="title" align="center">결과 확인</h2>
        </Row>
        <hr />
        <div className="find-container">
          <Form onSubmit={this.onSubmit}>
            <Form.Item>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '성명을 입력해주세요!' }],
              })(
                <div className="form-group">
                  <label>성명</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.onChangeName}
                  />
                </div>)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('student_id', {
                rules: [{ required: true, message: '학번을 입력해주세요!' }],
              })(
                <div className="form-group">
                  <label>학번</label>
                  <input type="text"
                    className="form-control"
                    onChange={this.onChangeStudent_id}
                  />
                </div>)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('ewhaian_id', {
                rules: [{ required: true, message: '이화이언 아이디를 입력해주세요!' }],
              })(
                <div className="form-group">
                  <label>이화이언 아이디</label>
                  <input type="text"
                    className="form-control"
                    onChange={this.onChangeEwhaian_id}
                  />
                </div>)}
            </Form.Item>
            <div className="form-group" align="center">
              <input type="submit"
                value="확인"
                className="ant-btn ant-btn-round"
                id="submit-btn"
              />
            </div>
          </Form>
        </div>
      </div>

    )
  }
}

export default Form.create()(Find);
