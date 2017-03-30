#!/usr/bin/env node
const program = require('commander');
const download= require('download-git-repo')
const path = require('path')
const ora = require('ora')
const tildify=require('tildify')
const logger = require('../lib/logger');
let defaultProjectName = '';
const initReactWebTemplate = (template) => {
    var spinner = ora('downloading template')
    spinner.start()
    download(template,path.resolve(process.cwd(),defaultProjectName), { clone: false }, function (err) {
        spinner.stop()
        if (err)
            logger.fatal('Failed to download repo ' + template + ': ' + err.message.trim())
    })

}
program
    .version('0.0.1')
    .usage('init [project-name]')
    .option('-t, --Type [ProjectType]', 'install [项目类型]', /^(web|electron|hybrid)$/i, 'web')
    .parse(process.argv);
switch (program.args[0]) {
    case 'init': {
        if (program.args[1]) {
            defaultProjectName = program.args[1];
            console.log(path.resolve(process.cwd(),defaultProjectName));
        }
        if (program.Type) {
            switch (program.Type) {
                case 'web': {
                    initReactWebTemplate('whisperfairy/react-starter-hr')
                    break;
                }
                default : {
                    console.log('hello world')
                }
            }
        }
        break;
    }
    default :{
        program.help()
    }
}