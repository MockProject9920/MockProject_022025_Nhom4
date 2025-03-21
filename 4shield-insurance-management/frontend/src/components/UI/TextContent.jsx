/* eslint-disable react/prop-types */
const TextContent = ({ label, content }) => {
  return (
    <div className={`w-full flex flex-row justify-start items-center gap-2`}>
      <label className='text-[18px] text-black font-medium'>{label} : </label>
      <p className='text-[18px] text-black font-normal'>{content}</p>
    </div>
  )
}

export default TextContent
