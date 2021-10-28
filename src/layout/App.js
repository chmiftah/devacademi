import React, {useEffect} from 'react'
import {  useRecoilValue } from 'recoil'
import Footer from '../components/Footer'
import { NavbarPage } from '../components/NavbarPage'
import { authenticatedUser } from '../store'

export default function App(props) {
    const auth = useRecoilValue(authenticatedUser);
    useEffect(() => {
      
    }, [auth])
    return (
        <div>
            <NavbarPage/>
            <div className="antialiased mt-20 p-4 bg-gray-50">
                {
                    props.children
                }

            </div>
            <Footer/>
        </div>
    )
}
