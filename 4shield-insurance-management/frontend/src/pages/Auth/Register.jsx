import { useState } from "react"
import { handleFormCheck, handleValidEmail } from "../../utils/validateForm"
import { Selection } from "../../components/UI/index"
import { cities, countries, days, months, years } from "../../utils/fake"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [phone, setPhone] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [id, setId] = useState("")
  const [address, setAddress] = useState("")
  const [country, setCountry] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [gender, setGender] = useState({
    male: false,
    female: false
  })

  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [errorUsername, setErrorUsername] = useState("")

  let error = ""

  const handleLogin = (e) => {
    e.preventDefault()
    const formData = {
      username: username,
      email: email,
      password: password,
      rePassword: rePassword,
      phone: phone,
      dob: `${day} - ${month} - ${year}`,
      gender: gender,
      id: id,
      address: address
    }
    console.log("formData: ", formData)
  }

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

  const handleUsernameChecking = () => {
    const result = handleFormCheck(error, username)
    console.log("result: ", result)
    if (result) {
      setErrorUsername(result)
    } else {
      setErrorUsername()
    }
  }

  const handleChange = (e) => {
    const { name, checked } = e.target
    setGender((prevValues) => ({
      ...prevValues,
      [name]: checked
    }))
  }

  return (
    <>
      <form className='w-[80%] flex flex-col items-center justify-start gap-8' onSubmit={handleLogin}>
        <h2 className='text-2xl font-medium text-black'>Register</h2>
        <div className='w-full flex flex-col gap-3'>
          <div className={`w-full flex flex-row justify-between ${errorUsername ? "items-start" : "items-center"}`}>
            <label className='text-[14px] text-black font-medium'>Full name</label>
            <div className='w-[70%] flex flex-col items-start justify-center gap-2'>
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
          <div className='w-full flex flex-row items-center justify-between'>
            <label className='text-[14px] text-black font-medium'>Phone number</label>
            <input
              className='w-[70%] text-[13px] text-start text-black font-normal border border-slate-600 shadow-sm shadow-slate-500 py-1 px-3'
              type='text'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
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
          <div className='relative w-full flex flex-row items-center justify-between'>
            <label className='text-[14px] text-black font-medium'>Re-Password</label>
            <input
              className='w-[70%] text-[13px] text-start text-black font-normal border border-slate-600 shadow-sm shadow-slate-500 py-1 px-3'
              type='password'
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
          </div>
          <div className='relative w-full flex flex-row items-center justify-between'>
            <label className='text-[14px] text-black font-medium'>Date of Birth</label>
            <div className='w-[70%] flex flex-row items-center justify-start gap-4'>
              <Selection title={"Day"} array={days} value={day} setValue={setDay} />
              <Selection title={"Month"} array={months} value={month} setValue={setMonth} />
              <Selection title={"Year"} array={years} value={year} setValue={setYear} />
            </div>
          </div>
          <div className='relative w-full flex flex-row items-center justify-between gap-4'>
            <label className='text-[14px] text-black font-medium'>Gender</label>
            <div className='w-[70%] flex flex-row justify-start gap-4'>
              <div className='w-1/4 flex items-center justify-start gap-2'>
                <input
                  className='size-4 border border-black'
                  type='checkbox'
                  name='male'
                  value={gender.male}
                  onChange={handleChange}
                />
                <p className='text-[13px] text-black font-normal'>Male</p>
              </div>
              <div className='w-1/4 flex items-center justify-start gap-2'>
                <input
                  className='size-4 border border-black'
                  type='checkbox'
                  name='female'
                  value={gender.female}
                  onChange={handleChange}
                />
                <p className='text-[13px] text-black font-normal'>Female</p>
              </div>
            </div>
          </div>
          <div className='relative w-full flex flex-row items-center justify-between'>
            <label className='text-[14px] text-black font-medium'>ID-number</label>
            <input
              className='w-[70%] text-[13px] text-start text-black font-normal border border-slate-600 shadow-sm shadow-slate-500 py-1 px-3'
              type='text'
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className='relative w-full flex flex-row items-center justify-between'>
            <label className='text-[14px] text-black font-medium'>Address</label>
            {/* <div className='w-[70%] flex flex-row items-center justify-start gap-4'>
              <Selection title={"Country"} array={countries} value={country} setValue={setCountry} />
              <Selection title={"State"} array={days} value={state} setValue={setState} />
              <Selection title={"City"} array={cities} value={city} setValue={setCity} />
              <Selection title={"Zip code"} array={days} value={zipCode} setValue={setZipCode} />
            </div> */}
            <input
              className='w-[70%] text-[13px] text-start text-black font-normal border border-slate-600 shadow-sm shadow-slate-500 py-1 px-3'
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <button
          className='w-full rounded-sm bg-[#e29797] hover:bg-[#e49c9c] text-black font-bold active:shadow-sm active:shadow-slate-400 cursor-pointer py-1 mb-4'
          type='submit'
        >
          Register
        </button>
      </form>
    </>
  )
}

export default Register
