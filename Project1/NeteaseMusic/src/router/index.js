import React from 'react';
import {NavLink} from 'dva/router';
import dynamic from 'dva/dynamic';
import RouterView from './RouterView';

// const Series = dynamic({
  // component: () => import('../routes/SeriesPage'),
// });

// 声明无状态组件
const StateLess = props=>{
  // console.log('props...', props);
  return <h1>{props.match.path}</h1>
}

const Animation = props=>{
  console.log('props...', props);
  return <React.Fragment>
    <RouterView routes={props.routes}></RouterView>

    <footer>
      <NavLink to="/animation/1">动漫1</NavLink>
      <NavLink to="/animation/2">动漫2</NavLink>
      <NavLink to="/animation/3">动漫3</NavLink>
      <NavLink to="/animation/4">动漫4</NavLink>
    </footer>
  </React.Fragment>
}


export default {
  routes: [{
    path: '/animation',
    component: Animation,
    children: [{
      path: '/animation/1',
      component: StateLess
    },{
      path: '/animation/2',
      component: StateLess
    },{
      path: '/animation/3',
      component: StateLess
    },{
      path: '/animation/4',
      component: StateLess
    }]
  },{
    path: '/music',
    component: StateLess
  },{
    path: '/dance',
    component: StateLess
  },{
    path: '/',
    redirect: '/animation'
  }]
}
