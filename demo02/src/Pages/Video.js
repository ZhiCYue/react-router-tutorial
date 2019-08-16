import React from 'react'
import { Route, Link } from 'react-router-dom'

import ReactPage from './video/ReactPage'
import FlutterPage from './video/FlutterPage'

function Video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/video/react">React Video</Link></li>
          <li><Link to="/video/flutter">Flutter Video</Link></li>
        </ul>
      </div>
      <div className="content">
        <div><h3>Video tutorial</h3></div>
        <Route path="/video/react/" component={ ReactPage } />
        <Route path="/video/flutter/" component={ FlutterPage } />
      </div>
    </div>
  )
}

export default Video
