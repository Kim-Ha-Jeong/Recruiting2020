import React, { Component } from 'react';
import axios from 'axios';

class Row extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/notice/delete/'+this.props.obj._id)
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
        </tr>
    );
  }
}

export default Row;