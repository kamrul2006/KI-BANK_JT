import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { Link } from 'react-router'

export const AboutUsSection = () => {
    return (
        <div className='bg-black text-pink-200 relative py-20 '>

            <div className=' grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto z-40'>
                {/* -----------texts and info---------- */}
                <Slide>
                    <div className='py-10 px-15 flex gap-5 flex-col justify-center z-40' >
                        <p className='text-pink-600 font-bold z-50'>About Us</p>

                        <h2 className='py-5 text-4xl lg:text-5xl font-semibold z-40'>
                            Committed to helping our customers succeed
                        </h2>

                        <p className='pb-5 text-justify z-40'>
                            “Dear Customers, we are thrilled you chose to purchase the Tryo from us. We are working hard to build even higher-quality products for our customers. We would love to hear your thoughts and opinion. Please go Tryo to share with us your feedback. Thank you.
                        </p>

                        <div className='flex items-center gap-4 z-40'>
                            <Link to={'/about'}>
                                <button className='btn btn-outline btn-secondary  hover:text-white hover:font-semibold text-pink-400 transition '>
                                    Learn More About Us
                                </button>
                            </Link>

                            <Link to={'/contact'}>
                                <button className='btn btn-outline btn-secondary  hover:text-white hover:font-semibold text-pink-400 transition '>
                                    Contact Us
                                </button>
                            </Link>
                        </div>

                    </div>
                </Slide>

                {/* --------about and fonder info- */}
                <Slide direction='right'>
                    <div className='flex gap-5 flex-col justify-center px-10'>
                        <p className='px-10 text-xl text-justify'>
                            “Dear Customers, we are thrilled you chose to purchase the Tryo from us. We are working hard to build even higher-quality products for our customers. We would love to hear your thoughts and opinion. Please go Tryo to share with us your feedback. Thank you.”
                        </p>

                        <div className='flex items-center z-40 gap-3 px-5 py-2 mx-10 backdrop-blur rounded-3xl border border-pink-500 w-fit mt-5'>

                            <img src="/pp.jpg" alt="pp" className='w-18 rounded-full border-2 border-pink-200' />

                            <div>
                                <p className='text-xl font-semibold mb-2'>Kamrul Islam Apurba</p>
                                <p>Founder And CEO</p>
                            </div>
                        </div>

                    </div>
                </Slide>

            </div>

            <img src="/circle.svg" alt="glob" className='absolute w-1/4 bottom-0 -right-20 opacity-50 hidden lg:block' />
            <img src="/circle.svg" alt="glob" className='absolute w-1/6 top-0 -left-20 opacity-50 hidden lg:block' />
        </div>
    )
}
