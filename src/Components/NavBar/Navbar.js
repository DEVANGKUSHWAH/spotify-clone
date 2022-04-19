import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="text-slate-400 h-screen bg-black w-52 pt-5 container pl-3 list-none flex-col">
        <h1 className="text-xl mb-8 font-bold cursor-pointer text-white"><i class=" mx-3 bi bi-boombox-fill"></i>Spotify</h1>
        <li className="my-4 text-sm font-bold cursor-pointer hover:text-white focus:text-white"><Link to="/" ><i className="mx-3 bi bi-house"></i>Home</Link></li>
        <li className="my-4 text-sm font-bold cursor-pointer hover:text-white"><Link to="/search" ><i class="mx-3 bi bi-search"></i>Search</Link></li>
        <li className="my-4 text-sm font-bold cursor-pointer hover:text-white"><Link to="/" ><i class="mx-3 bi bi-collection"></i>Your Library</Link></li>
       
   
    </div>

    

  )
}

export default Navbar