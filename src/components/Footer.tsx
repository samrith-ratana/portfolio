import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-8 mt-20 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} <span className="text-white font-medium">Ratana</span>. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Built with{' '}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Next.js
          </a>{' '}
          &{' '}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Tailwind CSS
          </a>
          . Deployed on{' '}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Vercel
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
