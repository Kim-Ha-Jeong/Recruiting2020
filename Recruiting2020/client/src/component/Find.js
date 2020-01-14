
import React, { Component } from 'react';
import axios from 'axios';

export default class Find extends Component {
  constructor(props) {
    super(props);
    
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeStudent_id = this.onChangeStudent_id.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      mode:'before',
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
    axios.post('http://localhost:4000/result/find/'+this.state.student_id)
        .then((res) => this.setState({
          result: res.data
        }))
        .then(res => this.pass());
  }

  pass(){
    if(this.state.result === "합격"){
      this.props.history.push('/pass');
    } else if(this.state.result === "불합격"){
      this.props.history.push('/unpass');
    }
  }

  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input 
                      type="text" 
                      className="form-control"
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" 
                      className="form-control"
                      onChange={this.onChangeStudent_id}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}