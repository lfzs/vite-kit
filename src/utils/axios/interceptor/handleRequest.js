import Axios from 'axios'

// 通过参入 sign 参数，自动取消重复的请求
const autoCancelRequestBySign = (() => {
  const sourceMap = new Map()
  return (request) => {
    const { sign } = request
    if (sign) {
      sourceMap.get(sign)?.cancel()

      const source = Axios.CancelToken.source()
      request.cancelToken = source.token // 请求添加 token 才可以取消
      // request.source = source
      sourceMap.set(sign, source)
    }
  }
})()

function handleRequest(request) {
  autoCancelRequestBySign(request)
  return request
}

export {
  handleRequest,
}
