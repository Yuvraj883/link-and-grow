const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between shadow-md px-10 py-4'>
        <span className='font-bold font-serif text-lg'>Link&Grow</span>

        <ul className='flex flex-row font-semibold '>
          <li className='cursor-pointer px-2 mx-2 hover:text-red-900'>Home</li>
          <li className='cursor-pointer px-2 mx-2 hover:text-red-900'>About</li>
          <li className='cursor-pointer px-2 mx-2 hover:text-red-900'>Tools</li>
        </ul>
      </nav>
    </>
  )
}
export default Navbar
