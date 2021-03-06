import { FaChevronUp, FaCommentAlt, FaShareAlt } from "react-icons/fa";

const Card = ({ detail }) => {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col align-center justify-between">
      <p className="text-xl font-bold mb-2  bg-clip-text bg-gradient-to-br from-indigo-600 to-pink-600 text-transparent">
        {detail.title}&nbsp; &nbsp;
        <span className="italic text-pink-500 font-medium text-sm">
          {detail.date}
        </span>
      </p>
      <img className="rounded-xl" src={detail.image} alt={detail.title} />
      <div className="w-full flex my-4 text-2xl">
        <FaChevronUp className="w-1/3 cursor-pointer" />
        <FaCommentAlt className="w-1/3 cursor-pointer" />
        <FaShareAlt className="w-1/3 cursor-pointer" />
      </div>
    </div>
  );
};

export default Card;
