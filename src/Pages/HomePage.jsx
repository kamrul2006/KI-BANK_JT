import React from 'react'
import Banner from '../Components/Home/Banner'
import { Brands } from '../Components/Home/Brands'
import { AboutUsSection } from '../Components/Home/AboutUsSection'

export const HomePage = () => {
    return (
        <div>

            <Banner />

            <Brands />

            <AboutUsSection />
        </div>
    )
}
