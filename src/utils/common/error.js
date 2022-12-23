// 从 response 中获取 message
function getErrorMessage(response) {
  return response?.message ?? ''
}

export {
  getErrorMessage,
}
