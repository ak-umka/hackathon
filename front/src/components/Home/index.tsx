import { useDispatch } from 'react-redux'
import { logout } from '../../store/action/authAction'

function Home() {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch<any>(logout())}>Log out</button>
    </div>
  )
}
export default Home
