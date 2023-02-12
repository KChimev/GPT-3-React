import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'
function WhatGPT3() {
  const deviceWidth = window.innerWidth
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          heading="What is GPT-3"
          direction={deviceWidth >= 1050 ? 'row' : 'column'}
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Eplore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          heading="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          direction="column"
        />
        <Feature
          heading="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          direction="column"
        />
        <Feature
          heading="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          direction="column"
        />
      </div>
    </div>
  )
}

export default WhatGPT3
