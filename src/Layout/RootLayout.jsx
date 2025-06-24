import { Outlet } from 'react-router'
import NavBar from '../Components/Fixed/NavBar'
import { Footer } from '../Components/Fixed/Footer'

export const RootLayout = () => {
    return (
        <div className=''>

            <NavBar />

            <Outlet />

            <Footer />
        </div>
    )
}
