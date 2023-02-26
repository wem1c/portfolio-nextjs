import userData from "data/data";

export default function AboutMe() {
  return (
    <>
      {userData.about.description?.map((desc, idx) => (
        <p key={idx} className='text-xl text-gray-800 m-5'>
          {desc}
        </p>
      ))}
    </>
  );
}
