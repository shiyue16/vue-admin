/**
 * Created by zhangyupeng on 18/12/5.
 **/
import axios from '@/utils/axios'

/**
 * @param {Number} phone // 账号
 * @param {Number||String} password // 密码
 * */
export const login = (params) => {
  return axios.post('/user/login', {...params})
}

/**
 * table列表
 * */
export const tableList = () => {
  return axios.get('api/tableList')
}

/**
 * 添加list
 * @param {String} name // 姓名
 * @param {String} age // 年龄
 * @param {String} sex // 性别
 * @param {String} interest // 兴趣
 * @param {String} addres // 地址
 * @param {String} brithday // 生日
 * */
export const addTableList = (params = {}) => {
  return axios.post('api/addTableList', {...params})
}

/**
 * 修改list
 * @param {String} id
 * @param {String} name // 姓名
 * @param {String} age // 年龄
 * @param {String} sex // 性别
 * @param {String} interest // 兴趣
 * @param {String} addres // 地址
 * @param {String} brithday // 生日
 * */
export const editTableList = (params = {}) => {
  return axios.post('api/editTableList', {...params})
}

/**
 * 删除list某一项
 * @param {String} id
 * */
export const removeTableList = (params) => {
  return axios.get('api/removeTableList', {...params})
}

// 所需接口从此文件抛出，接口统一化
