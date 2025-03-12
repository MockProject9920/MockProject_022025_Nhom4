/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BreadCrumb = ({ breadcrumbs, currentUrl }) => {
  return (
    <div className='flex sm:flex-row flex-col items-center justify-start sm:py-2 py-8'>
      {breadcrumbs.map((link, index) => (
        <div key={link.url} className='flex items-center'>
          {link.url === currentUrl ? (
            <span
              className={`text-base cursor-default font-medium mr-2 gap-3 flex dark:text-gray-600 dark:hover:text-slate-100 text-black hover:text-green-500`}
            >
              <Link href={`${link.url}`} className='cursor-default'>
                {link.prefixIcon && <link.prefixIcon />}
              </Link>
              <Link href={`${link.url}`} className='cursor-default'>
                {link.label}
              </Link>
            </span>
          ) : (
            <Link
              href={link.url}
              className='text-primary text-base cursor-pointer dark:text-gray-600 dark:hover:text-slate-100'
            >
              {link.prefixIcon && <link.prefixIcon />}
              <span className='font-medium mx-2'>{link.label}</span>
            </Link>
          )}
          {index !== breadcrumbs.length - 1 && (
            <span className={`text-s px-2 dark:text-gray-400 text-black`}>
              <ArrowForwardIosIcon />
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export default BreadCrumb
