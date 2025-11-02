import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Bloglist from '../components/Bloglist'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Bloglist />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home
