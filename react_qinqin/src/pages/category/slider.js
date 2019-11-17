import { Tabs } from 'antd-mobile';
import React from 'react'
import Conent from './conent'

export default class Slider extends React.Component {
  renderContent = tab =>
    (<div style={{  height:' 100%', overflow:"auto",backgroundColor: '#fff' }}>
    {tab.floors.map((item,index)=><Conent key={index} {...item}/>)}
    </div>);

  render() {
  
const {data}=this.props
    return (
     
        <Tabs tabs={data} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={9}
       />}   tabBarPosition="left"  tabDirection = "vertical">
          {this.renderContent}
        </Tabs>          
    );
  }
}
