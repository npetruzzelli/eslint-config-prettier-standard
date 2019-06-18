// Legacy "base" configuration
const baseConfig = require('../base.js')
const prettierConfig = require('../prettierrc.js')

module.exports = Object.assign({}, baseConfig, {
  rules: { 'prettier/prettier': ['error', prettierConfig] }
})
