import axios from 'axios'
import qs from 'qs'
import vue from 'vue'
import {Loading} from 'element-ui'

const request = (url, body, type = 'get', isJson = false) => {
  const loadingInstance = Loading.service({
    lock: true,
    background: 'rgba(0, 0, 0, 0.7)'
  })
  const query = {
    url: `${url}`,
    method: type,
    withCredentials: true,
    timeout: 30000
  }
  if (type === 'get') {
    query.params = body
  } else {
    query.data = isJson ? body : qs.stringify(body)
  }
  return axios.request(query)
    .then(res => {
      return new Promise((resolve, reject) => {
        if (!res.data) {
          reject(new Error('服务器响应超时'))
          return
        }
        if (res.data.status === 0) {
          resolve(res.data.re)
        } else {
          res.data.message = res.data.msg
          reject(res.data)
        }
      })
    })
    .catch(e => {
      vue.prototype.$message.error(e && e.message ? e.message : '系统错误')
      return Promise.reject(e)
    }).finally(() => {
      loadingInstance.close()
    })
}

export const userlists = {
  getMyUserList: body => request('/duan/queryUserList.do_', body, 'get'),
  addMyUser: body => request('/duan/adduser.do_', body, 'post'),
  updateMyUser: body => request('/duan/update.do_', body, 'post'),
  deleteMyUser: body => request('/duan/delete.do_', body, 'get')
}
