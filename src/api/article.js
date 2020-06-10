/*
 * @Descripttion:
 * @version:
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-10 22:14:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-10 22:14:08
 */
/**
 * 文章相关的请求模块
 */
import request from "../utils/requset"

export const getArticles = () => {
    return request({
        method: 'GET',//请求方法
        url: '/api/articles'//请求路径
    })
}