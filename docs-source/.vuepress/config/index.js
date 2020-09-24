const themeNine = require('./theme/')

const sidebar = require('./sidebar/')
const locales = require('./locales/')
console.log(themeNine, sidebar, locales)
module.exports = Object.assign({}, themeNine, {
  sidebar,
  locales
})
