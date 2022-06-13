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
        <Router/>
    </>
  );
}

export default App;
