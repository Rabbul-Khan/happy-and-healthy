import Link from 'next/link';
import { MdHome } from 'react-icons/md';

const HomeIcon = () => {
  return (
    <Link href="/">
      <MdHome
        size={40}
        className="p-1 transition duration-500 rounded-lg cursor-pointer bg-lighter hover:text-white hover:bg-primary text-primary"
      />
    </Link>
  );
};

export default HomeIcon;
