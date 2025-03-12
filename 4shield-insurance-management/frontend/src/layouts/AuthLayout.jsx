import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <div className='min-h-screen flex flex-row items-center justify-center'>
      <div className='relative w-2/3 h-[80vh] flex flex-col items-center justify-center shadow-sm shadow-slate-600 p-2'>
        <div className='absolute left-4 top-4 w-1/3'>
          <h2 className='text-2xl text-start font-medium text-black'>Fourshield Insurance</h2>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
