import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import App from '../../layout/App'
import spinner from './spinner.gif'

export default function Learn() {

    const [listCourses, setListCourse] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
    const [courseResults, setCourseResults] = useState([]);


    const [content, setContent] = useState([]);
    const [listContents, setListContent] = useState([]);
    const [searchContent, setSearchContent] = useState([]);
    const [contentResults, setContentResults] = useState([]);

    const [mounted, setMounted] = useState(false)

    const click = async (e) => {
        console.log(e);
        setMounted(false)
        try {

            let dataContent = await axios.get(`api/course/${e ?? 'html'}`)
            setContent(dataContent.data.data);
            setListContent(dataContent.data.data.content);
            setMounted(true)
        } catch {
            setMounted(true)

        }
    }


    const { slug } = useParams([]);


    useEffect(() => {

        const getCourse = async () => {
            setMounted(false)
            try {
                let dataCourse = await axios.get('api/course');
                let dataContent = await axios.get(`api/course/${slug ?? 'html'}`)
                setContent(dataContent.data.data);
                setListContent(dataContent.data.data.content);
                setListCourse(dataCourse.data.data);
                setMounted(true)
            } catch {
                setMounted(true)


            }
        }


        getCourse();

    }, [slug, searchContent])


    const searchCourses = async (key) => {
        setSearchCourse(key)
        if (searchCourse !== '') {
            const searchCourseResult = listCourses.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchCourse.toLowerCase())
            })
            setCourseResults(searchCourseResult);

        } else {
            setCourseResults(listCourses);

        }
    }

    const searchkonten = async (key) => {
        setSearchContent(key)
        
        if (searchContent !== '') {
            const searchContentResult = listContents.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchContent)
            })

            setContentResults(searchContentResult);
           
        } else {
            setContentResults(listContents);
       
        }
    }

    return (
        <App>
            <div className="mx-auto max-w-screen-2xl p-6">
                <img src="https://i.imgur.com/mBrA3Wv.png" alt="" />
            </div>

            <div className="mx-auto max-w-screen-2xl px-6">
                <div className="lg:flex w-full">
                    <div className="lg:w-1/4  ">
                        <div className="p-4 mt-8">
                            <input type="search" onChange={(e) => searchCourses(e.target.value)} className="w-full px-2 py-4 border-2 rounded-sm" placeholder="Serach.." />
                        </div>
                        <div className="overflow-y-scroll h-3/4">


                            {
                                // !mounted ?
                                //     <div className="flex justify-center items-center">
                                //         <img src={spinner} alt="" className="w-1/2" />
                                //     </div>
                                //     :



                                searchCourse.length > 1 ? (
                                    courseResults.map((course, index) => (
                                        <div className=" pl-4 pr-2 bg-gray-100">
                                            <div className="flex w-full rounded-lg shadow-lg  my-2 justify-center items-center relative transform transition duration-500 hover:scale-105  bg-white ">
                                                {/* <img src={course.thumbnail} alt="" value={course.slug} className="w-1/3" /> */}
                                                <div className="flex justify-center items-center py-4 lg:py-0 px-4 ">

                                                    <div className="w-1/3 px-2 py-2" >
                                                        <img src={course.thumbnail} alt="" className="" />
                                                    </div>
                                                    <div className="w-2/3 px-4" >
                                                        <p className="text-xl text-gray-500 font-semibold " >{course.name}</p>
                                                        <p className="text-md text-gray-400 ">{course.description}</p>
                                                    </div>
                                                </div>


                                                <button value={course.slug} onClick={(e) => click(e.target.value)} className="absolute w-full py-12 ">  </button>
                                            </div>
                                        </div>


                                    ))
                                ) : (
                                    listCourses.map((course, index) => (

                                        <div className=" pl-4 pr-2 bg-gray-100">
                                            <div className="flex w-full rounded-lg shadow-lg  my-2 justify-center items-center relative transform transition duration-500 hover:scale-105  bg-white ">
                                                {/* <img src={course.thumbnail} alt="" value={course.slug} className="w-1/3" /> */}
                                                <div className="flex justify-center items-center py-4 lg:py-0 px-4 ">

                                                    <div className="w-1/3 px-2 py-2" >
                                                        <img src={course.thumbnail} alt="" className="" />
                                                    </div>
                                                    <div className="w-2/3 px-4" >
                                                        <p className="text-xl text-gray-500 font-semibold " >{course.name}</p>
                                                        <p className="text-md text-gray-400 ">{course.description}</p>
                                                    </div>
                                                </div>


                                                <button value={course.slug} onClick={(e) => click(e.target.value)} className="absolute w-full py-12 ">  </button>
                                            </div>
                                        </div>

                                    ))

                                )
                            }

                        </div>
                    </div>

                    <div className="lg:w-3/4  h-3/4 py-4 pl-6">
                        <div className="px-4 py-2">
                            <p className="text-3xl font-semibold">{content.name}</p>
                            <p className="text-gray-600">{content.description}</p>
                        </div>

                        <div className="pr-8 pl-4">
                            <input type="search" onChange={(e) => searchkonten(e.target.value)} className="w-full px-2 py-4 border-2 rounded-sm" placeholder="Serach.." />
                        </div>
                        {
                            !mounted ?
                                <div className="flex w-full justify-center items-center my-16">
                                    <div>
                                        <img src={spinner} alt="" className="w-1/3" />
                                        <p className="-mt-2">Loading..</p>
                                    </div>
                                </div>
                                :


                                <div className=" lg:grid lg:grid-cols-4 gap-2 overflow-y-scroll p-4">
                                    {


                                        searchContent.length > 1 ? (
                                            contentResults.map((content, index) => (
                                                <Link to={`/learn/${slug}/${content.slug}`}>
                                                    <div className=" shadow-lg m-2 transform transition duration-500 hover:scale-110" key={index}>
                                                        <div>
                                                            <div>
                                                                <img src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_materi/html.png" alt="" />
                                                            </div>
                                                            <div className="p-2">
                                                                <p className="text-yellow-500 text-center text-lg ">{content.title}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Link>

                                            ))
                                        ) : (
                                            listContents.map((content, index) => (
                                                <Link to={`/learn/${slug}/${content.slug}`}>
                                                    <div className=" shadow-lg m-2 transform transition duration-500 hover:scale-110 bg-white" key={index}>
                                                        <div>
                                                            <div>
                                                                <img src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_materi/html.png" alt="" />
                                                            </div>
                                                            <div className="p-2">
                                                                <p className="text-yellow-500 text-center text-lg ">{content.title}</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Link>

                                            ))
                                        )

                                    }


                                </div>
                        }
                    </div>

                </div>
            </div>

        </App>
    )
}
