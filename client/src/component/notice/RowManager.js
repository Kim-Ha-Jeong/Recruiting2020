import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RowManager extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('/apiServer/notice/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.num}
          </td>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.desc}
          </td>
          <td>
            <Link to={"/noticeManager/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
          <td>
            <Link to="/find" className="btn btn-primary">Result</Link>
          </td>
        </tr>
    );
  }
}

export default RowManager;