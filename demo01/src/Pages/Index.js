import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { cid: 111, title: 'biaoti-test-01' },
        { cid: 222, title: 'biaoti-test-02' },
        { cid: 333, title: 'biaoti-test-03' },
      ]
    }

    this.props.history.push('/home/')
  }
  render() {
    return (
      <div>
        <h2>Index</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={item.cid}>
                  <Link to={'/list/'+item.cid}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Index
