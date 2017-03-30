#!/usr/bin/env node
const download=require('download-git-repo')
const chalk=require('chalk')
const ora=require('ora')
const tildify=require('tildify')
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
if (program.install){
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
}