import Meta from "@components/Meta";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <main className="max-w-7xl mx-auto">{children[0]}</main>
      <Footer />
    </>
  );
}
