import HomeIcon from './HomeIcon';
import DashBoardIcon from './DashBoardIcon';
import MessageIcon from './MessageIcon';
import MediaIcon from './MediaIcon';
import OthersIcon from './OthersIcon';

const NavBar = () => {
  return (
    <nav className="hidden w-16 bg-white h-[calc(100vh-4rem)] lg:flex flex-col items-center justify-center gap-5">
      <HomeIcon />
      <DashBoardIcon />
      <MessageIcon />
      <MediaIcon />
      <OthersIcon />
    </nav>
  );
};

export default NavBar;
