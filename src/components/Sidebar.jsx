import React from 'react'
import {  useNavigate , useLocation} from 'react-router-dom'
import { useStateContext } from '../context/MyFirstProvider'
import {GoX} from "react-icons/go"
import Micro from './Micro'

export default function Sidebar() {
  const { setActiveSidebar , ScreenSize } =useStateContext()
  const navigate =useNavigate()

  const location = useLocation()
  //! delete this one later 
  const logout =()=>{
    navigate('login')
  }

  return (
    <>
    <div className=' w-80 h-screen bg-slate-900 opacity-95  fixed z-20'>
    
    </div>
   {ScreenSize>900 && <div className='w-80 h-screen opacity-0 inline-block overflow-hidden'></div>}
   <div className={` p-4   inline-block w-80   top-0 left-0 h-screen fixed  overflow-scroll z-30  `}>
     {ScreenSize<=900 && <button className='btn  btn-circle absolute shadow-lg top-1 right-1 z-10' onClick={()=>setActiveSidebar(false)}><GoX size={25}/></button>}
     <div className=' w-full flex justify-center'>
      {<h1 className='text-xl font-bold text-primary-content '>Ventur.</h1>}
      </div>
      
    {/* <Link to={'/'}>my notes </Link> */}
    {/* <Link to={'WriteNote'}> write a new note </Link> */}
    {/* i used the navigate hook  instead of the link cause i needed to the button for the style  + they both works the same way  */}

    <button className={` border-2 border-base-100 text-xl  font-semibold btn  focus:bg-secondary hover:bg-secondary text-primary-content ${ location.pathname=='/' && 'bg-secondary'}  block mt-10   `} onClick={()=> {
      navigate('/')
      window.scrollTo(0 ,0)
      setActiveSidebar(false)
      }}> My notes</button>
  
    {/* <button className={`btn btn-primary  text-xl font-semibold text-white block mt-10 ml-3 focus:btn-info ${pathname === '/WriteNote' && 'btn-info'}   `} onClick={()=>{
      navigate('WriteNote')
      window.scrollTo(0 ,0)
      setActiveSidebar(false)
       }}>  new note </button> */}
   
    <button className={` border-2 border-base-100  text-xl font-semibold focus:bg-secondary hover:bg-secondary text-primary-content block mt-10   btn  ${ location.pathname=='/Settings' && 'bg-secondary'}`} onClick={()=>{
            window.scrollTo(0 ,0)
            setActiveSidebar(false)      
            navigate('Settings')
      }}>Settings</button>
      {/* delete this line later  */}
    <button className={` border-2 border-base-100  text-xl font-semibold focus:bg-secondary hover:bg-secondary text-primary-content block mt-10   btn btn-info`} onClick={logout}>log out </button>


        <Micro/>
    </div>
    </>
  )
}
