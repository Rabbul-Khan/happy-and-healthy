import { MdHome } from 'react-icons/md';

const HomeIcon = () => {
  return (
    <MdHome
      size={40}
      className="p-1 transition duration-500 rounded-lg cursor-pointer bg-lighter hover:text-white hover:bg-primary text-primary"
    />
  );
};

export default HomeIcon;
