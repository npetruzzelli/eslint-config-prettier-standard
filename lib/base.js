module.exports = {
  plugins: ["prettier"],
  extends: ["standard"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true,
        jsxBracketSameLine: true,
        printWidth: 80,
        semi: false,

        /* `singleQuote: true`
         * IN PRETTIER IS SIMILAR TO THE ESLINT RULE:
         * `quotes: [error, single, { avoidEscape: true }],`
         */
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "none",
        useTabs: false
      }
    ]
  }
}
