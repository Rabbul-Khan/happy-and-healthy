import { MdSearch } from 'react-icons/md';

const SearchIcon = () => {
  return (
    <MdSearch
      color="#e55527"
      size={40}
      className="p-1 rounded-lg cursor-pointer bg-lighter hover:bg-darker"
    />
  );
};

export default SearchIcon;
