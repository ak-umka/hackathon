import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from './store/action/authAction'
import { useForm, Resolver } from 'react-hook-form'
import { RootState } from './store'

type FormValues = {
  firstname: string
  lastname: string
  email: string
  password: string
}

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstname ? values : {},
    errors: !values.firstname
      ? {
          firstname: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  }
}

export default function App() {
  const dispatch = useDispatch()
  const authState = useSelector((state: RootState) => state.signUp)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver })
  const onSubmit = handleSubmit((data: any) => dispatch<any>(signup(data)))

  return (
    <form onSubmit={onSubmit}>
      <input {...register('firstname')} placeholder="Bill" />
      {errors?.firstname && <p>{errors.firstname.message}</p>}

      <input {...register('lastname')} placeholder="Luo" />

      <input {...register('email')} placeholder="oraz@gmail.com" />

      <input {...register('password')} placeholder="1234567" />

      <input type="submit" />
    </form>
  )
}
