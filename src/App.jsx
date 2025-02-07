import { Route, Routes } from 'react-router-dom'
import './App.css'
import SingleHotel from './pages/SingleHotel'
import HomePage from "./pages/HomePage"
import { SearchHotelPage } from './pages/SearchHotelPage'
import WishlistPage from './pages/WishlistPage'
import PaymentPage from "./pages/PaymentPage"

function App() {

  return (
     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/hotels/:name/:address/:id/reserve' element={<SingleHotel/>}/>
      <Route path='/hotels/:address' element = { <SearchHotelPage/>} />
      <Route path='/wishlist' element = {<WishlistPage/>} />
      <Route path='/hotels/:id/payment' element = { <PaymentPage/>} />
    </Routes>
  )
}

export default App
