import Layout from "../../../components/Layout";
import BlogPost from "../../../components/BlogPost";
import { getAllPostSlugs, getPostData } from "../../../lib/posts";

const PostPage = async ({ params }) => {
  const postData = getPostData(params.slug);
  return (
    <Layout>
      <BlogPost post={postData} />
    </Layout>
  );
};

export const generateStaticParams = async () => {
  const paths = getAllPostSlugs();
  return paths.map((path) => ({ slug: path.params.slug }));
};

export default PostPage;
