/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
const Tabbar = ({ setTabbar, tabs, underline, setUnderline, menuSidebar }) => {
  return (
    <div
      className={`w-full h-[5vh] flex flex-row items-center justify-around gap-4 py-2 border-b-2 border-b-slate-500 ${
        menuSidebar.toLowerCase().toString().includes("personal profile") && "hidden"
      }`}
    >
      {tabs &&
        tabs.map((item, index) => (
          <p
            key={index}
            className={`text-[16px] text-black font-normal truncate ${
              underline === index ? "font-bold underline underline-offset-4" : ""
            }`}
          >
            <Link
              to={`/dashboard/insurance/${item.path}`}
              onClick={() => {
                setTabbar("Asset information")
                setUnderline(index)
              }}
            >
              {item.title}
            </Link>
          </p>
        ))}
    </div>
  )
}

export default Tabbar
