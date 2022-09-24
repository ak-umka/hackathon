import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../components/Home'
import PrivateRoute from './privateRoute'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import Create from '../components/Create'
import SignIn from '../components/SignIn'

const MyRoutes = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/create"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated.loggedIn}>
                <Create />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MyRoutes
