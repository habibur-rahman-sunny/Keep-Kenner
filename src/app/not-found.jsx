'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="text-center flex flex-col items-center justify-center max-w-lg mx-auto">
        
        {/* Image */}
        <div className="mb-6 relative">
          <Image
            src="/images/error-404.png"
            alt="Page Not Found"
            width={220}
            height={220}
            priority
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-600 mt-3 text-base sm:text-lg max-w-md">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link href="/" passHref>
          <button className="mt-8 px-6 py-3 bg-[#7C4DFF] hover:bg-[#6c3df5] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;