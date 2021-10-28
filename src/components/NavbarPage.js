import React, { useEffect } from 'react'
import $ from 'jquery'
import { useRecoilState, useRecoilValue } from 'recoil';
import { authenticatedUser } from '../store';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';


// $(document).ready(function () {
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();
//         if (scroll > 54) {
//             $(".nav").css("background", "black");
//         }
//         else {
//             $(".nav").css("background", "black");
//         }
//     })
// })


export const NavbarPage = () => {

    const [auth, setAuth] = useRecoilState(authenticatedUser);
    const userAuth = useRecoilValue(authenticatedUser);
    const history = useHistory('');
    console.log(auth);

    const logoutHandler = async () => {
        console.log('ok');
        await axios.post('/logout')
        setAuth({
            check: false,
            user: []
        });
        history.push('/login')
    }

    useEffect(() => {

    }, [auth])

    return (
        <div className="">
            <div className=" border-b-2  py-2 nav bg-transparent fixed top-0 w-full z-50 bg-black" id="nav">
                <div className=" max-w-screen-2xl mx-auto flex justify-between py-3 px-6">
                    <div className="font-extrabold text-3xl text-white">
                        DevAcademy
                    </div>
                    <div className="lg:flex ">
                        <div className="gap-6 lg:flex hidden items-center">
                            <Link to="/" className="font-medium text-2xl text-white">Home</Link>
                            <Link to="/learn" className="font-medium text-2xl text-white">Course</Link>
       
                            <div>
                            </div>
                       
                        </div>
                        <div>
                        {
                                auth.check ?
                                    <div>
                                        <button onClick={logoutHandler} className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-2xl">
                                            Logout
                                        </button>
                                    </div>

                                    : <button className="bg-yellow-500 text-white px-6 py-2 rounded-2xl font-semibold">
                                        Login
                                    </button>
                            }
                        </div>
                    </div>



                </div>
            </div>
        </div>

    )
}
