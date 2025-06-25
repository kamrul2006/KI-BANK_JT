import { Fade, Zoom } from 'react-awesome-reveal'
import { GiCash } from 'react-icons/gi'
import { PiPiggyBankThin } from 'react-icons/pi'
import { TfiLock } from 'react-icons/tfi'

export const Security = () => {
    return (
        <div className=' bg-pink-200 px-10 lg:px-0'>
            <div className='max-w-5xl mx-auto py-10 lg:py-20'>
                <Fade>
                    <p className='text-pink-600 font-bold z-50'>Security</p>

                    <h1 className='text-5xl max-w-3xl my-14'>
                        Committed to helping our customers succeed
                    </h1>
                </Fade>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-7'>

                    {/* ------1----------- */}
                    <Zoom>
                        <div className='border-l hover:bg-pink-100 transition hover:scale-x-110 border-pink-500 p-5 space-y-5'>

                            <PiPiggyBankThin className='text-8xl text-center text-pink-500' />

                            <h2 className='text-2xl font-medium'>Transparent Pricing</h2>

                            <p className='text-sm text-gray-700 text-justify pr-5'>
                                “Dear Customers, we are thrilled you chose to purchase the Tryo from us. We are working hard to build even higher-quality products for our customers.
                            </p>

                            <button className='btn btn-secondary btn-outline btn-sm'>
                                Learn More
                            </button>
                        </div>
                    </Zoom>

                    {/* ------2---------- */}
                    <Zoom>

                        <div className='border-l hover:bg-pink-100 transition hover:scale-x-110 border-pink-500 p-5 space-y-5'>

                            <GiCash className='text-8xl text-center text-pink-500' />

                            <h2 className='text-2xl font-medium'>Instant Cashout</h2>

                            <p className='text-sm text-gray-700 text-justify pr-5'>
                                “Dear Customers, we are thrilled you chose to purchase the Tryo from us. We are working hard to build even higher-quality products for our customers.
                            </p>

                            <button className='btn btn-secondary btn-outline btn-sm'>
                                Learn More
                            </button>
                        </div>
                    </Zoom>

                    {/* --------3----------- */}
                    <Zoom>
                        <div className='border-l hover:bg-pink-100 transition hover:scale-x-110 border-pink-500 p-5 pt-6 space-y-5'>

                            <TfiLock className='text-7xl text-center text-pink-500 mb-9' />

                            <h2 className='text-2xl font-medium'>Fully Encrypted</h2>

                            <p className='text-sm text-gray-700 text-justify pr-5'>
                                “Dear Customers, we are thrilled you chose to purchase the Tryo from us. We are working hard to build even higher-quality products for our customers.
                            </p>

                            <button className='btn btn-secondary btn-outline btn-sm'>
                                Learn More
                            </button>
                        </div>
                    </Zoom>

                </div>
            </div>
        </div>
    )
}
