const inquirer = require("inquirer")

//初始化项目模板
module.exports  = () =>{
    const questions = [{
        type: 'list',
        name: 'project',
        message: "项目场景",
        choices: ["PC端", "移动端"]
    },
    {
        type: 'list',
        name: 'nature',
        message: "项目用途",
        choices: ["工作项目", "个人项目"],
    },
    {
        type: 'list',
        name: 'frame',
        message: "初始加载框架",
        choices: ['layUI', 'WeUI', 'light7', 'none'],
        default:3,
    },
    {
        type: 'list',
        name: 'plugins',
        message: "初始加载插件(none)",
        choices: ["jquery",'zepto','none'],
        default:2,
    },
    {
        type:'input',
        name:'author',
        message:'项目作者',
    }
]
 return inquirer.prompt(questions)
}
