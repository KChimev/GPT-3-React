import React from 'react'
import { card1, card2, card3, card4, card5 } from './assets'
import './blog.css'
function Blog() {
  return (
    <div className="gpt3__blog-container">
      <h1 className="gradient__text">
        A lot is happening, We are blogging about it.
      </h1>
      <div className="gpt3__blog-cards">
        <div className="gpt3__blog-cards_card span-2">
          <img src={card1} />
          <div className="gpt3__blog-cards_info">
            <p>Sep 26, 2021</p>
            <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
            <p>
              <a href="#">Read Full Article</a>
            </p>
          </div>
        </div>
        <div>
          <img src={card2} />
          <div className="gpt3__blog-cards_info">
            <p>Sep 26, 2021</p>
            <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
            <p>
              {' '}
              <a href="#">Read Full Article</a>
            </p>
          </div>
        </div>
        <div>
          <img src={card3} />
          <div className="gpt3__blog-cards_info">
            <p>Sep 26, 2021</p>
            <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
            <p>
              {' '}
              <a href="#">Read Full Article</a>
            </p>
          </div>
        </div>
        <div>
          <img src={card4} />
          <div className="gpt3__blog-cards_info">
            <p>Sep 26, 2021</p>
            <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
            <p>
              {' '}
              <a href="#">Read Full Article</a>
            </p>
          </div>
        </div>
        <div>
          <img src={card5} />
          <div className="gpt3__blog-cards_info">
            <p>Sep 26, 2021</p>
            <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
            <p>
              {' '}
              <a href="#">Read Full Article</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
