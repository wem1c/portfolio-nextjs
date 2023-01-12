// Component imports
import Hero from "../components/Hero";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import getLatestRepos from "@lib/getLatestRepos";

export default function Home({ repositories }) {
  return (
    <>
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </>
  );
}

export const getServerSideProps = async () => {
  const repoCount = 6;
  try {
    const repositories = await getLatestRepos(repoCount);
    return {
      props: {
        repositories,
      },
    };
  } catch (err) {
    console.error("getServerSideProps ERROR: ", err);
  }
};
