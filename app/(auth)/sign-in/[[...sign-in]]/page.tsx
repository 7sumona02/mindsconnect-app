import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SigninPage = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-[#f3f4f5]'><SignIn /></div>
  )
}

export default SigninPage