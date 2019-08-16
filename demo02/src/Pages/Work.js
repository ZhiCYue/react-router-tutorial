import React from 'react'
import { Route, Link } from 'react-router-dom'

import EarnMoney from './work/EarnMoney'
import LearnSkill from './work/LearnSkill'

function Work() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/work/earnmoney">Money</Link></li>
          <li><Link to="/work/learnskill">Skill</Link></li>
        </ul>
      </div>
      <div className="content">
        <div><h3>Work place</h3></div>
        <Route path="/work/earnmoney/" component={ EarnMoney } />
        <Route path="/work/learnskill/" component={ LearnSkill } />
      </div>
    </div>
  )
}

export default Work
