import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Manager extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('/apiServer/result/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.student_id}
          </td>
          <td>
            {this.props.obj.ewhaian_id}
          </td>
          <td>
            <Link to={"/result/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
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

export default Manager; 