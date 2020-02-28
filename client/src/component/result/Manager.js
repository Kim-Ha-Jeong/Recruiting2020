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
            <Link to={"/resultManager/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
        </tr>
    );
  }
}

export default Manager; 
