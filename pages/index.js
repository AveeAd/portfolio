import Header from "../components/Header/Header";
import Landing from "../components/Homepage/Landing";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

const Homepage = () => {
  return (
    <div>
      <Head>
        <title>Home | Kumar Adhikari</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Header />
      <main>
        <Landing />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
