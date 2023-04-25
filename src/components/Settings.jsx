import React from 'react'
import { useStateContext } from '../context/MyFirstProvider'
export default function Settings() {
  
  // const { setTheme} = useStateContext()
  // const Mytehmes =[ "dark","light", "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
  //                   "cyberpunk", "valentine", "halloween",
  //                  "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black",
  //                 "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night",
  //                 "coffee", "winter"]
  return (
    <>
      <h1 className='text-2xl ml-4 mt-2 text-primary-content  font-semibold '>Settings</h1>
    <div className='bg-base-100 p-4 w-72 sm:w-96 mx-8 mt-10 rounded-xl'>
      <h2 className='card-title mb-4 text-primary-content'>General</h2>
        <span className='flex justify-between p-2  '> <span>theme </span> <span>theme </span></span>
        <span className='flex justify-between p-2  '> <span>theme </span> <span>theme </span></span>
        <span className='flex justify-between p-2  '> <span>theme </span> <span>theme </span></span>
    </div>
    
    <div className='bg-base-100 p-4 w-72 sm:w-96 mx-8 mt-10  rounded-xl '>
      <h2 className='card-title mb-4 text-primary-content'>Profile</h2>
        <span className='flex justify-between p-2  '> <span>theme </span> <span> <input type="checkbox" className=' toggle toggle-md toggle-success' /> </span></span>
        <span className='flex justify-between p-2  '> <span>theme </span> <span>theme </span></span>
        <span className='flex justify-between p-2  '> <span>theme </span> <span>theme </span></span>
    </div>


    {/* hahahahah this is only for making the site resposive hhhhhhhhh 😅   */}
    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    <div className=' opacity-0 h-0 inline-block w-80'></div> 
    </>
  )
}






