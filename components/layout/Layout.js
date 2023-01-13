import Meta from "@components/Meta";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <main>{children[0]}</main>
      <Footer />
    </>
  );
}
