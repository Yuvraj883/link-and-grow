const LeftBar = () => {
  return (
    <>
      <div className='h-[100vh] shadow-md w-[15%]'>
        <ul className='flex flex-col font-semibold px-10 py-8 text-lg '>
          <li className='cursor-pointer px-2 py-2  mx-2 hover:text-red-700  border-b-2 border-gray-200'>
            Home
          </li>
          <li className='cursor-pointer px-2 py-2 mx-2 hover:text-red-700 border-b-2 border-gray-200'>
            About
          </li>
          <li className='cursor-pointer px-2 py-2 mx-2 hover:text-red-700 border-b-2 border-gray-200'>
            Tools
          </li>
        </ul>
      </div>
    </>
  )
}
export default LeftBar
