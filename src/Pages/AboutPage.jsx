import React from 'react'
import { AboutSecPage } from '../Components/Others/AboutSecPage'
import { Team } from '../Components/Others/Team'
import NewsletterSignup from '../Components/Home/NewsletterSignup'

export const AboutPage = () => {
    return (
        <div>

            <div className='bg-pink-500 text-pink-200 py-10 lg:py-20 text-center'>
                <h1 className=' text-4xl lg:text-7xl font-semibold'>About KI Bank</h1>
            </div>

            <AboutSecPage />

            <Team />

            <NewsletterSignup />
        </div>
    )
}
