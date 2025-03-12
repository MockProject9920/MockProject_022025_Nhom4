/* eslint-disable react/prop-types */
export const Selection = ({ title, value, setValue, array }) => {
  return (
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className='border hover:bg-[#fff9f9] border-slate-600 px-1'
    >
      <option className='text-[12px] text-center text-black font-normal'>{title}</option>
      {array.map((item, index) => (
        <option key={index} className='text-[12px] text-center text-black font-normal line-clamp-2' value={`${item.value}`}>
          {item.title}
        </option>
      ))}
    </select>
  )
}
