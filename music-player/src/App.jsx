import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './components/Home'
import MediaPlayer from './components/MediaPlayer'
import video from './assets/video-1080p.mp4'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<MediaPlayer type="audio" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />} />
        <Route path="/video" element={<MediaPlayer type="video" src={video} />} />
      </Routes>
    </Router>
  )  
}

export default App