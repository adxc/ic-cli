const chalk = require("chalk")
const download = require('download-git-repo')
const fs = require('fs')
module.exports = (project) =>{
    let projectCache = project+"Cache"
    let rep = "adxc/personTemplate"
    return new Promise((resolve,reject) =>{
        download(rep,projectCache,{clone:"true"},function(err){
           resolve(err)
        })
    })
}