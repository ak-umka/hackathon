import { useSelector, useDispatch, connect } from 'react-redux'
import { useEffect } from 'react'
import { getSchools } from '../../store/action/schoolAction'
import { bindActionCreators, Dispatch } from 'redux'
import { Types } from '../../store/types'

type Props = ReturnType<typeof mapDispatchToProps>

function SignIn(props: Props) {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   props.getSchools()
  // }, [])

  return (
    <div>
      <h1>Sign in</h1>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<Types>) => {
  return bindActionCreators<any, any>(
    {
      getSchools,
    },
    dispatch,
  )
}

export default SignIn
