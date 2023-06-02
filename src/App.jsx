import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import './App.css'
import Reviews from './components/Reviews'
import Nav from './components/Nav'
import Home from './components/Home'
import ReviewCard from './components/ReviewCard'




function App() {
  // const [category, setCategory]=useState('')
  // console.log(category)

  return (
    <>
     <BrowserRouter>
    <>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/reviews" element={<Reviews />} />
      <Route exact path="/reviews/:review_id" element={<ReviewCard/>} />
      <Route exact path="/reviews/category/:category" element={<Reviews />} />
     </Routes> 
    </>
    </BrowserRouter>
     
    </>
  )
}

export default App
