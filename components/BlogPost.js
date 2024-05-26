"use client";
import React, { useEffect } from "react";
import styles from "./BlogPost.module.css";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

const BlogPost = ({ post }) => {
  const { title, date, author, content } = post;
  const [htmlContent, setHtmlContent] = React.useState("");

  useEffect(() => {
    const processMarkdown = async () => {
      const processedContent = await remark().use(html).process(content);
      setHtmlContent(processedContent.toString());
    };
    processMarkdown();
  }, [content]);

  return (
    <article className={styles.article}>
      <h1>{title}</h1>
      <p>
        {date} by {author}
      </p>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <Link href="/" className={`${styles.backButton} btn btn-primary mt-3`}>
        Back to Home
      </Link>
    </article>
  );
};

export default BlogPost;
