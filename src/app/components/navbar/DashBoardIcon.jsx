import Link from 'next/link';
import { MdDashboard } from 'react-icons/md';

const DashBoardIcon = () => {
  return (
    <Link href="/dashboard">
      <MdDashboard
        size={40}
        className="p-1 transition duration-500 rounded-lg cursor-pointer bg-lighter hover:text-white hover:bg-primary text-primary"
      />
    </Link>
  );
};

export default DashBoardIcon;
