import React from 'react'
import Banner from '../Components/Home/Banner'
import { Brands } from '../Components/Home/Brands'
import { AboutUsSection } from '../Components/Home/AboutUsSection'
import { Stats } from '../Components/Home/Stats'

export const HomePage = () => {
    return (
        <div>

            <Banner />

            <Brands />

            <AboutUsSection />

            <Stats />
        </div>
    )
}
