import Marquee from "react-fast-marquee";


export const Brands = () => {
    return (
        <div className='bg-gradient-to-b from-pink-50 to-white py-10'>

            <Marquee>
                <img src="/blogo/b1.png" alt="brandLogo" className='mx-8 lg:w-60 w-48' />
                <img src="/blogo/b2.png" alt="brandLogo" className='mx-8 lg:w-60 w-48' />
                <img src="/blogo/bb3.png" alt="brandLogo" className='mx-8 lg:w-60 w-48' />
                <img src="/blogo/b4.png" alt="brandLogo" className='mx-8 lg:w-60 w-48' />
                <img src="/blogo/b5.png" alt="brandLogo" className='mx-8 lg:w-60 w-48' />
            </Marquee>

        </div>
    )
}
