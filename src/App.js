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
      <div className="col-span-5">
        <Router/>
      </div>
    </div>
    {/* <MusicPlayer/> */}
    </>
  );
}

export default App;
