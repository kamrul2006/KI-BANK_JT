import { Outlet } from 'react-router'
import NavBar from '../Components/Fixed/NavBar'

export const RootLayout = () => {
    return (
        <div>

            <NavBar />

            <Outlet />
        </div>
    )
}
