import axios, { AxiosResponse } from 'axios'
const isServer = typeof window === 'undefined'
const baseURL = isServer ? process.env.NEXT_PUBLIC_API_URL : '/'

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
})

api.interceptors.request.use(async (config) => {
  if (isServer) {
    const { cookies } = await import('next/headers'),
      token = cookies().get('access_token')?.value

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
  } else {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    )

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
  }
  return config
})

const getUrl = (config: any) => {
  if (config?.baseURL) {
    return config?.url.replace(config?.baseURL, '')
  }
  return config?.url
}

api.interceptors.response.use(
  (response: AxiosResponse) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(
        `%c Response: ${response?.status} - ${getUrl(response?.config)}:`,
        'color: #008000; font-weight: bold',
        response,
      )
    }

    return response
  },
  (error: any) => {
    if (process.env.NODE_ENV !== 'production') {
      if (error?.response) {
        console.log('====== Server Error =====')
      } else if (error?.request) {
        console.log('====== Timeout =====')
      } else {
        console.log('====== Internal Server Error! =====')
      }
    }

    // console.log(
    //   `%c ${error?.response?.status} - ${getUrl(error?.response?.config)}:`,
    //   'color: #a71d5d; font-weight: bold',
    //   error?.response,
    // )
    throw error
  },
)

export default api
