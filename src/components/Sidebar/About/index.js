import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          While I have many hobbies and interests, my main passion is making beautiful images
          through engineering, traditional media, and digital media. <br /> <br />

          たくさん趣味があるのに、主にエンジニアとアーティストです。エンジニアリングとアートできれいなイマージ事が目的です。
          <div className="emoji">
            🚴🏻‍&nbsp;🖊️&nbsp;📷&nbsp;📐
          </div>
        </div>
      </div>
    )
  }
}

export default About