import React  from 'react'
import List from './List'

class Data extends React.Component {
  render() {
    return (
      this.props.data.map((item, index) => 
      <div className='Items' key={index}>
        <List Category={item.Category} Description={item.Description}/>
      </div>)   
    )
  }
}

export default Data;