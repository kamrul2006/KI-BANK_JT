import React from 'react'
import { Link } from 'react-router'

export const Stats = () => {
    return (
        <div className='flex items-center justify-center  mx-auto  py-20 text-center bg-gradient-to-b from-white to-pink-200 '>

            <div className='bg-gradient-to-r from-pink-500 to-red-600 text-pink-50  p-20 mx-auto lg:min-w-6xl rounded-3xl px-8 '>

                {/* ------------Stats Number----------- */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-10'>
                    <div>
                        <h2 className="text-4xl font-bold pb-3">180k</h2>
                        <p className="text-sm">Downloaded</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold pb-3">20k</h2>
                        <p className="text-sm">Feedback</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold pb-3">500+</h2>
                        <p className="text-sm">Workers</p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold pb-3">70+</h2>
                        <p className="text-sm">Contributors</p>
                    </div>
                </div>

                {/* ------------action part------------ */}

                <div
                    className="border border-pink-600  p-6 rounded-md 
                flex flex-col md:flex-row justify-between items-center gap-4
                 bg-pink-200 text-pink-600 lg:w-8/12 mx-auto">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold">Have any question about us?</h3>
                        <p className="text-sm ">Don’t hesitate to contact us</p>
                    </div>


                    <Link to={"/contact"}>
                        <button className="btn btn-outline btn-secondary">
                            CONTACT US
                        </button>
                    </Link>

                </div>



            </div>

        </div>
    )
}
