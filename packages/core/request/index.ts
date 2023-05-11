import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'

interface BaseResponse<T = unknown> {
  code: number
  success: boolean
  data: T
  msg: string
}

interface expandRequestConfig {
  toast?: boolean
}

const axiosInstance = axios.create({
  baseURL: 'your should reset the baseUrl',
  timeout: 1000 * 60 * 5,
})

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<BaseResponse>) => {
    const { data } = response
    if (data.code != null && data.code !== 200) {
      // TODO: 网络错误UI提示
      // let errorMsg = '服务器异常'
      // if (data.msg != null && data.msg !== '') errorMsg = data.msg
      return Promise.reject(new Error(`code:${data.code}`))
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)
// T 为返回data的实际类型 D是若传参data的类型
const request = <T = any, D = any>(
  configParam: AxiosRequestConfig<D> & expandRequestConfig,
): Promise<BaseResponse<T>> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .request<BaseResponse<T>, AxiosResponse<BaseResponse<T>>>(configParam)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export default request
