
import React from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import {
  Form,
  Button,
  Upload,
  Icon,
  message,
  Row
} from 'antd';
import axios from 'axios';
import './Submit.css';

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      name: '',
      student_id: '',
      ewhaian_id: ''
    }
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStudent_id = this.onChangeStudent_id.bind(this);
    this.onChangeEwhaian_id = this.onChangeEwhaian_id.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

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
    })
  }

  onChangeHandler = e => {
    var file = e.file;
    console.log(file);
    this.setState({
      selectedFile: file
    });
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const obj = {
          name: this.state.name,
          student_id: this.state.student_id,
          ewhaian_id: this.state.ewhaian_id
        };
        axios.post('/apiServer/result/add/', obj)
          .then(res => console.log(res.data));
    
        this.setState({
          name: '',
          student_id: '',
          selectedFile: '',
          ewhaian_id: ''
        })
        this.props.history.push('/success');
      } else {
        message.error("지원서를 제출하지 못했습니다!")
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 35 },
    };
    return (
      <div id="wrapper">
        <Row>
          <h2 id="title" align="center">지원서 제출</h2>
        </Row>
        <hr />
        <div className="submit-container">
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item>
            {getFieldDecorator('name', {
            rules: [{ required: true, message: '성명을 입력해주세요!' }],
          })(
              <div className="form-group">
                <label className="submit-label">성명</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>)}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('student_id', {
            rules: [{ required: true, message: '학번을 입력해주세요!' }],
          })(
            <div className="form-group">
                <label className="submit-label">학번</label>
                <input type="text"
                  className="form-control"
                  value={this.state.student_id}
                  onChange={this.onChangeStudent_id}
                />
              </div>)}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('ewhaian_id', {
            rules: [{ required: true, message: '이화이언 아이디를 입력해주세요!' }],
          })(
            <div className="form-group">
                <label className="submit-label">이화이언 아이디</label>
                <input type="text"
                  className="form-control"
                  value={this.state.ewhaian_id}
                  onChange={this.onChangeEwhaian_id}
                />
              </div>)}
            </Form.Item>
            <Form.Item>
              <label className="submit-label">지원서 제출</label>
              {getFieldDecorator('file', {
                rules: [{ required: true, message: '지원서를 제출해주세요!' }],
                initialValue: this.props.dataset && this.props.dataset.filename ? this.props.dataset.filename : [],
                valuePropName: 'fileList',
                getValueFromEvent: this.onChangeHandler,
              })(
                <Upload.Dragger name="file" action="/apiServer/upload" onRemove="true">
                  <p className="ant-upload-drag-icon">
                    <Icon type="plus-circle" />
                  </p>
                  <p className="ant-upload-text">지원서 제출함</p>
                  <p className="ant-upload-hint">드래그나 클릭하여 파일을 제출해주세요</p>
                </Upload.Dragger>,
              )}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 4, offset: 10 }}>
              <Button id="submit-button" htmlType="submit">
                제출하기
             </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}


export default Form.create()(Submit);