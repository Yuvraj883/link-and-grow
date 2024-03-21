const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between shadow-md px-10 py-4'>
        <span className='font-extrabold text-red-700 font-serif text-lg'>Link&Grow</span>
      </nav>
      <ul className='flex flex-col font-semibold h-[100vh] px-10 py-8 text-lg shadow-md w-[15%]'>
          <li className='cursor-pointer px-2 py-2  mx-2 hover:text-red-700  border-b-2 border-gray-200'>Home</li>
          <li className='cursor-pointer px-2 py-2 mx-2 hover:text-red-700 border-b-2 border-gray-200'>About</li>
          <li className='cursor-pointer px-2 py-2 mx-2 hover:text-red-700 border-b-2 border-gray-200'>Tools</li>
        </ul>
    </>
  )
}
export default Navbar
