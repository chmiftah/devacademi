import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import App from '../../layout/App'


export default function Content() {

    const [content, setContent] = useState('');
    const { slug } = useParams('');


    console.log(slug);
    const getContent = async () => {

        const contentResponse = await axios.get(`api/content/${slug}`);

        setContent(contentResponse.data.data);



    }


    useEffect(() => {
        getContent()
    }, [])
    return (
        <App>

            <div className="max-w-screen-2xl mx-auto ">
                <div className="lg:flex">
                    <div className="lg:w-2/3  p-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-700">{content.title}</h1>
                            <p className="text-sm text-gray-600 mt-1 font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi laborum deserunt rem veritatis.</p>
                        </div>
                        <div className="my-6">
                            <img src={content.thumbnail} alt="" className="w-full" />
                            <div>
                                <p className="py-2 text-lg font-normal  text-justify text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: `${content.body}` }}></p>

                            </div>
                        </div>


                    </div>
                    <div className="lg:w-1/3 p-6">
                        <div className="my-3">
                            <Link className=" text-2xl font-semibold text-green-600  "> Kembali ke materi</Link>
                        </div>
                        <hr className="border-b " />
                        <div className="my-4">


                            <div className="shadow-sm rounded-md">
                               
                                <div className="flex py-4">
                                    <div className="w-1/3 ">
                                        <img src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_materi/html.png" alt="" />
                                    </div>
                                    <div className="w-2/3 p-2">
                                        <p className="text-xl text-gray-500 font-semibold">HTML</p>
                                        <span className="text-xs  text-gray-400">Materi Belajar HTML</span>
                                    </div>
                                </div>
                            </div>

                            <div className="shadow-sm rounded-md">
                                <div className="flex py-4">
                                    <div className="w-1/3 ">
                                        <img src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_materi/html.png" alt="" />
                                    </div>
                                    <div className="w-2/3 p-2">
                                        <p className="text-lg text-gray-500 font-semibold">HTML</p>
                                        <span className="text-xs  text-gray-400">Materi Belajar HTML</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </App>
    )
}
