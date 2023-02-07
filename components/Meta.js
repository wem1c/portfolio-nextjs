import Head from "next/head";
import { useRouter } from "next/router";

/**
 * A wrapper component for the Head component and its metadata shared by every page.
 *
 * @returns Head component with metadata.
 */
export default function Meta() {
  const router = useRouter();

  const meta = {
    title: "Conor C. Peterson",
    description: `Fullstack Web Developer. Sitting on an idea? Reach out and let's bring it to life!`,
    image: "/avatar.png",
    "image-alt": "avatar image",
    type: "website",
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='description' content={meta.description} />
      <meta name='robots' content='follow, index' />
      <link
        rel='canonical'
        href={`https://conorpeterson.com${router.asPath}`}
      />
      {/* OpenGraph metadata */}
      <meta
        property='og:url'
        content={`https://conorpeterson.com${router.asPath}`}
      />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Conor C. Peterson' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:image' content={meta.image} />
      <meta property='og:image:alt' content={meta.image} />
      {meta.date && (
        <meta property='article:published_time' content={meta.date} />
      )}
    </Head>
  );
}
