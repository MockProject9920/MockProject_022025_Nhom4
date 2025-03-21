import { useState } from "react"
import { handleFormCheck, handleValidEmail } from "../../utils/validateForm"

const PersonalInformation = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [cardId, setCardId] = useState("")
  const [phone, setPhone] = useState("")

  const [errorUsername, setErrorUsername] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorCardId, setErrorCardId] = useState("")

  const handleUsernameChecking = () => {
    const result = handleFormCheck(username)
    console.log("result: ", result)
    if (result) {
      setErrorUsername(result)
    } else {
      setErrorUsername()
    }
  }

  const handleCardIdChecking = () => {
    const result = handleFormCheck(cardId)
    console.log("result: ", result)
    if (result) {
      setErrorCardId(result)
    } else {
      setErrorCardId()
    }
  }

  const handleEmailChecking = () => {
    const result = handleFormCheck(email)
    console.log("result: ", result)
    if (result) {
      setErrorEmail(result)
    } else {
      const isValidEmail = handleValidEmail(email)
      if (isValidEmail) {
        setErrorEmail("Email must be correct the email address.")
      } else {
        setErrorEmail()
      }
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const formData = {
      username: username,
      email: email,
      cardId: cardId,
      phone: phone
    }
    console.log("formData: ", formData)
  }

  return (
    <div className='z-10 w-[80%] flex flex-col items-start justify-start py-4 gap-8'>
      <p className='text-[16px] text-black font-normal'>Enter owner information</p>
      <form className='sm:w-[80%] w-full flex flex-col items-end justify-start gap-8' onSubmit={handleLogin}>
        <div className='w-full flex flex-col gap-3'>
          <div
            className={`w-full flex sm:flex-row flex-col sm:justify-between justify-center sm:gap-0 gap-2 ${
              errorUsername ? "items-start" : "sm:items-center items-start"
            }`}
          >
            <label className='text-[18px] text-black font-normal'>Full name</label>
            <div className='sm:w-[70%] w-full flex flex-col items-start justify-center gap-2'>
              <input
                className='w-full text-[13px] text-start text-black font-normal focus:bg-[#fff9f9] border border-slate-600 shadow-sm shadow-slate-500 py-1 px-3'
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={handleUsernameChecking}
              />
              {errorUsername !== null && <span className='text-[11px] text-red-500 font-normal'>{errorUsername}</span>}
            </div>
          </div>
          <div
            className={`w-full flex sm:flex-row flex-col sm:justify-between justify-center sm:gap-0 gap-2 ${
              errorCardId ? "items-start" : "sm:items-center items-start"
            }`}
          >
            <label className='text-[18px] text-black font-normal'>ID card/CCCD number</label>
            <div className='sm:w-[70%] w-full flex flex-col items-start justify-center gap-2'>
              <input
                className='w-full text-[13px] text-start text-black font-normal focus:bg-[#fff9f9] border border-slate-600 shadow-sm shadow-slate-500 py-1 px-3'
                type='text'
                value={cardId}
                onChange={(e) => setCardId(e.target.value)}
                onBlur={handleCardIdChecking}
              />
              {errorCardId !== null && <span className='text-[11px] text-red-500 font-normal'>{errorCardId}</span>}
            </div>
          </div>
          <div
            className={`w-full flex sm:flex-row flex-col sm:justify-between justify-center sm:gap-0 gap-2 ${
              errorUsername ? "items-start" : "sm:items-center items-start"
            }`}
          >
            <label className='text-[18px] text-black font-normal'>Phone number</label>
            <div className='sm:w-[70%] w-full flex flex-col items-start justify-center gap-2'>
              <input
                className='w-full text-[13px] text-start text-black font-normal focus:bg-[#fff9f9] border border-slate-600 shadow-sm shadow-slate-500 py-1 px-3'
                type='text'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div
            className={`w-full flex sm:flex-row flex-col sm:justify-between justify-center sm:gap-0 gap-2 ${
              errorEmail ? "items-start" : "sm:items-center items-start"
            }`}
          >
            <label className='text-[18px] text-black font-normal'>Email</label>
            <div className='sm:w-[70%] w-full flex flex-col items-start justify-center gap-2'>
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
        </div>
        <button
          className='rounded-md bg-[#e29797] hover:bg-[#e49c9c] text-black font-bold active:shadow-sm active:shadow-slate-400 cursor-pointer px-4 py-1 mb-4'
          type='submit'
        >
          Continue
        </button>
      </form>
    </div>
  )
}

export default PersonalInformation
