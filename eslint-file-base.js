const prettierConfig = require('./prettierrc.js')

module.exports = {
  extends: ['./base.js'],
  rules: {
    'prettier/prettier': ['error', prettierConfig]
  }
}
