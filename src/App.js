import axios from 'axios'
import React,{useEffect} from 'react'
import { useSetRecoilState } from 'recoil'
import ReactRouter from './router'
import { authenticatedUser } from './store'

export default function App() {

  const setAuth = useSetRecoilState(authenticatedUser)
  useEffect(() => {
    const getUser = async()=>{
      try {
        const {data}= await axios.get('/api/me')
        setAuth({
          user : data.data,
          check:true,
        })
      } catch (error) {
        console.log('You Are not Login');
      }
    }
    
    getUser()
   
  }, [setAuth])
  return (
    <div>
      <ReactRouter/>
    </div>
  )
}
