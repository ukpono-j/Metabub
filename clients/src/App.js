import React from 'react'
import "./App.css"
import Nft from './components/nfts/Nft';
import Home from './pages/Home';
import { Routes, 
  Route,
} from "react-router-dom";


function App() {
  return (
    // <div>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/nfts' element={<Nft/>} />
       </Routes>

    // </div>
  )
}

export default App;