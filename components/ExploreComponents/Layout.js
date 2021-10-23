import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Link from "next/link";
import Searchbar from "../Search/Searchbar";
import styles from "../../styles/explore.module.css";

const ExploreLayout = (props) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen pt-16">
        <Searchbar />
        <nav className={`${styles.nav} bg-gray-200`}>
          <ul className="flex justify-center font-medium">
            <li className="hover:border-b-4 border-pink-600 p-2 md:px-8 ">
              <Link href="/explore">Blogs</Link>
            </li>
            <li className="hover:border-b-4 border-pink-600 p-2 md:px-8">
              <Link href="/explore/projects">Projects</Link>
            </li>
            <li className="hover:border-b-4 border-pink-600 p-2 md:px-8">
              <Link href="/explore/videos">Videos</Link>
            </li>
          </ul>
        </nav>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default ExploreLayout;
