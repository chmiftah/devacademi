import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import App from '../layout/App'
import { authenticatedUser } from '../store';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const setAuth = useSetRecoilState(authenticatedUser);
    const history = useHistory('');
    const [error, setError] = useState('');
    let credentials = { email, password }


    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.get('/sanctum/csrf-cookie');
            let response = await axios.post('/login', credentials);
            let { data } = await axios.get('api/me');



            setAuth({
                user: data.data,
                check: true,
            })

            localStorage.setItem('tokenUser', response.data.token)
            history.push('/')



        } catch (e) {
            setError(e.response.data.errors);


        }
    }




    return (



        <App>
            <div className="bg-gray-50">
                <div className="mx-auto flex justify-center py-24  p-6 lg:max-w-screen-sm">
                    <div className=" rounded-sm shadow-lg w-full lg:w-3/4  px-6 my-6 bg-white">

                        <div className="py-6">
                            <p className="text-center text-xl font-bold my-6">Member Area</p>
                            <form onSubmit={loginHandler}>
                                <div>
                                    <div className="px-4">
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="email"
                                            className="w-full p-3 border  outline-none focus:outline-none" />
                                    </div>
                                    {error.email &&
                                        <div className="px-5 text-sm text-red-500">
                                            {error.email}
                                        </div>
                                    }
                                </div>
                                <div>
                                    <div className="px-4 mt-4">
                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="password"
                                            className="w-full p-3 border   outline-none focus:outline-none" />
                                    </div>
                                    {error.password &&
                                        <div className="px-5 text-sm text-red-500">
                                            {error.password}
                                        </div>
                                    }

                                </div>


                                <div className="flex justify-center  p-4">
                                    <button className=" bg-yellow-500 text-xl w-full text-white rounded-xl px-6 py-2 shadow-sm">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>


        </App>
    )
}
