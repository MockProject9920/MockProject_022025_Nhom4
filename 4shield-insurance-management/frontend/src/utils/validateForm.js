/* eslint-disable no-useless-escape */
function handleFormCheck(error, value) {
  if (value === "") {
    error = "This field is not blank"
  } else {
    error = ""
  }
  return error
}

function handleValidEmail(email) {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
  if (!isValidEmail) {
    return true
  } else {
    return false
  }
}

export { handleFormCheck, handleValidEmail }
