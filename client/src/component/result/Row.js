import React, { Component } from 'react';
import axios from 'axios';

class Row extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    axios.get('/apiServer/notice/delete/' + this.props.obj._id)
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
          {this.props.obj.team}
        </td>
        <td>
          {this.props.obj.pass}
        </td>
      </tr>
    );
  }
}

export default Row;