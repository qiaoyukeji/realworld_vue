/*
 * @Descripttion:
 * @version:
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-10 22:11:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-10 22:17:51
 */
/**
 * 基于axios封装的请求模块
 */

import axios from "axios"

const request = axios.create({
    baseURL: 'https://conduit.productionready.io',//设置基础路径

})

export default request;