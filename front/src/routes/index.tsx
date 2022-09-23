import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import About from './components/About'
import Home from '../components/Home'
// import Users from './components/Users'

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
