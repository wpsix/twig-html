#! /usr/bin/env node

const fs = require('fs')
const program = require('commander')
const twig = require('twig').twig
const glob = require('glob')
const path = require('path')
const beautify = require('js-beautify').html
const pkgJSON = require('./package.json')

const render = (dir) => {
  const option = {
    ignore: ['node_modules/**']
  }

  glob(dir.source, option, (er, files) => {
    files.forEach(source => {
      const file = path.parse(source).base
      const output = path.normalize(dir.output + file)
      const dataSource = glob.sync(dir.data, [option])

      const obj = {}
      let data = ''
      let parsed = ''

      dataSource.forEach(file => {
        parsed = JSON.parse(fs.readFileSync(file))
        data = Object.assign(obj, parsed)
      })

      twig({
        path: source,
        load: template => {
          const content = template.render(data)

          fs.writeFileSync(output, beautify(content, { extra_liners: ' ', preserve_newlines: false }))

          console.log('created', output);
        }
      })
    })
  })
}

program
  .version(pkgJSON.version)
  .description(pkgJSON.description)
  .usage('--source [directory] --data [directory] --output [directory]')
  .option('-s, --source <directory>', 'define the data path [optional]')
  .option('-d, --data <path>', 'define the data path [optional]')
  .option('-o, --output <directory>', 'define the output directory')
  .action(render)
  .parse(process.argv)
