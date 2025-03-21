import { TextContent } from "../../components/UI"
import { profileInfo } from "../../utils/fake"

function ProfileInformation() {
  return (
    <div className='z-10 w-[80%] flex flex-col items-start justify-start py-4 gap-8'>
      <TextContent label='Old - password' content={profileInfo.fullName} />
      <TextContent label='Picture profile' content={profileInfo.pictureProfile} />
      <TextContent label='Date of Birth' content={profileInfo.dateOfBirth} />
      <TextContent label='Gender' content={profileInfo.gender} />
      <TextContent label='Phone number' content={profileInfo.phone} />
      <TextContent label='Email address' content={profileInfo.email} />
      <TextContent label='Residential address' content={profileInfo.residentialAddress} />
      <TextContent label='Citizen identification' content={profileInfo.citizenIdentification} />
      {/* Change button */}
      <div className='w-1/2 flex flex-row justify-center'>
        <button
          className='rounded-md bg-[#e49c9c] hover:bg-[#e49c9c] border-[2px] border-slate-400 text-black font-bold active:shadow-sm active:shadow-slate-400 cursor-pointer px-4 py-1 mb-4'
          type='submit'
        >
          Change
        </button>
      </div>
    </div>
  )
}

export default ProfileInformation
