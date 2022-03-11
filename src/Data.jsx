import React  from 'react'

class Data extends React.Component {
  render() {
    return (
      this.props.data.map((item, index) => 
      <div className='Items' key={index}>
        <h3>Title: {item.Category}</h3>
        <p>Description: {item.Description}</p>
        </div>)   
    )
  }
}

export default Data