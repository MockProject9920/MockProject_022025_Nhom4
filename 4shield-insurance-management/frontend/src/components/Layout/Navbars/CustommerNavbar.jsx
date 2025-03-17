function CustommerNavbar() {
    return ( 
        <>
            

<div className="flex bg-gray-100">
   <div className="flex-1 flex flex-cols">
        <main>
            <nav className="w-full border-0 dark:bg-gray-900">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              </div>
              <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Asset Infomation</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Personal Information</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Payment Infomation</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Registered Insurance List</a>
                  </li>
                </ul>
              </div>
              </div>
            </nav>
        </main>
   </div>
</div>

        </>
     );
}

export default CustommerNavbar;