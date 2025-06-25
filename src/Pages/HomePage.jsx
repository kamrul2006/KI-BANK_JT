import React from 'react'
import Banner from '../Components/Home/Banner'
import { Brands } from '../Components/Home/Brands'
import { AboutUsSection } from '../Components/Home/AboutUsSection'
import { Stats } from '../Components/Home/Stats'
import { Security } from '../Components/Home/Security'
import { AffordLessMoney } from '../Components/Home/AffordLessMoney'

export const HomePage = () => {
    return (
        <div>

            <Banner />

            <Brands />

            <AboutUsSection />

            <Stats />

            <Security />

            <AffordLessMoney />
        </div>
    )
}
