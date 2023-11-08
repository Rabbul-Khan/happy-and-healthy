import { MdOutlineSms } from 'react-icons/md';

const MessagesIcon = () => {
  return (
    <MdOutlineSms
      color="#000000"
      size={40}
      className="hidden p-1 rounded-lg cursor-pointer lg:block bg-lighter hover:bg-darker"
    />
  );
};

export default MessagesIcon;
