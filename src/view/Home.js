import React, { useEffect } from 'react'
import girl from '../girl.png'
import App from '../layout/App'
export default function Home() {

    return (


        <App>

            <div>
                <div className=" mx-auto  py-16 max-w-screen-2xl px-6 lg:px-0">
                    <div className="flex-col lg:flex lg:flex-row-reverse lg:justify-between " >
                        <div className="lg:w-1/3 py-6">
                            <img src={girl} alt="girl" />
                        </div>
                        <div className="lg:w-2/3 text-gray-500 text-center lg:text-left py-8">
                            <h1 className="font-bold text-6xl my-6 text-gray-500">DevAcademy</h1>
                            <p className="font-light text-2xl text-gray-600 leading-relaxed my-6 ">DevAcademy adalah platform untuk belajar pemrograman secara intensif. Kami menghadirkan sistem belajar online yang menyenangkan dengan dibimbing mentor yang berpengalaman.</p>
                            <button className="bg-gray-600 text-xl font-light text-white py-3 px-4 ">Learn Now</button>
                        </div>

                    </div>
                </div>

                <div className="max-w-screen-xl mx-auto lg:my-12 p-6 text-center ">
                    <div>
                        <div className="flex justify-center">
                            <p className="text-gray-600 font-semibold my-8 text-4xl">Situs Belajar Pemrograman Gratis</p>
                        </div>
                        <div className="">
                            <p className="font-light text-gray-500 text-2xl text-center">Mulai dan tingkatkan karirmu sekarang menjadi programmer siap kerja yang skillful meski tanpa basic IT sekalipun. Mulai dari nol hingga expert dengan bimbingan mentor berpengalaman</p>
                        </div>
                    </div>






                </div>

                <div className="max-w-screen-xl mx-auto ">

                    <div className="flex-col-reserve lg:flex lg:justify-center w-full lg:gap-16 p-8" >
                        <div className="lg:w-1/4 my-4">

                            <div>
                                <img src="https://asset-niomic.s3-ap-southeast-1.amazonaws.com/niomicv4/niomic/Metode_Pembelajaran/bootcamp-new/c-sistembelajar.png" alt="as" className="w-full" />
                            </div>
                            <div className="border p-6">
                                <p className="text-3xl font-semibold my-2 text-gray-500">Sistem Belajar</p>
                                <p className="font-thin leading-relaxed text-gray-600 my-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, atque alias facilis labore nesciunt ullam.</p>
                                <p className="text-yellow-500 text-xl font-semibold">Lihat Selengkapnya</p>
                            </div>

                        </div>
                        <div className="lg:w-1/4  my-4">
                            <div>
                                <img src="https://asset-niomic.s3-ap-southeast-1.amazonaws.com/niomicv4/niomic/Metode_Pembelajaran/bootcamp-new/c-silabus.png" alt="as" className="w-full" />
                            </div>
                            <div className="border p-6">
                                <p className="text-3xl font-semibold my-2 text-gray-500">Silabus</p>
                                <p className="font-thin leading-relaxed text-gray-600 my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, atque alias facilis labore nesciunt ullam.</p>
                                <p className="text-yellow-500 text-xl font-semibold">Lihat Selengkapnya</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 my-4 ">
                            <div>
                                <img src="https://asset-niomic.s3-ap-southeast-1.amazonaws.com/niomicv4/niomic/Metode_Pembelajaran/bootcamp-new/c-keuntungan.png" alt="as" className="w-full" />
                            </div>
                            <div className="border p-6">
                                <a href="" className="text-3xl font-semibold my-2 text-gray-500">Keuntungan Kamu</a>
                                <p className="font-thin leading-relaxed text-gray-600 my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, atque alias facilis labore nesciunt ullam.</p>
                                <a href="" className="text-yellow-500 text-xl font-semibold">Lihat Selengkapnya</a>
                            </div>
                        </div>

                    </div>


                    <div className="flex-col-reserve lg:flex  w-full p-8 mt-12" >
                        <div className="lg:w-1/2 ">

                            <div className="flex lg:justify-end justify-center p-4">

                                <img src="https://asset-niomic.s3-ap-southeast-1.amazonaws.com/niomicv4/c_mobile_app-1.png" alt="" class="w-1/2" />

                            </div>

                        </div>
                        <div className="lg:w-1/2 p-4 text-center mt-12">
                            <p className="text-gray-600 font-semibold text-6xl my-2">Testimoni</p>
                            <p className="text-2xl text-gray-700 leading-relaxed font-light my-6">Lulusan kami telah bekerja di lebih dari 100 perusahaan di seluruh Indonesia. Ini cerita sukses dan pengalaman mereka yang sudah belajar di DevAcademy.</p>
                            <button className="px-6 py-3 rounded-3xl font-semibold text-lg bg-yellow-500 text-white">lihat testimoni</button>
                        </div>
                    </div>

                </div>

            </div>

        </App>
    )
}
