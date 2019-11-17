
import React from 'react'

import './index.scss'
import {NavLink} from 'react-router-dom'
const Tabbar=props=>{
  const navs = [
    {
      id: 1,
      iconName: 'fa-home',
      path: '/movie',
      text: '首页'
    },
    {
      id: 2,
      iconName: 'fa-hand-peace',
      path: '/recommend',
      text: '推荐'
    },
   
    {
      id: 3,
      iconName: 'fa-user-secret',
      path: '/mine',
      text: '我的'
    }

  ]

  function renderNav(){
    return navs.map(item=>(
      <li key={item.id}>
        <NavLink to={item.path}>
          <i className={'fas '+item.iconName}></i>
          <span>{item.text}</span>
        </NavLink>
      </li>
    ))
  }

  return(
    <footer>
      <ul>
        {renderNav()}
      </ul>
    </footer>
  )
}

export default Tabbar 