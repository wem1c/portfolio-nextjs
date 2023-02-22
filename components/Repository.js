// Component imports
import Link from "next/link";

const Repository = ({ repo }) => {
  return (
    <Link href={repo.clone_url}>
      <h1 className='font-semibold text-xl text-tan'>{repo.name}</h1>
      <p className='text-base font-normal text-gray-200'>{repo.description}</p>
    </Link>
  );
};

export default Repository;
