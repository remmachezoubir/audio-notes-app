import React from 'react'
import Home from './Home'
import Sidebar from './components/Sidebar'
import { useEffect } from 'react'
import { useStateContext } from './context/MyFirstProvider'
import { Route , Routes} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
export default function App() {
  const {setScreenSize , ScreenSize } = useStateContext()
  
  useEffect(()=>{
    setScreenSize(window.innerWidth)
} , [ScreenSize , setScreenSize])

    
  return (
    <>
          <Routes>
            <Route path='sign-up' element={<SignUp/>} />
            <Route  path='login' element={<Login/>}/>
            <Route path='*' element={<Homepage/>} />
          </Routes>
    </>
    )
}
const Homepage =()=>{
  const {ActiveSidebar , ScreenSize , theme} = useStateContext()
return (

  <div className=' ' data-theme={theme}>
  {(ScreenSize>=900  || ActiveSidebar) && <Sidebar/>}
   <Home/>
  </div>
    )

}