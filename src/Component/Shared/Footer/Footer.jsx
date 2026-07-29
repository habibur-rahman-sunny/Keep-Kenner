import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            KeenKeeper
          </h2>

          <p className="text-gray-200 text-sm md:text-base max-w-2xl mb-6">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>

          <h3 className="text-base font-semibold mb-4">
            Social Links
          </h3>

          <div className="flex gap-3">
            <a
              href="#"
              className="bg-white text-black rounded-full p-2.5 transition-colors hover:bg-gray-200 "
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-white text-black rounded-full p-2.5  transition-colors hover:bg-gray-200"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-white text-black rounded-full p-2.5 hover:bg-gray-200 transition-colors"
              aria-label="Twitter/X"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-300 pt-6 border-t border-white/10">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;