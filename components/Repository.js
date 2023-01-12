// Component imports
import Link from "next/link";

const Repository = ({ repo }) => {
  return (
    <Link href={repo.clone_url}>
      <h1 className="font-semibold text-xl text-gray-700">{repo.name}</h1>
      <p className="text-base font-normal text-gray-500">{repo.description}</p>
    </Link>
  );
};

export default Repository;
