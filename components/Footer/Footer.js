import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-pink-600 text-white py-4">
      <div className="flex flex-col md:flex-row justify-between items-center md:justify-around p-4">
        <p className="text-xl font-bold uppercase mb-4 md:mb-0">
          Kumar Adhikari
        </p>
        <div className="flex items-center space-x-4 my-4 md:my-0">
          <input
            type="text"
            className="p-2 w-64 md:w-80 rounded-xl text-black focus:border-2 focus:border-indigo-600"
            placeholder="Feedback"
          />
          <button className="btn bg-indigo-600 border-white border-2 my-1 py-2 px-4 md:px-8 rounded-xl font-medium hover:bg-indigo-500">
            Submit
          </button>
        </div>
      </div>
      <hr />
      <div>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="p-4">
            <p>+977 9843776792</p>
            <p>kumarad556@gmail.com</p>
            <p>Kathmandu, Nepal</p>
          </div>
          <div className="flex space-x-4 text-3xl my-4">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaGithub />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
