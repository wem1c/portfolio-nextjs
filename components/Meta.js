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
      {/* favicon meta */}
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicons/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicons/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicons/favicon-16x16.png'
      />
      <link rel='icon' href='/favicons/favicon.ico' />
      <link
        rel='shortcut icon'
        sizes='192x192'
        href='/favicons/android-chrome-192x192.png'
      />
      <link
        rel='shortcut icon'
        sizes='512x512'
        href='/favicons/android-chrome-512x512.png'
      />
      <link rel='manifest' href='/favicons/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />

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
