import { MdMessage } from 'react-icons/md';

const MessageIcon = () => {
  return (
    <MdMessage
      color="#e55527"
      size={40}
      className="p-1 rounded-lg cursor-pointer bg-lighter hover:bg-darker"
    />
  );
};

export default MessageIcon;
