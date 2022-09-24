import { Navigate } from 'react-router-dom'

function PrivateRoute({ isAuthenticated, children }: any) {
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />
  }

  return children
}

export default PrivateRoute
