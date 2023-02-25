import userData from "data/data";

export default function AboutMe() {
  return (
    <section className='p-5 flex flex-col space-y-5 lg:w-1/2'>
      {userData.about.description?.map((desc, idx) => (
        <p key={idx} className='text-xl text-gray-800'>
          {desc}
        </p>
      ))}
    </section>
  );
}
