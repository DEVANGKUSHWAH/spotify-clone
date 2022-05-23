import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import { Router } from './Router';

import { MusicPlayer } from './Components/MusicPlayer/MusicPlayer';

function App() {
  return (
    <>
    <div className="App grid grid-cols-6 bg-stone-900">
      <div>
        <Navbar />
      </div>
      <div className="col-span-5 mb-32">
        <Router/>
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
  );
}

export default App;
