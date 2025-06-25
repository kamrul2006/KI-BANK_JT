import { useState } from 'react';
import { IoMail } from 'react-icons/io5';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <section className="bg-gradient-to-r from-pink-500 to-red-600 text-pink-50 py-20 px-4 max-w-7xl mx-auto rounded-4xl my-10">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Stay Connected. Stay Aware.
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                    Join our newsletter to receive the latest updates & news, and activism opportunities.
                </p>

                {!submitted ? (
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full sm:w-2/3 px-6 py-2 rounded-full border border-white text-white placeholder-pink-100 focus:outline-none focus:ring-4 focus:ring-pink-300"
                        />
                        <button
                            type="submit"
                            className="btn rounded-full py-2"
                        >
                            <IoMail size={18} />
                            Subscribe
                        </button>
                    </form>
                ) : (
                    <p className="text-pink-300 font-semibold mt-6">
                        🎉 Thank you for subscribing!
                    </p>
                )}

                <p className="mt-6 text-sm text-gray-400">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
};

export default NewsletterSignup;