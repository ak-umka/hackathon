import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home} from '../Pages'


const MyRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MyRoutes
