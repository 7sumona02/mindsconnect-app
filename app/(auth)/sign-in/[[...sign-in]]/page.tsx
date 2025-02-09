import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SigninPage = () => {
  return (
    <div className='h-screen flex justify-center items-center'><SignIn /></div>
  )
}

export default SigninPage