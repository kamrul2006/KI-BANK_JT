import { Fade, Slide } from 'react-awesome-reveal'
import { BiRightArrow, BiX } from 'react-icons/bi'
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router'
// import { Typewriter } from 'react-simple-typewriter'

function Banner() {
    return (
        <div className='flex items-center justify-center z-40  bg-pink-50' >

            <div className='flex flex-col-reverse lg:flex-row items-center justify-between mx-auto max-w-6xl text-center lg:text-left'>

                {/* ---------name and title-------- */}
                <div className=' pl-10 pb-10 lg:pb-0 lg:w-1/2'>

                    <Slide>
                        <h1 className='lg:text-6xl space-y-4 text-4xl text-pink-600 font-medium py-3'>
                            Easy, fee-free banking
                            <span className='text-pink-800 mt-4'> for entrepreneurs</span>
                        </h1>

                        <div className='text-gray-600  h-10 my-3 text-2xl font-medium'>
                            <p>
                                Get the financial tools and insights to start,
                                <br /> build, and grow your business.
                            </p>
                        </div>

                        {/* -------------other Buttons---------- */}
                        <div className='mt-16 space-x-3 font-semibold flex items-center justify-center lg:justify-start'>

                            <Link
                                to={"/about"}
                                className=' py-3 px-5 lg:px-9 lg:text-lg rounded-xl bg-pink-600 text-pink-50 hover:border-2 hover:bg-transparent transition hover:border-pink-600 hover:text-pink-600 flex items-center justify-center gap-3 hover:drop-shadow-2xl hover:drop-shadow-pink-950'>
                                Explore More <BiRightArrow />
                            </Link>

                            <a
                                className='border-2 hover:bg-pink-600 hover:text-white border-pink-600 text-pink-600 rounded-xl transition py-3  px-5 lg:px-9 lg:text-lg hover:drop-shadow-2xl hover:border-0 hover:drop-shadow-pink-950'>
                                Get Started
                            </a>
                        </div>

                    </Slide>
                </div>

                {/* ----------image---------------- */}
                <div className='lg:w-1/2 bg-contain bg-center w-full'
                    style={{
                        backgroundImage:
                            "url(/bbg.png)",
                    }}>
                    <Fade delay={400}>
                        <img src="Card.png" alt="abc" className=' w-10/12 mx-auto rounded-b-full lg:rounded-none mb-5 lg:mb-0 border-b-4 lg:border-0 border-pink-500 p-4' />
                    </Fade>
                </div>

            </div>
        </div>
    )
}

export default Banner