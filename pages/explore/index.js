import Layout from "../../components/ExploreComponents/Layout";
import Container from "../../components/ExploreComponents/Container";
import Card from "../../components/ExploreComponents/Card";
import Head from "next/head";
import axios from "axios";
const BlogsPage = ({ blogs }) => {
  return (
    <Layout>
      <Head>
        <title>Blogs | Kumar Adhikari</title>
      </Head>
      <Container>
        {blogs.map((blog) => (
          <Card key={blog.id} detail={blog} />
        ))}
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await axios.get("http://localhost:5000/blogs");
  let blogs = [];
  if (data.data.success) {
    for (let i in data.data.blogs) {
      blogs.push({
        id: data.data.blogs[i]._id,
        title: data.data.blogs[i].title,
        image: data.data.blogs[i].contents[0].image,
        date: data.data.blogs[i].publshedDate,
      });
    }
  }

  return {
    props: {
      blogs,
    },
  };
}

export default BlogsPage;
