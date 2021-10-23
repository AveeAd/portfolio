import styles from "../../styles/landing.module.css";
import Link from "next/link";

const Landing = () => {
  return (
    <div
      id="landing"
      className={`${styles.landing} relative flex justify-center items-center h-screen  mt-14 md:mt-12`}
    >
      <img className="object-center" src="/images/programming.svg" alt="" />
      <div
        className={`${styles.overlay} absolute top-0 left-0 flex flex-col items-center mt-16 bg-gray-700 bg-opacity-30 `}
      >
        <p className="text-center text-white text-4xl uppercase font-bold">
          Web Design And Development
        </p>
        <span></span>
        <Link href="/contract">
          <a className="btn text-white bg-pink-600 py-2 px-16 rounded-xl my-4 font-medium tracking-widest hover:bg-pink-500">
            Hire
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
