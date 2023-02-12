import React from 'react'
import { Feature } from '../../components'
import './features.css'
function Features() {
  return (
    <div className="gpt3__features-container" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-feature_container">
        <Feature
          heading="Improving end distrusts instantly "
          text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
          direction="column"
          fs="18px"
          fsText="14px"
        />
        <Feature
          heading="Become the tended active"
          text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
          direction="column"
          fs="18px"
          fsText="14px"
        />
        <Feature
          heading="Message or am nothing"
          text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
          direction="column"
          fs="18px"
          fsText="14px"
        />
        <Feature
          heading="Really boy law county"
          text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
          direction="column"
          fs="18px"
          fsText="14px"
        />
      </div>
    </div>
  )
}

export default Features
