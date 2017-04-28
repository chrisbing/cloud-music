// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const fs = require('fs')
const Vue = require('vue/dist/vue.common')


new Vue({
    el: '#main',
    data(){
        return {
            files: [],
            index: 0
        }
    },
    created(){
        fs.readdir('./', 'utf-8', (err, files) => {
            this.files = files
        })
    }
})