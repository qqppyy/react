import React, { Component } from 'react'
import './index.scss'
import axios from 'axios'
import qs from 'querystring'
import {Link} from 'react-router-dom'
import ListNav from './listNav'

import BSrolll from 'better-scroll'
import {Toast} from 'antd-mobile'

export default class List extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       list:[],
       px:'t',
       listNav:[
        {
            id:1,
            text:"人气"
        },
        {
           id:2,
           text:"最新"
       },  {
           id:3,
           text:"销量"
       },
       {
           id:4,
           text:"价格"
       }
    ]
    }
  }
  componentDidMount(){
    let page=1;
    // const{px}=this.state
    const{search}=this.props.location
    const {cid}=qs.parse(search.slice(1))
    axios({
      url: '/index.php',
      params: {
        r: 'class/cyajaxsub',
        page: 1,
        cid,
        px: 't',
        cac_id: ''
      }
    }).then(res=>{
      this.setState({
        list:res.data.data.content
      })
    })
    
    const bs=new BSrolll('.list-container',{
      pullUpLoad: {
        threshold: 30 
      }
    })
    bs.on('pullingUp', () => {
      function loadingToast() {
        Toast.loading('正在加载中', 0,() => {
          
        });
      }
      loadingToast()
      axios({
        url: '/index.php',
        params: {
          r: 'class/cyajaxsub',
          page,
          cid,
          px: 't',
          cac_id: 'DnF1ZXJ5VGhlbkZldGNoBAAAAAAYirYhFjRvaTVfS3dpVEZtX01ndEpDc29DVVEAAAAAEAozURZlVE1rWGVqa1RVU2lVbElfMkVUTkdRAAAAABokGfQWZEpHeWxSUmtSVGF1NVlMdTlKdklWQQAAAAAaIt8XFjQ1V3hkU3lmVFJpSU4taDRGR2FVWEE='
        }
      }).then(res=>{
        bs.finishPullUp() 
        this.setState(()=>{
         return this.state.list.push(...res.data.data.content)
        })
        // console.log(this.state.list)
        // console.log(this.state.list.push(...res.data.data.content))
        Toast.hide();
      })
      page++
    })
   
  }
  
      // two=()=>{
      //   this.setState({
      // px:'latest'
      //   })
      // }
      // one=()=>{
      //   this.setState({
      // px:'t'
      //   })
      // }
// 死循环了
// componentDidUpdate(prevState){
//   let count2=1
  
//   const{px}=this.state
//   const{search}=this.props.location
//     const {cid}=qs.parse(search.slice(1))
//     // console.log(this)
//     if(count2==10){
//     axios({
//       url: '/index.php',
//       params: {
//         r: 'class/cyajaxsub',
//         page: 1,
//         cid,
//         px,
//         cac_id: ''
//       }
//     }).then(res=>{
//      console.log(this.state.list)
//       this.setState({
//         list:res.data.data.content
//       })
      
//     })
//     count2++
//   }
  
// }
  renderItem () {
    return this.state.list.map(item=>{
            return   <li><Link  key={item.id} to={{  
              pathname: `/detail`,
              search: `cid=${ item.cid }&pic=${item.pic}&jiage=${item.jiage}&xiaoliang=${item.xiaoliang}&title=${item.d_title}`
      }}>
            <div className="li-box1"><img src={item.pic} alt=""/></div>
            <div className="li-box2">
              <h3>{item.d_title}</h3> 
              <div>券后￥<span>{item.jiage}</span></div>
              <h5>券{item.quan_jine}</h5>
              <p><span>已售{item.xiaoliang}</span>  <span>评论{item.comment}</span></p>
            </div>
          </Link>
          </li>
    })
  }
 
  render() {
    return (
      <div className = "container">
        <ListNav listNavarr={this.state.listNav}/>
        <div className="list-container">
       <ul>
          { this.renderItem()}
       </ul>
        </div>
      </div>
    )
  }
}
