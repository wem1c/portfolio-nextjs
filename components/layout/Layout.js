import Meta from "@components/Meta";
import Navbar from "./nav/Navbar";
import Footer from "./Footer";

import {
  faMastodon,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const fontAwesomeIcons = [
  {
    href: "https://social.linux.pizza/@wemic",
    icon: faMastodon,
    alt: "Mastodon icon",
  },
  {
    href: "https://www.linkedin.com/in/conor-peterson/",
    icon: faLinkedin,
    alt: "LinkedIn icon",
  },
  {
    href: "https://github.com/wem1c",
    icon: faGithub,
    alt: "GitHub icon",
  },
];

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar icons={fontAwesomeIcons} />
      <main className='min-h-screen'>{children[0]}</main>
      <Footer icons={fontAwesomeIcons} />
    </>
  );
}
