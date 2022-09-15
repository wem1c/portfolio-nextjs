import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * A wrapper component for the Head, Navbar, and Footer components shared by every page.
 *
 * @param {object} children The inner components of the ContainerBlock component passed as a parameter by Next.
 * @param {object} customMeta Custom meta properties for the Head component.
 * @returns Page with Head, Navbar, main, Footer.
 */
export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Conor C. Peterson",
    description: `Full-Stack Web Developer. Have an idea you want to make happen? Contact me and let's bring it to life!`,
    image: "/avatar.png",
    "image-alt": "avatar image",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="robots" content="follow, index" />
        <link
          rel="canonical"
          href={`https://conorpeterson.com${router.asPath}`}
        />
        {/* OpenGraph metadata */}
        <meta
          property="og:url"
          content={`https://conorpeterson.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Conor C. Peterson" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
}
