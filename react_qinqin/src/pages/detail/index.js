import React, { Component } from 'react'
import './index.scss'
import qs from 'querystring'
export default class Detail extends Component {

constructor(props) {
  super(props)

  this.state = {
     
  }
}

  renderItem(){
    const{search}=this.props.location 
    const {pic,jiage,xiaoliang,title}=qs.parse(search.slice(1))
    return <div className="d-container">
              <img src={pic} className="d-img" alt=""/>
              <p>{title}</p>
              <p>券后价￥{jiage}</p>
              <p>销量：{xiaoliang}</p>
          </div>
  }
  render() {
    
    return (
      <div className = "container">
      {this.renderItem()}
      </div>
    )
  }
}
