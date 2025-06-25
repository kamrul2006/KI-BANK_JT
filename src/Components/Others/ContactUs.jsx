import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className='bg-gradient-to-b from-white via-pink-100 to-white'>
            <div className=" text-gray-800 py-16 px-4 max-w-7xl mx-auto">


                <h1 className="text-4xl font-bold text-center mb-4">
                    Drop Us a Message for Any Query
                </h1>
                <div className="flex justify-center mb-6">
                    <span className="h-1 w-40 bg-pink-600 rounded-full"></span>
                </div>
                <p className="text-center max-w-2xl mx-auto mb-12 text-gray-500">
                    We'd love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out. Our team will get back to you as soon as possible.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Location */}
                        <div className="flex items-start space-x-4">
                            <div className="text-white bg-gradient-to-r from-pink-500 to-pink-800 p-4 rounded-full text-xl">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Our Address</h3>
                                <p>CA 560 Bush St & 20th Ave, Apt 5</p>
                                <p>San Francisco, 230909, Canada</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start space-x-4">
                            <div className="text-white bg-gradient-to-r from-pink-500 to-pink-800 p-4 rounded-full text-xl">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Email Us</h3>
                                <p>support@example.com</p>
                                <p>info@example.com</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start space-x-4">
                            <div className="text-white bg-gradient-to-r from-pink-500 to-pink-800 p-4 rounded-full text-xl">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Call or Fax</h3>
                                <p>+1 (587) 154-7560</p>
                                <p>+55 (5555) 14574</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full border-2 border-pink-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-pink-400"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border-2 border-pink-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-pink-400"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full border-2 border-pink-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-pink-400"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full border-2 border-pink-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-pink-400"
                                required
                            />
                        </div>
                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="w-full border-2 border-pink-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-pink-400"
                            required
                        ></textarea>
                        <div className="flex items-start space-x-2">
                            <input type="checkbox" id="terms" className="mt-1" required />
                            <label htmlFor="terms" className="text-sm text-gray-600">
                                By checking this box, you agree to our <span className="text-blue-500 underline">Terms</span> and <span className="text-blue-500 underline">Privacy Policy</span>.
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-secondary"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
