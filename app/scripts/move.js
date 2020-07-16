const fs = require('fs-extra')

function mover() {
  fs.copy('build/static', '../ext/static')
    .then(() => console.log('Moved static files'))
    .then(() => fs.copy('build', '../ext/src/browser_action'))
    .then(() => console.log('Moved HTML file'))
}

mover()
