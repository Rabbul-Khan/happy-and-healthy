import { MdSunny } from 'react-icons/md';

const DarkModeIcon = () => {
  return (
    <MdSunny
      color="#e55527"
      size={40}
      className="hidden p-1 rounded-lg cursor-pointer lg:block bg-lighter hover:bg-darker"
    />
  );
};

export default DarkModeIcon;
