import React, { Component } from 'react';

class Row extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
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