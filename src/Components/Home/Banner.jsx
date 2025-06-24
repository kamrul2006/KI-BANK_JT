import { Fade, Slide } from 'react-awesome-reveal'
import { BiRightArrow, BiX } from 'react-icons/bi'
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router'
// import { Typewriter } from 'react-simple-typewriter'

function Banner() {
    return (
        <div className=' flex items-center justify-center z-40'>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between mx-auto max-w-7xl text-center lg:text-left'>

                {/* ---------name and title-------- */}
                <div className=' px-10 pb-10 lg:pb-0'>

                    <Slide>
                        <h1 className='lg:text-7xl text-4xl text-blue-200 font-medium py-3'>
                            Easy, fee-free banking
                            <span className='text-blue-600 mt-4'> for entrepreneurs</span>
                        </h1>

                        <div className='text-blue-400  h-10 my-3'>
                            <p>
                                Get the financial tools and insights to start, build, and grow your business.
                            </p>
                        </div>

                        {/* -------------------social logos------------ */}
                        <div className='my-5 flex items-center justify-center lg:justify-start gap-4 font-serif  text-xl'>
                            <a
                                href="https://github.com/kamrul2006"
                                className='text-blue-500 hover:text-black hover:bg-blue-500 rounded-full  transition p-2 border border-blue-400'>
                                <FiGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com"
                                className='text-blue-500 hover:text-black hover:bg-blue-500 rounded-full  transition p-2 border border-blue-400'> <FiLinkedin />
                            </a>

                            <a
                                href="https://x.com/kamrul__2006"
                                className='text-blue-500 hover:text-black hover:bg-blue-500 rounded-full  transition p-2 border border-blue-400'>
                                <FiTwitter />
                            </a>

                            <a
                                href="https://facebook.com/kamrul.islam.apurba"
                                className='text-blue-500 hover:text-black hover:bg-blue-500 rounded-full  transition p-2 border border-blue-400'>
                                <FiFacebook />
                            </a>


                        </div>

                        {/* -------------other Buttons---------- */}
                        <div className='mt-10 space-x-3 font-semibold flex items-center justify-center lg:justify-start'>

                            <Link
                                to={"/about"}
                                className=' py-2  px-5 lg:px-9 lg:text-lg rounded-full bg-blue-600 text-black hover:border-2 hover:bg-black transition hover:border-blue-600 hover:text-blue-600 flex items-center justify-center gap-3 hover:drop-shadow-2xl hover:drop-shadow-blue-950'>
                                Explore More <BiRightArrow />
                            </Link>

                            <a
                                href="/RESUME OF KAMRUL ISLAM .pdf"
                                download
                                className='border-2 hover:bg-blue-600 hover:text-white border-blue-600 text-blue-600 rounded-full transition py-2  px-5 lg:px-9 lg:text-lg hover:drop-shadow-2xl hover:border-0 hover:drop-shadow-blue-950'>
                                Download CV
                            </a>
                        </div>

                    </Slide>
                </div>

                {/* ----------image---------------- */}
                <div className='lg:w-1/2'>
                    <Fade delay={400}>
                        <img src="Ccard.png" alt="abc" className='lg:w-full w-10/12 mx-auto rounded-b-full lg:rounded-none mb-5 lg:mb-0 border-b-4 lg:border-0 border-blue-500' />
                    </Fade>
                </div>

            </div>
        </div>
    )
}

export default Banner