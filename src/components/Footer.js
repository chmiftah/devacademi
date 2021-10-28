import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <div className="bg-black">
                <div className="max-w-screen-xl mx-auto p-12">
                    <div className=" lg:flex w-full">
                        <div className="lg:w-1/5">

                            <p className="text-gray-300 text-xl font-semibold mb-4">Kunjungi Kami</p>

                            <ul className="text-gray-300 leading-loose font-medium  ">
                                <li>Instagram</li>
                                <li>Facebook</li>
                                <li>Tiktok</li>
                                <li>Youtube</li>
                                <li>Twitter</li>
                            </ul>
                        </div>


                        <div className="lg:w-1/5">

                            <p className="text-gray-300 text-xl font-semibold mb-4">Pages</p>

                            <ul className="text-gray-300 leading-loose font-medium  ">
                                <li>Blog</li>
                                <li>Career</li>
                                <li>Testimoni</li>
                                <li>FAQ</li>
                                <li>Cara pembayaran</li>
                            </ul>

                        </div>

                        <div className="lg:w-1/5">
                            <p className="text-gray-300 text-xl font-semibold mb-4">Kunjungi Kami</p>

                            <ul className="text-gray-300 leading-loose font-medium mb-6 text-xs  ">
                                <li>Whatsapp : 085732327449</li>
                                <li>Email : emailaku@gmail.com</li>
                                <li>Telp : 085732327449</li>
                            </ul>

                            <ul className="text-gray-300 leading-loose font-medium text-xs ">
                                <li>Payment Partner</li>
                                <li>BRI, BCSA, MANDIRI, BNI</li>
                                <li>GOJEK, OVO, DANA</li>
                                <li>Tokopedia, Shopee, Bukalapak</li>
                            </ul>
                        </div>

                        <div className="lg:w-2/5">
                            <p className="text-gray-300 text-xl font-semibold mb-4">Official Office</p>

                            <ul className="text-gray-300 leading-loose font-medium mb-6 text-xs  ">
                                <li>DevAcademy - PT. Miftah Maju Bersama </li>
                            </ul>

                            <ul className="text-gray-300 leading-loose font-medium text-xs ">
                                <li>Centennial Tower Level 29, Jl. Jendral Gatot Subroto Kav. 24-25 Unit D-E, RT. 2 / RW. 2, Karet Semanggi, Setiabudi, Jakarta Selatan, DKI Jakarta, Indonesia 12950</li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-screen-xl p-8">
                    <p className="text-gray-500 font-semibold text-sm"> 2021 PT. Miftah Maju Bersama. All Rights Reserved.</p>
                </div>

            </div>

            <div className="bg-gray-50 w-full lg:hidden fixed bottom-0 border-t border-black">

                <div className="mx-auto px-8 py-2 mt-1 ">
                    <div className="flex w-full">
                        <div className="w-1/3  text-center">
                            <Link to="/">
                                <div>
                                    <div className="flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                        </svg>
                                    </div>
                                    <div className="-mt-1">
                                        <span className="text-xs font-semibold text-gray-400">Home</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="w-1/3  text-center">
                            <Link to="/learn">
                                <div className="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div className="-mt-1">
                                    <span className="text-xs font-semibold text-gray-400">Course</span>
                                </div>
                            </Link>
                        </div>

                        <div className="w-1/3  text-center">
                            <Link to="/login">
                                <div>
                                    <div className="flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>
                                    </div>
                                    <div className="-mt-1">
                                        <span className="text-xs font-semibold text-gray-400">Login</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
