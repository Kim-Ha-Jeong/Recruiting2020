
import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
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

  componentDidMount() {
      axios.get('/apiServer/notice/edit/'+this.props.match.params.id)
        .then(response => {
              this.setState({ 
                num: response.data.num, 
                title: response.data.title,
                desc: response.data.desc });
          })
          .catch(function (error) {
              console.log(error);
          })
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

    axios.post('/apiServer/notice/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/noticeManager');
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
                      value={this.state.num}
                      onChange={this.onChangeNum}
                      />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                      />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.desc}
                      onChange={this.onChangeDesc}
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