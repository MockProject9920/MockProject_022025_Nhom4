/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import navigationList from "../../utils/navigationList"

const Sidebar = ({
  setMenuSidebar,
  setTabs,
  selected,
  setSelected,
  openModal,
  menuSidebar,
  isChecked,
  setIsChecked
}) => {
  const menuItem = "Personal profile"
  return (
    <div
      className={`sm:w-[20%] w-full sm:block h-full border border-[#EBF0FF] bg-[#EBF0FF] ${openModal ? "" : "hidden"}`}
    >
      <ul className='w-full list-none flex flex-col items-center justify-start gap-8 mt-4 py-8 px-4'>
        {navigationList.map((item, index) => (
          <li key={index} className='w-full flex flex-col items-center justify-start rounded-md gap-2 truncate'>
            <div
              className={`w-full flex flex-row items-center justify-start text-[16px] font-normal hover:bg-white rounded-md px-2 py-4 gap-2 truncate ${
                selected === index ? "text-red-500" : "text-black"
              }`}
            >
              {item.icon}
              {menuItem.toLowerCase().toString().includes(item.title.toLowerCase().toString()) ? (
                <Link
                  to={`/dashboard/${item.path}`}
                  onClick={() => {
                    setTabs(null)
                    setMenuSidebar(`${item.title}`)
                    setSelected(index)
                  }}
                >
                  {item.title}
                </Link>
              ) : (
                <Link
                  to={`/dashboard/${item.path}`}
                  onClick={() => {
                    setTabs(item.children)
                    setMenuSidebar(`${item.title}`)
                    setSelected(index)
                  }}
                >
                  {item.title}
                </Link>
              )}
            </div>
            {menuItem.toLowerCase().toString().includes(menuSidebar.toLowerCase().toString()) && index === 3 && (
              <ul className='w-full list-none flex flex-col items-center justify-start gap-8 py-1 pl-4'>
                {item.children.map((subItem, i) => (
                  <li key={i} className='w-full flex flex-row items-center justify-start'>
                    <Link
                      className='w-full flex flex-row items-center justify-start text-[16px] font-normal gap-2'
                      to={`/dashboard/personal-profile/${subItem.path}`}
                      onClick={() => {
                        setIsChecked(i)
                      }}
                    >
                      <input className='size-4' type='radio' checked={isChecked === i ? true : false} />
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
