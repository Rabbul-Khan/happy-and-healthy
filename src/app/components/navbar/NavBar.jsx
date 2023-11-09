import HomeIcon from './HomeIcon';
import DashBoardIcon from './DashBoardIcon';
import MessageIcon from './MessageIcon';
import MediaIcon from './MediaIcon';
import OthersIcon from './OthersIcon';

const NavBar = () => {
  return (
    <nav className="hidden w-16 bg-white min-h-[calc(100vh-4rem)]  lg:flex flex-col items-center pt-72 gap-5 dark:bg-darkBlack">
      <HomeIcon />
      <DashBoardIcon />
      <MessageIcon />
      <MediaIcon />
      <OthersIcon />
    </nav>
  );
};

export default NavBar;
