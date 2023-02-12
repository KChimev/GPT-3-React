import React from 'react'
import './brand.css'
import { google, slack, atlassian, dropbox, shopify } from './imports'
function Brand() {
  return (
    <div className="gpt3__brand section__padding ">
      <div>
        <img src={google} alt="Google" />
        <img src={slack} alt="Slack" />
        <img src={atlassian} alt="Atlassian" />
        <img src={dropbox} alt="Dropbox" />
        <img src={shopify} alt="Shopify" />
      </div>
    </div>
  )
}

export default Brand
