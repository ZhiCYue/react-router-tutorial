import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Index from './Pages/Index'
import Video from './Pages/Video'
import Work from './Pages/Work'

import './index.css'

function AppRouter() {
  let routeConfig = [
    { path: '/', name: 'home', exact: true, component: Index },
    { path: '/video', name: 'video', exact: false, component: Video },
    { path: '/work', name: 'work', exact: false, component: Work }
  ]
  return (
    <Router>
      <div className="app">
        <aside className="aside">
          <h3>一级导航</h3>
          <ul>
            {
              /*
              <li><Link to="/">home</Link></li>
              <li><Link to="/video">video</Link></li>
              <li><Link to="/work">work</Link></li>
               */
            }
            {
              routeConfig.map((item, index) => {
                return (
                  <li key={item.path}><Link to={item.path}>{item.name}</Link></li>
                )
              })
            }
          </ul>
        </aside>
        <article className="article">
          {
            /*
            <Route path="/" exact component={ Index } />
            <Route path="/video" component={ Video } />
            <Route path="/work" component={ Work } />
             */
          }
          {
            routeConfig.map((item, index) => {
              return (
                <Route key={item.path} path={item.path} exact={item.exact} component={item.component} />
              )
            })
          }
        </article>
      </div>
    </Router>
  )
}

export default AppRouter
