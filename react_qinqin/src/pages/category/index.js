import React, { Component } from 'react'
import './index.scss'
import  Slider  from './slider.js'
import axios from 'axios'


export default class Category extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       data:[]
    }
  }
  
  componentDidMount(){
    axios({
      url:'/index.php',
      params:{
        r: 'class/category',
        type: 1
      }
    }).then(res=>{
      res.data.data.data.map(item=>{
        return   item.title=item.name
    
      })
     
      this.setState({
        data:res.data.data.data      
      })
    })
  }
  
  render() {
    return (
      <div className = "container">
         <Slider {...this.state}/>
      </div>
    )
  }
}
