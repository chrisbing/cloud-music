/**
 * Created by xujian1 on 2017/4/28.
 */

const axios = require('axios')

const net = axios.create({
    baseURL: 'http://music.163.com'
})

exports.getTopList = function getTopList() {
    return net.get('/api/playlist/detail?id=3779629')
}