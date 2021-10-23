import Layout from "../../components/ExploreComponents/Layout";
import Container from "../../components/ExploreComponents/Container";
import Card from "../../components/ExploreComponents/Card";
import Head from "next/head";
const BlogsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Blogs | Kumar Adhikari</title>
      </Head>
      <Container>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </Layout>
  );
};

export default BlogsPage;
