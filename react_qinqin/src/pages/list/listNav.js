import React, { Component } from 'react'
// import {NavLink} from 'react-router-dom'
export default class ListNav extends Component {


    listNavItem(){
        console.log(this.props.listNavarr)
        this.props.listNavarr.map(item=>{
            return <li key={item.id}>{item.text}</li>
        })
    }
    // first=()=>{
    //     this.props.one()
    // }
    // second=()=>{
    //     this.props.two()
    // }
    render() {
       
        return (
            <ul className="list-nav">
                <li> 人气</li>
                <li> 最新</li>
                <li>销量</li>
                <li>价格</li>
            </ul>
        )
    }
}
