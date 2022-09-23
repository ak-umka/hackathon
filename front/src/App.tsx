// import React, { useState, useEffect } from 'react'
// import logo from './logo.svg'
// import './App.css'
// import { useDispatch, useSelector } from 'react-redux'
// import { signup, signin, logout } from './store/action/authAction'
// import { useForm, Resolver } from 'react-hook-form'
// import { RootState } from './store'
// import { checkAutoLogin } from './store/services'

// type FormValues = {
//   firstname: string
//   lastname: string
//   email: string
//   password: string
// }

// const resolver: Resolver<FormValues> = async (values) => {
//   return {
//     values: values.firstname ? values : {},
//     errors: !values.firstname
//       ? {
//           firstname: {
//             type: 'required',
//             message: 'This is required.',
//           },
//         }
//       : {},
//   }
// }

// export default function App() {
//   const dispatch = useDispatch()
//   useEffect(() => {
//     checkAutoLogin(dispatch)
//   })
//   const authState = useSelector((state: RootState) => state.auth)
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>({ resolver })
//   const onSubmit = handleSubmit((data: any) => dispatch<any>(signin(data)))

//   return (
//     <div>
//       {/* <form onSubmit={onSubmit}>
//         <input {...register('email')} placeholder="oraz@gmail.com" />
//         {errors?.email && <p>{errors.email.message}</p>}

//         <input {...register('password')} placeholder="1234567" />

//         <input type="submit" />
//       </form> */}
//       <button onClick={() => dispatch<any>(logout)}>Logout</button>
//     </div>
//   )
// }

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Users from './components/Users'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}
