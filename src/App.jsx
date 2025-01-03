import { Route, Routes } from 'react-router-dom'
import './App.css'
import SingleHotel from './pages/SingleHotel'
import HomePage from "./pages/HomePage"

function App() {

  return (
     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/hotels/:name/:address/:id/reserve' element={<SingleHotel/>}/>
    </Routes>
  )
}

export default App
