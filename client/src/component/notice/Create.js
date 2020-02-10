import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeNum = this.onChangeNum.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      num: '',
      title: '',
      desc:''
    }
  }
  onChangeNum(e) {
    this.setState({
      num: e.target.value
    });
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })  
  }
  onChangeDesc(e) {
    this.setState({
      desc: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      num: this.state.num,
      title: this.state.title,
      desc: this.state.desc
    };
    axios.post('/apiServer/notice/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      num: '',
      title: '',
      desc: ''
    })

    this.props.history.push('/noticeManager');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>공지사항</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>번호  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.num}
                      onChange={this.onChangeNum}
                      />
                </div>
                <div className="form-group">
                    <label>제목 </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                      />
                </div>
                <div className="form-group">
                    <label>내용 </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.desc}
                      onChange={this.onChangeDesc}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register Business" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}