import Link from "next/link";
import styles from "./BlogList.module.css";

const BlogList = ({ posts }) => {
  return (
    <div className="row">
      {posts.map(({ slug, title, summary, date }) => (
        <div key={slug} className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="card-text">{summary}</p>
              <small className="text-muted">{date}</small>
              <Link href={`/posts/${slug}`} className="stretched-link">
                Read more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
