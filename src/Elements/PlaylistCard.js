import React from 'react'
import { truncateString } from '../utils'

export const PlaylistCard = (props) => {
  return (
    <div className="w-44 h-66 bg-neutral-800 hover:bg-stone-800 rounded-lg pb-4">
      <div className="w-44 h-44 p-2">
        <img className="h-full w-full rounded-lg " alt='' src={props.song.src ||'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbX070soPUjAKA4UFXPDoaaSHGEiKu4RNEiTtyUiFrBoGttilPAmPp3o7vekcoJwpdKk&usqp=CAU'}/>
      </div>
      <div className="text-white mx-3 mt-2">
        <h3> {truncateString(props.song.name,14)}</h3>
        <p className="text-sm">{truncateString(props.song.artist,20)}</p>
      </div>
    </div>
  )
}
