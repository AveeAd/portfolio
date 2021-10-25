import Layout from "../../../components/ExploreComponents/Layout";
import Container from "../../../components/ExploreComponents/Container";
import Card from "../../../components/ExploreComponents/Card";
import Head from "next/head";
import axios from "axios";
const ProjectsPage = ({ projects }) => {
  return (
    <Layout>
      <Head>
        <title>Projects | Kumar Adhikari</title>
      </Head>
      <Container>
        {projects.map((project) => (
          <Card key={project.id} detail={project} />
        ))}
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await axios.get("http://localhost:5000/projects");
  let projects = [];
  if (data.data.success) {
    for (let i in data.data.projects) {
      projects.push({
        id: data.data.projects[i]._id,
        title: data.data.projects[i].title,
        image: data.data.projects[i].contents[0].image,
        date: data.data.projects[i].publshedDate,
      });
    }
  }
  return {
    props: {
      projects,
    },
  };
}

export default ProjectsPage;
