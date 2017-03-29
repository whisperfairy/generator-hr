// /**
//  *
//  * hr.js 文件作用
//  * @author hurong<353486474@QQ.COM>
//  * @date 2017/3/29
//  *
//  * @内容 作用
//  * @内容 作用
//  */
const download=require('download-git-repo')//提供github下载功能
const chalk=require('chalk')//提供命令行颜色提示
const ora=require('ora')//异步控制台进度条
const tildify=require('tildify')//linux/mac下绝对路径简化
const cwd =tildify(process.cwd());
const logger = require('../lib/logger');
var program = require('commander')
const done = (err)=>{
    console.log(`finish ${err}`)
}
const initReactWebTemplate=(template)=>{
    var spinner = ora('downloading template')
    spinner.start()
    download(template, cwd, { clone: false }, function (err) {
        spinner.stop()
        if (err)
            logger.fatal('Failed to download repo ' + template + ': ' + err.message.trim())
    })
}
console.log('HR-React-starter');
program
    .version('0.0.1')
    .option('-i, --install [ProjectType]', 'install [项目类型]',/^(web|electron|hybrid)$/i,'web')
    .parse(process.argv);

switch (program.install)
{
    case 'web':{
        initReactWebTemplate('whisperfairy/react-starter-hr')
break;
    }
    default :{
        initReactWebTemplate('whisperfairy/react-starter-hr')
    }
}


// download('flipxfx/download-git-repo-fixture', 'test/tmp', function(err) {
//     if (err) return done(err);
//     done();
// });