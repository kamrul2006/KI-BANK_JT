import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen max-w-6xl mx-auto px-4">


            <img src="/error.gif" alt="404" className="w-1/3 mx-auto" />

            <div className="text-center px-4">
                <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>

                <p className="text-gray-600 mt-2 mb-6">
                    Sorry, the page you’re looking for doesn’t exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-2.5 rounded-full transition"
                >
                    <FaArrowLeft />
                    Go Back Home
                </Link>
            </div>

        </div>
    );
};

export default ErrorPage;
