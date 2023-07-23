// import Next components
import Image from "next/image";
import Head from "next/head";

// import modules
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

export default function Post({ frontmatter, content }) {
  const {
    bannerImage,
    bannerImageAlt,
    bannerImageAttribute,
    title,
    description,
  } = frontmatter;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='description' content={description} key='description' />
        <meta property='og:title' content={title} key='ogtitle' />
        <meta
          property='og:description'
          content={description}
          key='ogdescription'
        />
      </Head>
      <section className='p-5'>
        <Image
          src={bannerImage}
          width={650}
          height={365}
          sizes='100vw'
          alt={bannerImageAlt}
          priority
          className='mx-auto'
        />
        <article
          className='mx-auto mt-5 prose prose-a:text-blue-600'
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        />
      </section>
    </>
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
