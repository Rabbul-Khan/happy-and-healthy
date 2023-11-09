import { MdOutlineSms } from 'react-icons/md';

const MessagesIcon = () => {
  return (
    <MdOutlineSms
      size={40}
      className="hidden p-1 text-black transition duration-500 rounded-lg cursor-pointer lg:block bg-lighter hover:text-white hover:bg-primary"
    />
  );
};

export default MessagesIcon;
