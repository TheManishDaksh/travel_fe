import { Route, Routes } from 'react-router-dom'
import './App.css'
import SingleHotel from './pages/SingleHotel'
import HomePage from "./pages/HomePage"
import { SearchHotelPage } from './pages/SearchHotelPage'
import WishlistPage from './pages/WishlistPage'

function App() {

  return (
     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/hotels/:name/:address/:id/reserve' element={<SingleHotel/>}/>
      <Route path='/hotels/:address' element = { <SearchHotelPage/>} />
      <Route path='/hotels/wishlist' element = {<WishlistPage/>} />
    </Routes>
  )
}

export default App
