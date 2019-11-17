import React, { Component } from 'react'
import Tab from '../components/common/tab'
import Tabbar from '../components/common/tabbar'
import {Switch,Route,Redirect} from 'react-router-dom'
import Movie from "../pages/movie"
import Recommend from "../pages/recommend"
import Mine from "../pages/mine"
import Notfound from "../pages/notfound"
export default class LayOut extends Component {


    render() {
        return (
            <div className="layout">
                <Tab/>
                <Switch>
                    <Redirect to="/movie" from="/" exact/>
                    <Route path="/movie" component={Movie}/>
                    <Route path="/recommend" component={Recommend}/>
                    <Route path="/mine" component={Mine}/>
                    <Route component={Notfound}/>
                </Switch>
                <Tabbar/>
            </div>
        )
    }
}
