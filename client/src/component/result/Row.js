import React, { Component } from 'react';
import axios from 'axios';

class Row extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
<<<<<<< HEAD
        axios.get('http://localhost:4000/notice/delete/'+this.props.obj._id)
=======
        axios.get('/apiServer/notice/delete/'+this.props.obj._id)
>>>>>>> 393c40bba901bd8f15bb795995c62775bce42ba8
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