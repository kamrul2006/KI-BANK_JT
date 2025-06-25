import React from 'react'
import Blogs from '../Components/Others/Blogs'

export const BlogPage = () => {
    return (
        <div>

            <div className='bg-pink-500 text-pink-200 py-10 lg:py-20 text-center'>
                <h1 className=' text-4xl lg:text-7xl font-semibold'>Blogs From KI Bank</h1>
            </div>

            <Blogs />
        </div>
    )
}
