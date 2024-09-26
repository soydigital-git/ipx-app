// File: src/components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center items-center">
          <img src="/logo512.svg" alt="IPx Logo" className="h-12" />
        </div>
      </div>
    </header>
  );
};

export default Header;