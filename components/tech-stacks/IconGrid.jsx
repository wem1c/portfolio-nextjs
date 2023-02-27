const IconGrid = ({ icons }) => {
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-3 gap-5 items-center place-items-center md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-5'>
      {icons.map((icon, idx) => (
        <svg
          key={idx}
          role='image'
          viewBox='0 0 24 24'
          xmlns='<http://www.w3.org/2000/svg>'
          className='w-[80px] aspect-square'
        >
          <title>{icon.title}</title>
          <path fill={`#${icon.hex}`} d={icon.path} />
        </svg>
      ))}
    </div>
  );
};

export default IconGrid;
