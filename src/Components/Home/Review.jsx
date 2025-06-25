import React from 'react'
import { Slide } from 'react-awesome-reveal'

export const Review = () => {
    return (
        <div className='bg-black text-pink-200 relative py-20  '>


            <div className='max-w-5xl mx-auto' >

                <p className='text-pink-600 font-bold z-50'>Customer Review</p>


                <div className="carousel w-full z-50 py-10 lg:py-20">

                    <div id="slide1" className="carousel-item relative w-full">

                        <div className='flex gap-5 flex-col justify-center px-10'>
                            {/* ------comment--- */}
                            <p className='px-10 text-xl text-justify'>
                                “Dear Customers, we are thrilled you chose to purchase the Tryo from us. We are working hard to build even higher-quality products for our customers. We would love to hear your thoughts and opinion. Please go Tryo to share with us your feedback. Thank you.”
                            </p>

                            {/* ---iamge------ */}
                            <div className='flex items-center z-40 gap-3 px-5 py-2 backdrop-blur rounded-3xl border border-pink-500 w-fit mt-5 mx-auto'>

                                <img src="/pp.jpg" alt="pp" className='w-18 rounded-full border-2 border-pink-200' />

                                <div>
                                    <p className='text-xl font-semibold mb-2'>Kamrul Islam Apurba</p>
                                    <p>Web Developer</p>
                                </div>
                            </div>

                        </div>


                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-ghost btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-ghost btn-circle">❯</a>
                        </div>
                    </div>


                    <div id="slide2" className="carousel-item relative w-full">
                        <div className='flex gap-5 flex-col justify-center px-10'>
                            {/* ------comment--- */}
                            <p className='px-10 text-xl text-justify'>
                                “Dear Customers, we are thrilled you chose to purchase the Tryo from us. We are working hard to build even higher-quality products for our customers. We would love to hear your thoughts and opinion. Please go Tryo to share with us your feedback. Thank you.”
                            </p>

                            {/* ---iamge------ */}
                            <div className='flex items-center z-40 gap-3 px-5 py-2 backdrop-blur rounded-3xl border border-pink-500 w-fit mt-5 mx-auto'>

                                <img src="https://i.ibb.co/RG44LgGd/20240601-183428.jpg" alt="pp" className='w-18 rounded-full border-2 border-pink-200' />

                                <div>
                                    <p className='text-xl font-semibold mb-2'>Kamrul Islam Apurba</p>
                                    <p>Frontend Web Developer</p>
                                </div>
                            </div>

                        </div>


                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-ghost btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-ghost btn-circle">❯</a>
                        </div>
                    </div>


                    <div id="slide3" className="carousel-item relative w-full">
                        <div className='flex gap-5 flex-col justify-center px-10'>
                            {/* ------comment--- */}
                            <p className='px-10 text-xl text-justify'>
                                “Dear Customers, we are thrilled you chose to purchase the Tryo from us. We are working hard to build even higher-quality products for our customers. We would love to hear your thoughts and opinion. Please go Tryo to share with us your feedback. Thank you.”
                            </p>

                            {/* ---iamge------ */}
                            <div className='flex items-center z-40 gap-3 px-5 py-2 backdrop-blur rounded-3xl border border-pink-500 w-fit mt-5 mx-auto'>

                                <img src="https://i.ibb.co/vkycbfs/1675254905006.jpg" alt="pp" className='w-18 rounded-full border-2 border-pink-200' />

                                <div>
                                    <p className='text-xl font-semibold mb-2'>K. I. Apurba</p>
                                    <p>React Developer</p>
                                </div>
                            </div>

                        </div>


                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-ghost btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-ghost btn-circle">❯</a>
                        </div>
                    </div>


                    <div id="slide4" className="carousel-item relative w-full">
                        <div className='flex gap-5 flex-col justify-center px-10'>
                            {/* ------comment--- */}
                            <p className='px-10 text-xl text-justify'>
                                “Dear Customers, we are thrilled you chose to purchase the Tryo from us. We are working hard to build even higher-quality products for our customers. We would love to hear your thoughts and opinion. Please go Tryo to share with us your feedback. Thank you.”
                            </p>

                            {/* ---iamge------ */}
                            <div className='flex items-center z-40 gap-3 px-5 py-2 backdrop-blur rounded-3xl border border-pink-500 w-fit mt-5 mx-auto'>

                                <img src="https://i.ibb.co/hR5b2XGn/Chat-GPT-Image-Apr-17-2025-12-22-34-PM.png" alt="pp" className='w-18 rounded-full border-2 border-pink-200' />

                                <div>
                                    <p className='text-xl font-semibold mb-2'>K. I. Group</p>
                                    <p>Web Developer Team</p>
                                </div>
                            </div>

                        </div>


                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-ghost btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-ghost btn-circle">❯</a>
                        </div>
                    </div>


                </div>


                <img src="/circle.svg" alt="glob" className='absolute w-1/6 bottom-0 -right-20 opacity-50 hidden lg:block' />

                <img src="/circle.svg" alt="glob" className='absolute w-1/6 top-0 -left-20 opacity-50 hidden lg:block' />
            </div>

        </div>
    )
}
