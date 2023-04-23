import React from 'react'
import Editor from './Editor'
export default function WriteNewNote() {
  return (
    <>
    <div className=' p-4 '>
      <div className='flex  justify-between'>

      <h1 className='text-xl font-bold text-primary-content'> Grocery</h1>
      <button className=' btn   btn-primary   w-32 '> save</button>
      </div>
      <div className=' flex mt-8  justify-center w-full relative'>
      <Editor/>
      </div>

    </div>
    <span className=' opacity-0 h-0 inline-block w-80'></span> <span className=' opacity-0 h-0 inline-block w-80'></span> <span className=' opacity-0 h-0 inline-block w-80'></span> <span className=' opacity-0 h-0 inline-block w-80'></span> <span className=' opacity-0 h-0 inline-block w-80'></span> <span className=' opacity-0 h-0 inline-block w-80'></span> 
    </>
    )
}
