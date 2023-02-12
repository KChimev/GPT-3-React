import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className="gpt3__footer-container">
      <div className="gpt3__footer-header">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <button type="button">Request Early Access</button>
      </div>
      <div className="gpt3__footer-info">
        <div className="gpt3__footer-info_brand">
          <h2>GPT-3</h2>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div>
          <label>
            Links
            <ul>
              <li>
                <a href="#">Overons</a>
              </li>
              <li>
                <a href="#">Social Media</a>
              </li>
              <li>
                <a href="#">Counters</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </label>
        </div>
        <div>
          {' '}
          <label>
            Company
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </label>
        </div>
        <div>
          {' '}
          <label>
            Get in touch
            <ul>
              <li>
                <a href="#">Crechterwoord K12 182 DK Alknjkcb</a>
              </li>
              <li>
                {' '}
                <a href="#">085-132567</a>
              </li>
              <li>
                <a href="#">info@payme.net</a>
              </li>
            </ul>
          </label>
        </div>
      </div>
      <p>© 2021 GPT-3. All rights reserved.</p>
    </div>
  )
}

export default Footer
