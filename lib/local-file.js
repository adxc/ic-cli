const fs = require('fs')
const chalk = require('chalk')

module.exports = {
    isLocalProject:function(project){
       try{
           fs.accessSync(project)
       }catch(err){
           return true
       }
       return false
    }
}