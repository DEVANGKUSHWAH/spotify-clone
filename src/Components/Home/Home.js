import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlayList } from "../PlayList/PlayList";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../Action/actions";

const Home = () => {
  const playLists = useSelector(state=> state.playListReducer.playlists)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(Actions.getPlaylist())
  },[])
  useEffect(()=>{
    if(playLists?.data?.length){
      setAlbums(playLists?.data);
    }
  },[playLists])
  const [albums, setAlbums] = useState([]);

  return (
    <div>
      {albums.length ? (
        <div className="mt-16 ">
          <PlayList songs={albums} />
        </div>
      ) : (
        <h1 className="mt-16 ml-16 text-white"> No Playlist Found</h1>
      )}
    </div>
  );
};

export default Home;
