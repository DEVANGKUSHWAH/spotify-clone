import React from 'react'
import { MusicPlayer } from './Components/MusicPlayer/MusicPlayer'
import Navbar from './Components/NavBar/Navbar'
import { useSelector } from 'react-redux';

export const Layout = (props) => {
    const songs = useSelector((state) => state.playListReducer.songs);

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
             sticky
             inset-x-0
             bottom-0
             ">
    {songs.length>0&&<MusicPlayer/>}
    </div>
    </>
  )
}
