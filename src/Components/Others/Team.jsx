import React from 'react'

export const Team = () => {
    return (

        <div className='bg-gradient-to-t from-white to-pink-200'>

            <h1 className='text-5xl text-center font-medium text-pink-600'>Meet Our Team</h1>
            <p className='text-center pt-10 text-lg max-w-2xl mx-auto'>
                Here is our honest and dedicated Team members. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, sed!
            </p>

            <div className='max-w-6xl mx-auto text-center py-10  grid grid-cols-1 lg:grid-cols-3'>

                {/* ----1 */}
                <div className=' px-5 py-2 mx-10 backdrop-blur rounded-3xl w-fit mt-5 hover:bg-pink-300 transition hover:scale-110'>
                    <img src="/pp.jpg" alt="pp" className='w-40 mx-auto rounded-full border-2 border-pink-200 mt-5' />

                    <div className='py-5'>
                        <p className='text-2xl font-semibold mb-2'>Kamrul Islam Apurba</p>
                        <p>Founder And CEO</p>
                    </div>

                </div>

                {/* -----2 */}
                <div className=' px-5 py-2 mx-10 backdrop-blur rounded-3xl w-fit mt-5 hover:bg-pink-300 transition hover:scale-110'>
                    <img src="https://i.ibb.co/vkycbfs/1675254905006.jpg" alt="pp" className='w-40 mx-auto rounded-full border-2 border-pink-200 mt-5' />

                    <div className='py-5'>
                        <p className='text-2xl font-semibold mb-2'>Kamrul Islam Babu</p>
                        <p>Web Developer</p>
                    </div>

                </div>

                {/* -------3 */}
                <div className=' px-5 py-2 mx-10 backdrop-blur rounded-3xl w-fit mt-5 hover:bg-pink-300 transition hover:scale-110'>
                    <img src="https://i.ibb.co/RG44LgGd/20240601-183428.jpg" alt="pp" className='w-40 mx-auto rounded-full border-2 border-pink-200 mt-5' />

                    <div className='py-5'>
                        <p className='text-2xl font-semibold mb-2'>Naimul Islam Ananta</p>
                        <p>Marketing manager</p>
                    </div>

                </div>


            </div>
        </div>
    )
}
