const formatTime = seconds => {
  const time = Math.round(seconds)
  const mins = Math.floor(time / 60)
  const secs = time - mins * 60
  let zero = secs < 10 ? '0' : ''

  return `${mins}:${zero}${secs}`
}

export default formatTime
