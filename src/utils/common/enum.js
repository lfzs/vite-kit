function createEnum(obj = {}) {
  for (const key of Object.keys(obj)) {
    obj[obj[key]] = key
  }
  return obj
}

export {
  createEnum,
}
