import React from 'react'

export const AffordLessMoney = () => {
    return (
        <div className='bg-gradient-to-t from-white to-pink-200 py-10 lg:py-20'>

            <div className='bg-gradient-to-t to-white from-pink-200 max-w-5xl lg:mx-auto mx-10 rounded-4xl '>
                <div
                    className='max-w-5xl mx-auto bg-cover bg-center relative rounded-4xl flex flex-col lg:flex-row items-center justify-center gap-7 px-6'
                    style={{ backgroundImage: "url(/bxy.png)", }}>

                    {/* ----image------- */}
                    <img src="Xcard.png" alt="card" className='w-1/2 h-[500px] hover:-scale-x-100 transition' />

                    {/* --------text---- */}
                    <div className='p-10 backdrop-blur lg:mr-5 m-5 lg:m-0 border border-pink-500 rounded-3xl  hover:shadow-2xl lg:hover:p-12 transition-all'>
                        <h1 className='text-5xl font-semibold pb-7 text-pink-600 '>Effortless Money Management</h1>

                        <p className='font-medium'>
                            “Dear Customers, we are thrilled you chose to purchase the Tryo from us. We are working hard to build even higher-quality products for our customers. We would love to hear your thoughts and opinion. Please go Tryo to share with us your feedback. Thank you.”
                        </p>

                        <button className='btn btn-secondary mt-7'>
                            Get Card
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
