const fs = require('fs')
const chalk = require('chalk')
const path = require("path")

module.exports = {
    isLocalProject(project) {
        try {
            fs.accessSync(project)
        } catch (err) {
            fs.mkdir(project, err => {})
            return true
        }
        return false
    },
    createLocalTemplate(dir, template) {
        dir = dir + "Cache"
        createTemplateCache(dir, template)
    },
    deleteCaCheTemplate(dir){
        dir = dir + "Cache"
        deleteTemplateCache(dir)
    }
}
function deleteTemplateCache(dir){

}
function createTemplateCache(dir, template) {
    fs.readdir(dir, (err, files) => {
        if (err) return err
        files.forEach(file => {
            let filePath = path.join(dir, file)
            fs.stat(filePath, (err, stats) => {
                if (stats.isDirectory()) {
                    let dirPath = filePath.replace(/\w*Cache/g, template)
                    fs.mkdir(dirPath, err => {
                        console.log(`创建${file}文件夹`)
                    })
                    createTemplateCache(filePath)
                } else if (stats.isFile()) {
                    let copyFilePath = filePath.replace(/\w*Cache/g, template)
                    fs.copyFile(filePath, copyFilePath, err => {
                        console.log(`创建${file}文件`)
                    })
                } else {
                    return err
                }
            })
        })
    })
}
