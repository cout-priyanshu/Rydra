import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import PublicHome from '@/components/PublicHome'
import React from 'react'

function Home() {
  return (
    <div>
      <Nav/>
      <PublicHome/>
      <Footer/>
    </div>
  )
}

export default Home