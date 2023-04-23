import React from 'react'
import {  useNavigate , useLocation} from 'react-router-dom'
export default function SingleNote({title }) {
  const navigate = useNavigate()
  return (
    <div className=' flex flex-col items-center'>

    <div  className="card w-32  inline-block m-2 bg-yellow-400 text-primary-content  shadow-md"  onClick={()=>{
      navigate('WriteNote')
      window.scrollTo(0 ,0) }}>
      <div className="card-body">
        <p>your text will be here </p>
        <div className="card-actions justify-end">
        </div>
      </div>
      </div>
        <h2 className="card-title">note {title}</h2>
    </div>
  )
}
