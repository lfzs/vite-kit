function sleep(millisecond) {
  return new Promise(resolve => setTimeout(resolve, millisecond))
}

export {
  sleep,
}
