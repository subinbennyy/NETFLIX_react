import React,{useEffect,useState} from 'react'
import './RowPosters.css'
import axios from 'axios'
function RowPosters() {
  const [movies,setMovies]= useState([])
  useEffect(()=>{
    axios.get('discover/tv?api_key={API_KEY_HERE}&with_networks=213').then(response=>{
      console.log(response.data)
    }).catch(err=>{
      alert('Network Error')
    }

    )
  }, [])
  
  return (
    <div className='row'>
      <h2>Netflix Orginals</h2>
      <div className='posters'>
        {movies.map(()=>{

        })}
        <img className='poster' src='https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w' alt="posters" />
        

      </div>
      
    </div>
  )
}

export default RowPosters
