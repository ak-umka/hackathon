import React, { useState, useEffect } from 'react'
import MyRoutes from './routes'
import { useDispatch } from 'react-redux'

import './App.css'
import { checkAutoLogin } from './store/services'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    checkAutoLogin(dispatch)
  })
  return (
    <div>
      <MyRoutes />
    </div>
  )
}
