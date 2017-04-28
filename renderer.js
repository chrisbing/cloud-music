// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const fs = require('fs')
const Vue = require('vue/dist/vue.common')
const { getTopList } = require('./src/network')

new Vue({
    el: '#main',
    data(){
        return {
            files: [],
            index: 0,
            topList: []
        }
    },
    created(){
        fs.readdir('./', 'utf-8', (err, files) => {
            this.files = files
        })

        getTopList().then(({ data }) => {
            if (data.code === 200) {
                this.topList = data.result.tracks
            }
        })
    }
})