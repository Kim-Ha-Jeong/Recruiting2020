import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStudent_id = this.onChangeStudent_id.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      student_id: '',
      pass:''
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
  onChangePass(e) {
    this.setState({
      pass: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      student_id: this.state.student_id,
      pass: this.state.pass
    };
    axios.post('http://localhost:4000/result/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      name: '',
      student_id: '',
      pass: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Student Id: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.student_id}
                      onChange={this.onChangeStudent_id}
                      />
                </div>
                <div className="form-group">
                    <label>Pass: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.pass}
                      onChange={this.onChangePass}
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