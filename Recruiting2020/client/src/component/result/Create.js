
import React, { Component } from 'react';
import axios from 'axios';

export default class Find extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStudent_id = this.onChangeStudent_id.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      result:'',
      name: '',
      student_id: ''
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
    const obj = {
        name: this.state.name,
        student_id: this.state.student_id
    };
    axios.post('/apiServer/result/add/',obj)
        .then(res => console.log(res.data));

    this.setState({
        name: '',
        student_id: ''
    })
    alert("성공적으로 전송되었습니다");
  }

  render() {
    
    return (
        <div className="container-fluid" style={{ marginTop: 10 }}>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>이름</label>
                    <input 
                      type="text" 
                      className="form-control"
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>학번</label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.student_id}
                      onChange={this.onChangeStudent_id}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="제출하기" 
                      className="btn btn-primary"/>
                </div>
            </form>
      </div>

    )
  }
}