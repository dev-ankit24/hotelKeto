import React from 'react'
import About from './partials/About'
import Blog from './partials/Blog'
import Contact from './partials/Contact'
import Gallery from './partials/Gallery'
import Room from './partials/Room'
import Slider from './partials/Slider'

export default function Home() {
  return (
    <>
    <Slider/>
    <About/>
    <Room/>
    <Gallery/>
    <Blog/>
    <Contact/>
    </>
  )
}
