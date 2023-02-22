// Module imports
import Link from "next/link";

// Component imports
import Button from "./Button";
import Repository from "./Repository";
import userData from "data/data";

export default function LatestCode({ repositories }) {
  return (
    <section className='bg-green-800 space-y-5 py-5'>
      <header className='flex flex-col items-center space-y-5'>
        <h1 className='text-6xl font-bold text-tan text-center'>Latest Code</h1>

        <Button
          url={`https://github.com/${userData.githubUsername}`}
          text={"View GitHub"}
        />
      </header>

      <ul className='grid gap-10 max-w-7xl mx-auto px-10 md:grid-cols-2'>
        {repositories.length > 0 ? (
          repositories.map((repository, _idx) => {
            return <Repository key={_idx} repo={repository} />;
          })
        ) : (
          <p>No repos.</p>
        )}
      </ul>
    </section>
  );
}
