import { Zoom } from 'react-awesome-reveal';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

const blogs = [
    {
        id: 1,
        title: 'Smart Saving Tips in 2025 Helpful for you.',
        description:
            'Discover how you can build your savings effectively with KI Bank’s expert financial guidance and tools. Learn the key benefits of ',
        author: 'Finance Team',
        date: 'June 20, 2025',
        image: 'https://www.investopaper.com/wp-content/uploads/2021/08/money-800x445.jpg',

    },
    {
        id: 2,
        title: 'Understanding Personal Loan And Others',
        description:
            'Learn the key benefits of personal loans and how KI Bank helps you make smart borrowing decisions. Learn the key benefits of ',
        author: 'Loan Advisory Team',
        date: 'June 10, 2025',
        image: 'https://www.rbcroyalbank.com/en-ca/wp-content/uploads/sites/12/2023/09/Untitled-design-2023-07-31T120240.836-1.jpg',
    },
    {
        id: 3,
        title: 'Digital Banking Trends You Should Know',
        description:
            'Stay updated with the latest digital banking innovations and how KI Bank is leading the transformation.',
        author: 'Tech & Innovation',
        date: 'May 29, 2025',
        image: 'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/07/30/digital_bank_in_bangladesh.jpg',
    },
    {
        id: 4,
        title: 'Digital Banking Trends You Should Know',
        description:
            'Stay updated with the latest digital banking innovations and how KI Bank is leading the transformation.',
        author: 'Tech & Innovation',
        date: 'May 29, 2025',
        image: 'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/07/30/digital_bank_in_bangladesh.jpg',
    },
    {
        id: 5,
        title: 'Digital Banking Trends You Should Know',
        description:
            'Stay updated with the latest digital banking innovations and how KI Bank is leading the transformation.',
        author: 'Tech & Innovation',
        date: 'May 29, 2025',
        image: 'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/07/30/digital_bank_in_bangladesh.jpg',
    },
];

const Blogs = () => {
    return (
        <div className="bg-white text-gray-800 py-16 px-4 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4">Latest from KI Bank</h1>
            <div className="flex justify-center mb-8">
                <span className="h-1 w-24 bg-pink-600 rounded-full"></span>
            </div>
            <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
                Stay informed with expert advice, updates, and insights from the financial world—curated by KI Bank to help you thrive.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <Zoom>
                        <div
                            key={blog.id}
                            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
                        >
                            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-pink-700 hover:underline cursor-pointer">
                                    {blog.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">{blog.description}</p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <FaUser /> {blog.author}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaCalendarAlt /> {blog.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
