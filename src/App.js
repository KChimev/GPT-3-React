import React from 'react'
import './App.css'
import { Brand, CTA, Navbar } from './components'
import {
  Footer,
  Blog,
  Possibility,
  Header,
  Features,
  WhatGPT3,
} from './containers'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
