import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className=" w-full p-4 grid place-items-center">
      <div className="w-3/4 relative">
        <input
          className="py-2 px-4 rounded-3xl w-full"
          type="text"
          placeholder="search here"
        />
        <FaSearch className="absolute right-0 bottom-0 mb-3 mr-3" />
      </div>
    </div>
  );
};

export default Searchbar;
