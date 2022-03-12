import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <>
        <h3>Title: {this.props.Category}</h3>
        <p>Description: {this.props.Description}</p>
      </>
    )
  }
}

export default List;