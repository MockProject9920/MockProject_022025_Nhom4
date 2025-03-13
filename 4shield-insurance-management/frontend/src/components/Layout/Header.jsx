import HomeIcon from "@mui/icons-material/Home"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"

const Header = () => {
  return (
    <div className='z-20 w-full flex sm:flex-row flex-col items-center justify-between sm:gap-0 gap-4 bg-white py-2 px-4'>
      <h2 className='sm:w-[15%] w-full text-2xl sm:text-start text-center font-medium text-black'>Fourshield Insurance</h2>
      <input
        className='sm:block hidden w-[50%] text-[14px] text-black font-normal border border-slate-700 rounded-md px-2 py-2'
        type='search'
        name=''
        id=''
        placeholder='Search'
      />
      <div className='sm:w-[25%] w-full flex items-center justify-center gap-6'>
        <p className='text-[16px] text-black font-medium'>
          <HomeIcon /> Home
        </p>
        <p className='text-[16px] text-black font-medium'>
          <SupportAgentIcon /> Customer
        </p>
      </div>
    </div>
  )
}

export default Header
