import Layout from "../../../components/ExploreComponents/Layout";
import VideoCard from "../../../components/ExploreComponents/VideoCard";
import { Link as ScrollLink } from "react-scroll";

const VideosPage = () => {
  return (
    <Layout>
      <div className="grid place-items-center lg:grid-cols-3 md:grid-cols-2 gap-2 my-4 lg:mx-64">
        <ScrollLink to="video" spy={true} smooth={true}>
          <VideoCard />
        </ScrollLink>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </Layout>
  );
};

export default VideosPage;
