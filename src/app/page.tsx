'use client'
import React from 'react'
import Header from './components/navbar/page'
import Hero from './components/hero/page'
import Education from './components/education/page'
import Skills from './components/Skills/page'
import Experience from './components/experience/page'
import Contact from './components/contact/page'
import Footer from './components/footer/page'
const Home = () => {
  return (
    <div>
<Header/>
<Hero/>
<Education/>
<Skills/>
<Experience/>
<Contact/>
<Footer/>


    </div>
  )
}

export default Home