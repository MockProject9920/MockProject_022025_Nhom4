import { Outlet } from "react-router-dom"

import HomeIcon from "@mui/icons-material/Home"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"
import CloseIcon from "@mui/icons-material/Close"
import { BreadCrumb } from "../components/UI"
import { Header, Sidebar, Tabbar } from "../components/Layout"
import { useState } from "react"

const DashboardLayout = () => {
  const [menuSidebar, setMenuSidebar] = useState("Register for insurance")
  const [tabbar, setTabbar] = useState("Asset information")
  const [underline, setUnderline] = useState(0)
  const [selected, setSelected] = useState(0)
  const [openModal, setOpenModal] = useState(true)
  const [isChecked, setIsChecked] = useState(0)
  const [tabs, setTabs] = useState([
    {
      title: "Asset information",
      path: "asset-info"
    },
    {
      title: "Personal information",
      path: "personal-info"
    },
    {
      title: "Payment information",
      path: "payment-info"
    },
    {
      title: "Insurance list",
      path: "insurance-list"
    }
  ])

  const breadcrumbs = [
    {
      url: "/",
      label: "Trang chủ",
      prefixIcon: () => <HomeIcon />
    },
    {
      url: "/insurance",
      label: menuSidebar
    },
    {
      url: "/insurance/info",
      label: tabbar
    }
  ]
  return (
    <div className='relative min-h-screen flex flex-col justify-start items-center shadow-sm shadow-slate-500'>
      <Header />
      <div className='z-10 absolute top-0 left-0 w-full h-full flex flex-row items-start justify-start gap-2 pt-20'>
        <Sidebar
          setTabs={setTabs}
          setMenuSidebar={setMenuSidebar}
          selected={selected}
          setSelected={setSelected}
          menuSidebar={menuSidebar}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <div className='sm:w-[80%] w-full h-full flex flex-col items-center justify-start gap-2 px-2'>
          <div className='w-full flex flex-row items-center justify-between gap-2'>
            <BreadCrumb breadcrumbs={breadcrumbs} currentUrl={"/"} />
            <span onClick={() => setOpenModal(!openModal)} className='sm:hidden'>
              <MenuOpenIcon className='text-black text-[14px] text-2xl' />
            </span>
          </div>
          <Tabbar
            setTabbar={setTabbar}
            tabs={tabs}
            underline={underline}
            setUnderline={setUnderline}
            menuSidebar={menuSidebar}
          />
          <div className='w-full h-[80vh] flex flex-col items-center justify-start gap-2'>
            <Outlet />
          </div>
        </div>
      </div>
      {/* Modal logic when responsive */}
      <div className={`z-20 absolute top-0 right-0 w-full h-full bg-[#00000045] ${openModal ? "" : "hidden"}`}>
        <button
          onClick={() => setOpenModal(!openModal)}
          className='absolute top-2 left-2 text-[14px] text-red-500 hover:bg-red-500 hover:text-white font-bold'
        >
          <CloseIcon />
        </button>
        <div className='absolute top-0 right-0 w-3/4 h-full flex flex-col items-center justify-start gap-8 bg-[#EBF0FF] py-4 px-2'>
          <h2 className='w-[15%] text-2xl sm:text-start text-center font-medium text-black'>Fourshield Insurance</h2>
          <Sidebar
            setTabs={setTabs}
            setMenuSidebar={setMenuSidebar}
            selected={selected}
            setSelected={setSelected}
            openModal={openModal}
            menuSidebar={menuSidebar}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
