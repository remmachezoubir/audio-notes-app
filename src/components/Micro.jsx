import React from 'react'
import {FaMicrophone} from "react-icons/fa"

export default function Micro() {
  return (
    <div className=' w-full flex justify-center'>

    <button className=' absolute btn btn-ghost h-16 bottom-10  btn-circle '>
       <FaMicrophone size={60} color={'#D926AA'}/>
        {/* <svg  width="80" height="80" version="1.2"><path d="M12 16c2.206 0 4-1.795 4-4V6c0-2.206-1.794-4-4-4S8 3.794 8 6v6c0 2.205 1.794 4 4 4zm7-4v-2a1 1 0 1 0-2 0v2c0 2.757-2.243 5-5 5s-5-2.243-5-5v-2a1 1 0 1 0-2 0v2c0 3.52 2.613 6.432 6 6.92V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-1.08c3.387-.488 6-3.4 6-6.92z"/></svg> */}
    </button>
    </div>
  )
}
