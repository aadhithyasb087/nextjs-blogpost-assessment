import Layout from "../components/Layout";
import BlogList from "../components/BlogList";
import { getSortedPostsData } from "../lib/posts";

export const metadata = {
  title: "Home | My Blog",
  description: "Welcome to my blog",
};

const HomePage = async () => {
  const allPostsData = getSortedPostsData();
  return (
    <Layout>
      <BlogList posts={allPostsData} />
    </Layout>
  );
};

export default HomePage;
