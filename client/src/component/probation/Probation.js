import React, { Component } from 'react';
import { Form, Button, Upload, Icon, Row } from 'antd';
import './probation.css';
import axios from 'axios';

class Design extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      title: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    if (window.location.hash === "#/probationDesign") {
      this.setState({
        title: '디자인팀'
      })
    } else if (window.location.hash === "#/probationContent") {
      this.setState({
        title: '컨텐츠팀'
      })
    }
  }

  downloadHandler = () => {
    axios({
      url: '/apiServer/download/이화이언 컨텐츠팀 38기 수습모집 면접자 사전과제_이름.docx',
      method: 'GET',
      responseType: 'blob', // important
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', '이화이언 컨텐츠팀 38기 수습모집 면접자 사전과제_이름.docx');
      document.body.appendChild(link);
      link.click();
    });
  }

  selectProbation() {
    if (window.location.hash === "#/probationDesign") {
      return <p id="design-wrapper">사전과제에 대해 안내해 드리겠습니다.<br />
        홈페이지 PC버전과 앱 메인에 들어갈 <br className="forMobile" /><span className="emphasize" style={{ color: "#EC1468", fontSize: "16px" }}>이화이언 봄 배너</span>를 만들어주세요.<br />
        규격은 <span className="emphasize">580px*132px</span>으로, 저장은 <br className="forMobile" /><span className="emphasize">"웹용으로 제작-jpeg로 저장"</span>하면 됩니다.<br />
        <br />
      </p>
    } else if (window.location.hash === "#/probationContent") {
      return <div id="content-wrapper">
        <a href="http://ewhaianrecruiting.com/apiServer/download/이화이언 컨텐츠팀 38기 수습모집 면접자 사전과제_이름.docx">
          <Button id="download" shape="round" onClick={this.downloadHandler}>컨텐츠팀 사전과제 다운로드</Button>
        </a>
        <p id="probation-add">
          *버튼을 눌러 컨텐츠팀 사전과제 파일을 다운받고 파일을 이 페이지에 제출해주세요<br/>
        </p>
        <br />
      </div>
    }
  }

  onChangeHandler = e => {
    var file = e.file;
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
        this.setState({
          selectedFile: '',
        })
        this.props.history.push('/success');
      } else {
        alert("사전과제를 제출하지 못했습니다!");
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
          <h2 id="title" align="center">{this.state.title} 사전과제</h2>
        </Row>
        <hr />
        <div className="probation-container">
          {this.selectProbation()}
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item>
              <label className="submit-label">사전과제 제출&nbsp;&nbsp;&nbsp;&nbsp;<span className="add-ex">* 제출 시 수정이 불가합니다</span></label>
              {getFieldDecorator('file', {
                rules: [{ required: true, message: '사전과제를 제출해주세요!' }],
                initialValue: this.props.dataset && this.props.dataset.filename ? this.props.dataset.filename : [],
                valuePropName: 'fileList',
                getValueFromEvent: this.onChangeHandler,
              })(
                <Upload.Dragger name="file" action="/apiServer/upload" onRemove={file => {
                  axios.post('/apiServer/delete/' + file.size)
                    .then(console.log("success!"))
                  return true;
                }}>
                  <p className="ant-upload-drag-icon">
                    <Icon type="plus-circle" />
                  </p>
                  <p className="ant-upload-text">사전과제 제출함</p>
                  <p className="ant-upload-hint">드래그나 클릭하여 파일을 제출해주세요</p>
                </Upload.Dragger>,
              )}
            </Form.Item>
            <div align="center" style={{marginTop: "3%"}}>
              <span className="add-ex">* 제출 시 파일 이름을 예시와 같이 작성해주세요<br />
                예시) 38기 사전과제_디자인(팀명)_김화연(성명)<br/>
                * 사전과제 제출기한은 9월 12일 오전  12시(정오)까지 입니다.
              </span>
            </div>
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

export default Form.create()(Design);
