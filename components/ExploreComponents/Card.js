import { FaChevronUp, FaCommentAlt, FaShareAlt } from "react-icons/fa";

const Card = () => {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col align-center justify-center">
      <p className="text-xl font-bold mb-2  bg-clip-text bg-gradient-to-br from-indigo-600 to-pink-600 text-transparent">
        Lorem ipsum dolor sit amet. &nbsp; &nbsp;
        <span className="italic text-pink-500 font-medium text-sm">
          2020/12/04
        </span>
      </p>
      <img
        className="rounded-xl"
        src="https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png"
        alt=""
      />
      <div className="w-full flex mt-4 text-2xl">
        <FaChevronUp className="w-1/3 cursor-pointer" />
        <FaCommentAlt className="w-1/3 cursor-pointer" />
        <FaShareAlt className="w-1/3 cursor-pointer" />
      </div>
    </div>
  );
};

export default Card;
