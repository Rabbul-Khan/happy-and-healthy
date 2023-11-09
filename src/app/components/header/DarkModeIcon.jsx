import { MdSunny } from 'react-icons/md';

const DarkModeIcon = ({ darkSide, toggleDarkMode }) => {
  return (
    <MdSunny
      size={40}
      className="hidden p-1 transition duration-500 rounded-lg cursor-pointer lg:block bg-lighter hover:text-white hover:bg-primary text-primary"
      onClick={toggleDarkMode}
    />
  );
};

export default DarkModeIcon;
