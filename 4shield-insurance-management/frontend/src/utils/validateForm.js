/* eslint-disable no-useless-escape */
// Validate form
// const handleFormCheck = (value) => {
//   if (value === "") {
//     return "This field is not blank"
//   } else {
//     return ""
//   }
// }

function handleValidEmail(email) {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  if (!isValidEmail) {
    return true
  } else {
    return false
  }
}

function handleFormCheck(error, value) {
  if (value === "") {
    error = "This field is not blank"
  } else {
    error = ""
  }
  return error
}

export { handleFormCheck, handleValidEmail }