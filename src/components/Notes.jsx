import React from 'react'
import SingleNote from './SingleNote'
export default function Notes() {

    // !this is only for testing 
    let array =[]
    for (let index = 0; index < 100; index++) {
      const element = `${index}`;
      array.push(element)
      
    }
  return (
    
    <>
      <h1 className=' text-primary-content text-2xl font-bold ml-4  mt-2 mb-4'> Notes</h1>
    <div className='   w-full flex justify-center flex-wrap'>
      {array.map((item)=><SingleNote key={item} title={item}/>)}
 
   


    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    <div className=' opacity-0 h-0 inline-block w-80'></div> 

    </div>
    </>
    
  )
}
