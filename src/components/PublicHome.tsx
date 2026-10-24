'use client'
import React, { useState } from 'react'
import HeroSection from './HeroSection'
import VehicleSlider from './VehicleSlider'
import AuthModel from './AuthModel'

function PublicHome() {
  const [authOpen,setAuthOpen]=useState(false)
  return (
    <>
    <HeroSection onAuthRequired={()=>setAuthOpen(true)}/>
    <VehicleSlider/>
    <AuthModel open={authOpen} onClose={()=>setAuthOpen(false)}/>
    </>
  )
}

export default PublicHome