import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Reviews from './components/Reviews'
import Nav from './components/Nav'
import Home from './components/Home'
import ReviewCard from './components/ReviewCard'
import CategoryReviews from './components/CategoryReviews'



function App() {


  return (
    <>
     <BrowserRouter>
    <>
    <Nav/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/reviews" element={<Reviews/>} />
      <Route exact path="/reviews/:review_id" element={<ReviewCard/>} />
      <Route exact path="/reviews/category/:category" element={<CategoryReviews/>} />
     </Routes> 
    </>
    </BrowserRouter>
     
    </>
  )
}

export default App
