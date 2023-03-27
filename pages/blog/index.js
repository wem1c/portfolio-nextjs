import fs from "fs";
import matter from "gray-matter";

import Head from "next/head";
import Link from "next/link";

export default function blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - Conor C. Peterson</title>
      </Head>

      <section className='space-y-10 p-5'>
        <ul className='space-y-5 w-fit mx-auto'>
          {posts.length > 0 ? (
            posts.map((post, idx) => {
              //extract slug and frontmatter
              const { slug, frontmatter } = post;
              //extract frontmatter properties
              const { title, date, tags } = frontmatter;

              //JSX for individual blog listing
              return (
                <li key={idx}>
                  <Link href={`/blog/${slug}`}>
                    <article key={title}>
                      <h1 className='text-xl font-semibold'>{title}</h1>
                      <p className='font-light italic text-fuchsia-800'>
                        {tags.map((tag) => `#${tag} `)}
                      </p>
                      <h3>{date}</h3>
                    </article>
                  </Link>
                </li>
              );
            })
          ) : (
            <p>No posts.</p>
          )}
        </ul>
      </section>
    </>
  );
}

export async function getStaticProps() {
  // get array of subfolder names from posts folder
  const subfolders = fs.readdirSync("posts");

  // get frontmatter & slug from each post
  const posts = subfolders.map((subfolder) => {
    // subfolder name == post name
    const slug = subfolder;
    const postMarkdown = fs.readFileSync(
      `posts/${subfolder}/${subfolder}.md`,
      "utf-8"
    );
    const { data: frontmatter } = matter(postMarkdown);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
