import React, { Component } from 'react'

import {Link} from 'react-router-dom'
export default class Conent extends Component {

   renderList=list=>{
        return list.map(item=>(
            <li key={item.api_cid}>
                <Link to={{  
                    pathname: `/list/${ item.api_cid }`,
                    search: `cid=${ item.api_cid }`,
                    name:`${item.name}`
            }}>
                <img src={item.img} alt=""/>
                <span>{item.name}</span>
                </Link>
            </li>
        ))
    }
    render() {
        return (
            <div className = "floor">
        <h3 style = {{ margin: 0}}> { this.props.name } </h3>
        <ul>
          { this.renderList( this.props.list) }
        </ul>
      </div>
        )
    }
}
