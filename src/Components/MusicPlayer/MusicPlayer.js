import { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./MusicPlayer.css";
import { useSelector } from "react-redux";
import { BASE_URL_MUSIC } from "../../Helper/Helper";
export function MusicPlayer() {
  const [musicTracks, setMusicTracks] = useState([]);
  const songs = useSelector((state) => state.playListReducer.songs);
  useEffect(() => {
    if (songs.length) {
      const importSongs = async () => {
        const updatedSongs = await Promise.all(
          songs.map(async (song) => {
            return { ...song, songURl: BASE_URL_MUSIC + song.songURl };
          })
        );
        setMusicTracks(updatedSongs);
      };

      importSongs();
    }
  }, [songs]);
  const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <AudioPlayer
      style={{ height: "150px", backgroundColor: "#1c1917", color: "white" }}
      autoPlay
      src={musicTracks[trackIndex]?.songURl}
      onPlay={(e) => console.log("onPlay")}
      showSkipControls={true}
      showJumpControls={true}
      header={`Now playing: ${musicTracks[trackIndex]?.name}`}
      onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
      onEnded={handleClickNext}
      // other props here
    />
  );
}
