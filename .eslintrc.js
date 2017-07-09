const _ = { merge: require('lodash.merge') }
const prettierConfig = _.merge(
  {},
  require('./lib/base').rules['prettier/prettier'][1]
)

module.exports = {
  extends: [
    './lib/prettier-standard.js'
  ],
  overrides: [
    {
      files: [
        'lib/**/*.js'
      ],
      rules:{
        /* Force double quotes to make it easier to copy the source JavaScript into
         * JSON files
         */
        quotes: ['error', 'double'],
        'prettier/prettier': [
          'error',
          _.merge(
            {},
            prettierConfig,
            {
              'singleQuote': false
            }
          )
        ]
      }
    }
  ]
}
