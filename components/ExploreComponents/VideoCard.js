import { FaPlay } from "react-icons/fa";
import { useState } from "react";

const VideoCard = ({ onClick }) => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <div
      style={{ minHeight: "fit-content", minWidth: "fit-content" }}
      className="relative"
      onClick={onClick}
    >
      <img
        src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg"
        alt=""
      />
      <div
        className="absolute w-full h-full hover:bg-black hover:bg-opacity-50 top-0 left-0 grid place-items-center"
        onMouseOver={(e) => setHoverState(true)}
        onMouseOut={(e) => setHoverState(false)}
      >
        <FaPlay
          className={`text-white cursor-pointer text-5xl ${
            hoverState ? "" : "hidden"
          }`}
        />
      </div>
    </div>
  );
};

export default VideoCard;
