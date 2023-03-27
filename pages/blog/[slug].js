import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

import Image from "next/image";

// The page for each post
export default function Post({ frontmatter, content }) {
  const { bannerImage, bannerImageAlt, bannerImageAttribute } = frontmatter;

  return (
    <section className='p-5'>
      <Image
        src={bannerImage}
        width={650}
        height={365}
        sizes='(min-width: 1536px) 45vw,(min-width: 1280px) 55vw,(min-width: 1024px) 65wv,(min-width: 768px) 85vw, 100vw'
        alt={bannerImageAlt}
        priority
        className='mx-auto'
      />
      <article
        className='prose prose-a:text-blue-600 mx-auto mt-5'
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      />
    </section>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // get array of subfolder names from posts folder
  const subfolders = fs.readdirSync("posts");
  // subfolder name == post slug
  // generate a path for each one
  const paths = subfolders.map((subfolder) => ({
    params: {
      slug: subfolder,
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const postMarkdown = fs.readFileSync(`posts/${slug}/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(postMarkdown);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
