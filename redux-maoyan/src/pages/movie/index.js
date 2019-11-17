import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getMovies} from '../../actions'
import {getComingMovies} from '../../actions/get_coming_movies'

import BScroll from 'better-scroll'
import _ from 'loadsh'
import{Toast} from 'antd-mobile'
 class Movie extends Component {
constructor(props) {
    super(props)

    this.state = {
         add:1
    }
}

     componentDidMount(){
         let count=0
         this.props.getMovies()  

        //  const that=this
         const bs =new BScroll('.container',{
             pullUpLoad:{
                 threshold:30
             }
         })
         bs.on('pullingUp',()=>{
            const movieIds = this.props.movies.movieIds.slice( 12 )
            const ids = _.chunk( movieIds,10 )
            if(count<ids.length){  
               this.props.getComingMovies(ids[ count ].join(','))
               count++; 
                 this.setState({
                     add:this.state.add++
                 })
                   
                 console.log(count)      
            }
            if(count===ids.length){
                function offline() {
                    Toast.offline('没有更多电影了 !!!', 1);
                  }
                  offline()
                  bs.finishPullUp() 
             return  
        }
            bs.finishPullUp() 
           
            //  console.log(this.props.movies.movieList)
            //  console.log(count)
         })
         
     }
    
    
    renderItem=()=>{    
        return this.props.movies.movieList.map(item=>{
        return   <li key={item.id}>
                         <div><img  alt=""/></div>
                        <div>
                            <h2>{item.nm}</h2>
                            <h3>123</h3>
                            <p>{item.star}</p>
                            <span>{item.showInfo}</span>
                        </div>
                        <div></div>      
                </li>
        })
    }
    render() {
        return (
            <div className="container">
              <ul>{this.props.movies.movieList&&this.renderItem()}</ul>
            </div>
        )
    }
}

export default connect(
    state=>state.movieReducer,
    dispatch=>bindActionCreators({getMovies,getComingMovies},dispatch)
    )(Movie)