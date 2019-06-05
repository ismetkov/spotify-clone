export default function(email) {
  const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const invalidEmail = re.test(String(email).toLowerCase())

  if (!invalidEmail) return 'Email invalid'

  return
}
