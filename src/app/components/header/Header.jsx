'use client';

import Image from 'next/image';
import { useState } from 'react';
import useDarkSide from '@/app/hooks/useDarkMode';

import SearchIcon from './SearchIcon';
import DarkModeIcon from './DarkModeIcon';
import MessagesIcon from './MessagesIcon';
import MenuIcon from './MenuIcon';

const Header = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  );
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <header className="flex items-center justify-between h-16 px-5 bg-white dark:bg-darkBlack">
      <Image src="/logo.png" width={60} height={30} alt="Logo" />
      <div className="relative flex items-center justify-center ml-auto lg:ml-0">
        <input
          type="text"
          className="hidden p-3 placeholder-black rounded-lg w-80 outline-gray-200 outline outline-1 lg:block focus:outline-primary focus:outline-2 dark:bg-darkBlackSecondary dark:outline-gray-200 dark:placeholder-gray-200"
          placeholder="Search Best Food"
        />
        <span className="mr-5 lg:mr-0 lg:absolute lg:right-2">
          <SearchIcon />
        </span>
      </div>

      <div className="flex gap-5">
        <DarkModeIcon darkSide={darkSide} toggleDarkMode={toggleDarkMode} />
        <MessagesIcon />
        <MenuIcon />
      </div>
    </header>
  );
};

export default Header;
