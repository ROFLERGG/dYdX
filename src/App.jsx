import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Initiatives from './pages/Initiatives/Initiatives'
import FundedGrants from './pages/FundedGrants/funded-grants'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/initiatives" element={<Initiatives/>}/>
        <Route path="/grants" element={<FundedGrants/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
