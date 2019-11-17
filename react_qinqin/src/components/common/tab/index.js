import React from 'react'
import './index.scss'


const Tab = props => {
  const { goBack } = props.history
  const {name}=props.location
 
  return (
    <header>
    { props.tabFlag && <i className = "fas fa-angle-left" onClick = { goBack } ></i>}
   
      <span> {name?name:props.title} </span>
   
      { props.tabRightFlag &&   <b className="fas fa-list-ul"></b>}
    </header>
  )
}

export default Tab 