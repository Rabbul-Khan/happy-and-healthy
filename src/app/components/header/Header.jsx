import Image from 'next/image';

import SearchIcon from './SearchIcon';
import DarkModeIcon from './DarkModeIcon';
import MessagesIcon from './MessagesIcon';
import MenuIcon from './MenuIcon';

const Header = () => {
  return (
    <header className="flex items-center justify-between h-16 px-5 bg-white">
      <Image src="/logo.png" width={60} height={30} alt="Logo" />
      <div className="relative flex items-center justify-center ml-auto lg:ml-0">
        <input
          type="text"
          className="hidden p-3 placeholder-black rounded-lg w-80 outline-gray-300 outline outline-1 lg:block focus:outline-primary focus:outline-2"
          placeholder="Search Best Food"
        />
        <span className="mr-5 lg:mr-0 lg:absolute lg:right-2">
          <SearchIcon />
        </span>
      </div>

      <div className="flex gap-5">
        <DarkModeIcon />
        <MessagesIcon />
        <MenuIcon />
      </div>
    </header>
  );
};

export default Header;
