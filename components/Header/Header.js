import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FaHome, FaCompass, FaInfoCircle, FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 z-10 w-full md:flex md:justify-around md:items-center md:py-2 bg-gray-900 text-white  ">
      <Link href="/">
        <ScrollLink to="landing" spy={true} smooth={true}>
          <p className="text-center text-2xl md:text-left font-bold uppercase hover:text-pink-600 cursor-pointer hidden md:block ">
            Kumar Adhikari
          </p>
        </ScrollLink>
      </Link>
      <nav>
        <ul className="flex flex-wrap space-x-16 md:space-x-8 items-center justify-center my-4 md:my-0">
          <li>
            <Link href="/">
              <ScrollLink to="landing" spy={true} smooth={true}>
                <FaHome className="text-2xl hover:text-pink-600 cursor-pointer " />
              </ScrollLink>
            </Link>
          </li>
          <li>
            <Link href="/explore">
              <FaCompass className="text-2xl hover:text-pink-600 cursor-pointer" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <ScrollLink to="about" spy={true} smooth={true}>
                <FaInfoCircle className="text-2xl hover:text-pink-600 cursor-pointer" />
              </ScrollLink>
            </Link>
          </li>
          <li>
            <ScrollLink to="footer" spy={true} smooth={true}>
              <FaUserAlt className="text-2xl hover:text-pink-600 cursor-pointer" />
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
