const endConfig = require('../end')
const extendsConfig = ['./base.js'].concat(endConfig.extends)

// Legacy Configuration
module.exports = {
  extends: extendsConfig
}
