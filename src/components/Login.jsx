import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()
  return (
    <div className='bg-black h-screen overflow-hidden w-full flex flex-col items-center justify-center '>
      <h1 className=' card-title text-primary-content top-2 text-3xl absolute'>Ventur.</h1>
      <h1 className='text-2xl text-primary-content mb-4 font-bold block '>Login </h1>
      <div className='bg-base-100 p-2 rounded-lg'>
        <label className='text-lg text-primary-content m-1 block' htmlFor="email">Email</label>
        <input className='text-lg text-primary-content p-2 border-primary-focus bg-base-300 outline-none focus:border rounded-md  ' placeholder='example@wow.com' type='email' required name='email' id='email' />

        <label className='text-lg text-primary-content m-1 block' htmlFor='password'> Password</label>
        <input className='text-lg text-primary-content p-2 border-primary-focus bg-base-300 outline-none focus:border rounded-md  ' placeholder='password' type='password' required name='password' id='password' />
        <div className=' w-full flex justify-center'>

        <button type='button' className=' p-2 m-2 mt-3 text-lg text-center font-bold rounded-lg w-32 bg-blue-600  btn capitalize outline-none hover:bg-blue-700  hover:scale-105 border-none' onClick={()=>{
          navigate('/')
        }}>Login</button>
        </div>
      </div>

      <h2 className='text-lg text-primary-content m-1 font-medium'>don`t have an acount , create one  <button className=' link link-info link-hover ' onClick={()=>{ navigate('/sign-up')}}>here</button></h2>




    </div>
  )
}

export default Login