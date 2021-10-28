import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import App from '../layout/App'
import { authenticatedUser } from '../store';

export default function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('')
    const history = useHistory('');
    const setAuth = useSetRecoilState(authenticatedUser);

    const dataUser = { name, email, password, password_confirmation };
    console.log(dataUser);

    const signupHandler = async (e) => {
        e.preventDefault()



        try {

            await axios.post('register', dataUser)
            let { data } = await axios.get('api/me');

            setAuth({
                user: data.data,
                check: true,
            })

         
            alert('sukses')
            history.push('/')


        } catch (error) {
            console.log(error);

            setError(error.response.data.errors)
            console.log(error.response.data);

        }
    }

    return (

        <App>
            <div className="bg-gray-50">
                <div className="mx-auto flex justify-center py-24  p-6 lg:max-w-screen-sm">
                    <div className=" rounded-sm shadow-lg w-full lg:w-3/4  px-6 my-6 bg-white">

                        <div className="py-6">
                            <p className="text-center text-xl font-bold my-6">Register</p>
                            <form onSubmit={signupHandler}>
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div>
                                    <div className="px-4">
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="name"
                                            className="w-full p-3 border  outline-none focus:outline-none" />
                                    </div>
                                    {/* {error.name &&
                                        <div className="px-5 text-sm text-red-500">
                                            {error.name}
                                        </div>
                                    } */}
                                </div>
                                <div>
                                    <div className="px-4 mt-4">
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="email"
                                            className="w-full p-3 border  outline-none focus:outline-none" />
                                    </div>
                                    {/* {error.email &&
                                        <div className="px-5 text-sm text-red-500">
                                            {error.email}
                                        </div>
                                    } */}
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
                                    {/* {error.password &&
                                        <div className="px-5 text-sm text-red-500">
                                            {error.password}
                                        </div>
                                    } */}

                                </div>
                                <div>
                                    <div className="px-4 mt-4">
                                        <input
                                            type="password"
                                            name="password_confirmation"
                                            value={password_confirmation}
                                            onChange={(e) => setPassword_confirmation(e.target.value)}
                                            placeholder="password confirmation"
                                            className="w-full p-3 border   outline-none focus:outline-none" />
                                    </div>


                                </div>

                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>



                                <div className="flex justify-center  p-4">
                                    <button className=" bg-yellow-500 text-xl w-full text-white rounded-xl px-6 py-2 shadow-sm">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>


        </App>
    )
}
