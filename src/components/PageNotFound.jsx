import React from 'react'
import { useNavigate } from 'react-router-dom'
function PageNotFound() {
    const navigate = useNavigate()
  return (
   <>
      <div className=' w-full  h-80 items-center flex-wrap flex  justify-center'>
      <h1 className='btn  h-16  px-8   btn-warning text-xl font-bold shadow-lg shadow-secondary ' onClick={()=>navigate('/')}>Page Not Found !</h1>
      </div>

    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    <div className=' opacity-0 h-0 inline-block w-80'></div> 

   </>   
  )
}

export default PageNotFound