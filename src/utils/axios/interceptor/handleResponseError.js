import Axios from 'axios'
import { REQUEST_CANCEL_RESPONSE } from '@/constants/common'

function handleResponseError(error) {
  // 请求取消
  if (Axios.isCancel(error)) {
    return Promise.reject(REQUEST_CANCEL_RESPONSE)
  }

  return Promise.reject(error)
}

export {
  handleResponseError,
}
