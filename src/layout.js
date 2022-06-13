import React from 'react'
import { MusicPlayer } from './Components/MusicPlayer/MusicPlayer'
import Navbar from './Components/NavBar/Navbar'

export const Layout = (props) => {
  return (
    <>
    <div className="App grid grid-cols-6 bg-stone-900">
      <div>
        <Navbar />
      </div>
      <div className="col-span-5 mb-40">
      {props.children}
      </div>
    </div>
    <div className="bg-stone-800
             text-3xl text-white text-center
             border-t-2 border-stone-700
             fixed
             inset-x-0
             bottom-0
             ">
    <MusicPlayer/>
    </div>
    </>
  )
}
