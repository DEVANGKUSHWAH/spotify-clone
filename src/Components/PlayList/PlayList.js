import React from "react";
import { PlaylistCard } from "../../Elements/PlaylistCard";

export const PlayList = (props) => {
  return (
    <div className="mx-6">
      <div className=" flex flex-row flex-wrap">
        {props.songs.map((song) => (
          <div className="ml-5">
            <PlaylistCard song={song}/>
          </div>
        ))}
      </div>
    </div>
  )
}
