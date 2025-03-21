import { useState } from "react"
import { handleFormCheck, handleValidEmail } from "../../utils/validateForm"
import { Link } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")

  let error = ""

  const handleEmailChecking = () => {
    const result = handleFormCheck(error, email)
    console.log("result: ", result)
    if (result) {
      setErrorEmail(result)
    } else {
      const isValidEmail = handleValidEmail(email)
      if (isValidEmail) {
        setErrorEmail("Email must be correct the email address.")
      }
    }
  }

  const handlePasswordChecking = () => {
    const result = handleFormCheck(error, password)
    console.log("result: ", result)
    if (result) {
      setErrorPassword(result)
    } else {
      setErrorPassword()
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const formData = {
      email: email,
      password: password
    }
    console.log("formData: ", formData)
  }

  return (
    <>
      <form className='w-[60%] flex flex-col items-center justify-start gap-8' onSubmit={handleLogin}>
        <h2 className='text-2xl font-medium text-black'>Login Here</h2>
        <div className='w-full flex flex-col gap-3'>
          <div className={`w-full flex flex-row justify-between ${errorEmail ? "items-start" : "items-center"}`}>
            <label className='text-[14px] text-black font-medium'>Email</label>
            <div className='w-[70%] flex flex-col items-start justify-center gap-2'>
              <input
                className='w-full text-[13px] text-start text-black font-normal focus:bg-[#fff9f9] border border-slate-600 shadow-sm shadow-slate-500 py-1 px-3'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailChecking}
              />
              {errorEmail !== null && <span className='text-[11px] text-red-500 font-normal'>{errorEmail}</span>}
            </div>
          </div>
          <div className={`w-full flex flex-row justify-between ${errorPassword ? "items-start" : "items-center"}`}>
            <label className='text-[14px] text-black font-medium'>Password</label>
            <div className='w-[70%] flex flex-col items-start justify-center gap-2'>
              <input
                className='w-full text-[13px] text-start text-black font-normal focus:bg-[#fff9f9] border border-slate-600 shadow-sm shadow-slate-500 py-1 px-3'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handlePasswordChecking}
              />
              {errorPassword !== null && <span className='text-[11px] text-red-500 font-normal'>{errorPassword}</span>}
            </div>
          </div>
        </div>
        <div className='w-full flex flex-row justify-between'>
          <div className='w-1/2 flex items-center justify-start gap-2'>
            <input className='size-4 border border-black' type='checkbox' name='' id='' />
            <p className='text-[13px] text-black font-normal'>Remember me</p>
          </div>
          <p className='text-[13px] text-black font-normal'>
            <Link to={"/#"}>Forgot password ?</Link>
          </p>
        </div>
        <button
          className='w-full rounded-sm bg-[#e29797] hover:bg-[#e49c9c] text-black font-bold active:shadow-sm active:shadow-slate-400 cursor-pointer py-1'
          type='submit'
        >
          Login
        </button>
      </form>
      <div className='w-2/3 flex flex-row items-center justify-around my-3'>
        <p className='text-[14px] text-black font-normal'>To register new account</p>
        <button
          className='w-1/4 rounded-sm text-black font-bold border border-slate-600 active:shadow-sm active:shadow-slate-400 cursor-pointer'
          type='submit'
        >
          <Link to={"/auth/register"}> Click here!</Link>
        </button>
      </div>
    </>
  )
}

export default Login
