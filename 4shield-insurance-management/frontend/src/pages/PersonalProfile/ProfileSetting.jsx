import { useState } from "react"
import { handleFormCheck } from "../../utils/validateForm"

function ProfileSetting() {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [errorOldPassword, setErrorOldPassword] = useState("")
  const [errorNewPassword, setErrorNewPassword] = useState("")
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("")

  const handleOldPasswordChecking = () => {
    const result = handleFormCheck(oldPassword)
    console.log("result: ", result)
    if (result) {
      setErrorOldPassword(result)
    } else {
      setErrorOldPassword()
    }
  }

  const handleConfirmPasswordChecking = () => {
    const result = handleFormCheck(confirmPassword)
    console.log("result: ", result)
    if (result) {
      setErrorConfirmPassword(result)
    } else {
      setErrorConfirmPassword()
    }
  }

  const handleNewPasswordChecking = () => {
    const result = handleFormCheck(newPassword)
    console.log("result: ", result)
    if (result) {
      setErrorNewPassword(result)
    } else {
      setErrorNewPassword()
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const formData = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword
    }
    console.log("formData: ", formData)
  }
  return (
    <div className='z-10 w-[80%] flex flex-col items-start justify-start py-4 gap-8'>
      <form className='sm:w-[80%] w-full flex flex-col items-center justify-start py-8 gap-8' onSubmit={handleLogin}>
        <div className='w-full flex flex-col gap-3'>
          <div
            className={`w-full flex sm:flex-row flex-col sm:justify-between justify-center sm:gap-0 gap-2 ${
              errorOldPassword ? "items-start" : "sm:items-center items-start"
            }`}
          >
            <label className='text-[18px] text-black font-normal'>Old - password</label>
            <div className='sm:w-[70%] w-full flex flex-col items-start justify-center gap-2'>
              <input
                className='w-full text-[13px] text-start text-black font-normal focus:bg-[#fff9f9] border border-slate-600 shadow-sm shadow-slate-500 py-1 px-3'
                type='password'
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                onBlur={handleOldPasswordChecking}
              />
              {errorOldPassword !== null && (
                <span className='text-[11px] text-red-500 font-normal'>{errorOldPassword}</span>
              )}
            </div>
          </div>
          <div
            className={`w-full flex sm:flex-row flex-col sm:justify-between justify-center sm:gap-0 gap-2 ${
              errorNewPassword ? "items-start" : "sm:items-center items-start"
            }`}
          >
            <label className='text-[18px] text-black font-normal'>New - password</label>
            <div className='sm:w-[70%] w-full flex flex-col items-start justify-center gap-2'>
              <input
                className='w-full text-[13px] text-start text-black font-normal focus:bg-[#fff9f9] border border-slate-600 shadow-sm shadow-slate-500 py-1 px-3'
                type='password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                onBlur={handleNewPasswordChecking}
              />
              {errorNewPassword !== null && (
                <span className='text-[11px] text-red-500 font-normal'>{errorNewPassword}</span>
              )}
            </div>
          </div>
          <div
            className={`w-full flex sm:flex-row flex-col sm:justify-between justify-center sm:gap-0 gap-2 ${
              errorConfirmPassword ? "items-start" : "sm:items-center items-start"
            }`}
          >
            <label className='text-[18px] text-black font-normal'>Confirm password</label>
            <div className='sm:w-[70%] w-full flex flex-col items-start justify-center gap-2'>
              <input
                className='w-full text-[13px] text-start text-black font-normal focus:bg-[#fff9f9] border border-slate-600 shadow-sm shadow-slate-500 py-1 px-3'
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={handleConfirmPasswordChecking}
              />
              {errorConfirmPassword !== null && (
                <span className='text-[11px] text-red-500 font-normal'>{errorConfirmPassword}</span>
              )}
            </div>
          </div>
        </div>
        <button
          className='rounded-sm hover:bg-[#e49c9c] border-[2px] border-[#e49c9c] text-black font-bold active:shadow-sm active:shadow-slate-400 cursor-pointer px-4 py-1 mb-4'
          type='submit'
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default ProfileSetting
