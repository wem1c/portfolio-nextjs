export default function ItemGrid({ children }) {
  return (
    <div className='grid gap-10 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-3'>
      {children}
    </div>
  );
}
