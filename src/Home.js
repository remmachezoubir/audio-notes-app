import React from 'react'
import {  Route , Routes } from 'react-router-dom';
import Notes from './components/Notes'
import WriteNewNote from './components/WriteNewNote';
import Settings from './components/Settings';
import { useStateContext } from './context/MyFirstProvider';
import {GoThreeBars} from 'react-icons/go'
import PageNotFound from './components/PageNotFound';
export default function Home() {
  const {ScreenSize , ActiveSidebar , setActiveSidebar} =useStateContext()
  return (
      <div className='  bg-black inline-block  pt-4 overflow-y-scroll absolute min-h-screen '>
    {(ScreenSize<900 && ! ActiveSidebar )&&(
     <div className=' flex  items-center  justify-center  '>
     <button onClick={()=>setActiveSidebar(true)} className=" btn btn-ghost   normal-case text-xl left-0 absolute"><GoThreeBars size={30}/></button>
      <h1 className='text-xl font-bold text-primary-content '> Ventur.</h1>
      </div>
        )}
        <div >
  
          <Routes>
            <Route path='/' element={<Notes/>}/> 
            <Route path='/WriteNote' element={<WriteNewNote/>}/>
            <Route path='Settings' element={<Settings/>}/>
            <Route path='*' element={<PageNotFound/>} />
          </Routes>
        </div>
      </div>
  )
}
