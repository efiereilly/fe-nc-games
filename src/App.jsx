import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Reviews from './components/Reviews'
import Nav from './components/Nav'
import Home from './components/Home'

function App() {


  return (
    <>
     <BrowserRouter>
    <>
    <Nav/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/reviews" element={<Reviews/>} />

     </Routes> 
    </>
    </BrowserRouter>
     
    </>
  )
}

export default App
