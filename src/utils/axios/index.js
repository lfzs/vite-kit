import Axios from 'axios'
import { handleRequest } from './interceptor/handleRequest'
import { handleRequestError } from './interceptor/handleRequestError'
import { handleResponse } from './interceptor/handleResponse'
import { handleResponseError } from './interceptor/handleResponseError'

const configDefault = {
  baseURL: import.meta.env.VITE_API_BASEURL,
  timeout: 60 * 1000,
}

function createAxios(config = configDefault) {
  const axios = Axios.create(config)
  axios.interceptors.request.use(handleRequest, handleRequestError)
  axios.interceptors.response.use(handleResponse, handleResponseError)
  return axios
}

const axios = createAxios()

export {
  createAxios,
  axios,
}
