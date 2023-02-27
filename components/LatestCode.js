// Component imports
import Button from "./Button";
import Repository from "./Repository";

export default function LatestCode({ repositories }) {
  return (
    <section className='space-y-10 p-5'>
      <header className='flex flex-col items-center space-y-5'>
        <h1 className='text-3xl md:text-4xl text-green-800 font-bold text-center'>
          Latest Repos
        </h1>
        <Button url={`https://github.com/wem1c`} text={"View All"} />
      </header>

      <div className='grid gap-10 max-w-7xl mx-auto px-10 md:grid-cols-2 lg:grid-cols-3'>
        {repositories.length > 0 ? (
          repositories.map((repository, _idx) => {
            return <Repository key={_idx} repo={repository} />;
          })
        ) : (
          <p>No repos.</p>
        )}
      </div>
    </section>
  );
}
