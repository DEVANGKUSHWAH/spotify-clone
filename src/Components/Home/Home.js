import React from "react";
import { Link } from "react-router-dom";
import { PlayList } from "../PlayList/PlayList";

const Home = () => {
  const trendingAlbums = [
    {
      name: "KGF Chapter 2",
      artist: "Ravi Basrur",
      src: "https://wallpaperaccess.com/full/2235018.jpg",
    },
    {
      name: "KGF Chapter 2",
      artist: "Sudesh Dutta Naik",
      src: "https://wallpaperaccess.com/full/2235038.jpg",
    },
    {
      name: "Nacho Nacho (From RRR)",
      artist: "Vishal Mishra, Rahul Sipligunj,M.M. Keeravani",
      src: "https://wallpaperaccess.com/full/7067663.jpg",
    },
    {
      name: "RRR",
      artist: "M.M. Keeravani",
      src: "https://wallpaperaccess.com/full/7067723.jpg",
    },
  ];
  const popularAlbums=[
    {
      name: "Arabic Kuthu- Halmithi Habibu",
      artist: "Anirudh Ravichandra, Jonita Gandhi",
      src: "https://wallpaperaccess.com/full/6298884.png",
    },
    {
      name: "Rataan Lambiyaan",
      artist: "Tanishk Baghchi,Jubin Nautiyal Asees Kaur",
      src: "https://wallpaperaccess.com/full/6852769.jpg",
    },
  ]
  return (
    <div>
      <div className="mt-16">
      <div className="text-white grid grid-cols-8 ml-8 mb-4">
        <h2 className="font-bold text-2xl mt-0 mb-2 col-span-7">
          Trending now
        </h2>
        <Link to="/trending" className="font-normal leading-tight text-sm mt-4">SEE ALL</Link>
      </div>
      <PlayList songs={trendingAlbums} />
    </div>
    <div className="mt-16">
      <div className="text-white grid grid-cols-8 ml-8 mb-4">
        <h2 className="font-bold text-2xl mt-0 mb-2 col-span-7">
          Pupular Albums
        </h2>
        <Link to="/popular" className="font-normal leading-tight text-sm mt-4">SEE ALL</Link>
      </div>
      <PlayList songs={popularAlbums} />
    </div>
    </div>
  );
};

export default Home;
