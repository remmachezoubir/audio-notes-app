import React , {useContext , createContext , useState , useEffect } from "react";

const MyContext= createContext({})
const  MyProvider=({children})=>{
    
    const [ActiveSidebar , setActiveSidebar]=useState(false)
    const [ScreenSize , setScreenSize]= useState(window.innerWidth)
    const [theme, setTheme] = useState("dark")
    useEffect(()=>{
        window.addEventListener('resize' , ()=>setScreenSize(window.innerWidth))
    } , [ScreenSize])
        return (
    <MyContext.Provider value={{ScreenSize , setScreenSize , ActiveSidebar , setActiveSidebar , setTheme , theme }}>
        {children}
    </MyContext.Provider>
)}

export default MyProvider;
export const useStateContext= ()=>useContext(MyContext)








