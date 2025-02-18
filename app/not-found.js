// pages/404.js

import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen text-center'>
            <h1 className='text-3xl mb-1'>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link href="/">Go back to Home
            </Link>
        </div>
    );
};


export default Custom404;
