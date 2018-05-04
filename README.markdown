# eslint-config-prettier-standard

An ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs) for projects using **Prettier** and **JavaScript Standard Style** as ESLint rules.

## Installation

### One Line Installation

```
npm install --save-dev eslint-config-prettier-standard eslint eslint-config-prettier eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-prettier prettier
```

### Line By Line Installation

Install the peer dependencies:

```
npm install --save-dev eslint
npm install --save-dev eslint-config-prettier
npm install --save-dev eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
npm install --save-dev eslint-plugin-prettier prettier
```

Then install eslint-config-prettier-standard:

```
npm install --save-dev eslint-config-prettier-standard
```

<details>
<summary>Peer Dependencies</summary>

**eslint-config-prettier-standard** has three peer dependencies ([**eslint-config-prettier**](https://github.com/prettier/eslint-config-prettier), [**eslint-config-standard**](https://github.com/standard/eslint-config-standard) and [**eslint-plugin-prettier**](https://github.com/prettier/eslint-plugin-prettier)). Each of which have their own peer dependencies.

| Descendant `peerDependency` | depended upon by         |
| --------------------------- | ------------------------ |
| **eslint**                  | _everything!_            |
| **eslint-plugin-import**    | • eslint-config-standard |
| **eslint-plugin-node**      | • eslint-config-standard |
| **eslint-plugin-promise**   | • eslint-config-standard |
| **eslint-plugin-standard**  | • eslint-config-standard |
| **prettier**                | • eslint-plugin-prettier |

</details>

## Setup

Once you've finished installation, add eslint-config-prettier-standard to the "extends" array in your `.eslintrc.*` file. Make sure to put it last, so that it gets the chance to override other configs.


```json
{
  "extends": [
    "prettier-standard"
  ]
}
```

If you are making a custom configuration that absolutely must extend a different configuration between Standard and Prettier, you can extend the base configuration instead.

```json
{
  "extends": [
    "prettier-standard/lib/base",
    "foo",
    "bar",
    "prettier",
    "prettier/standard"
  ]
}
```

## Extending Prettier

Prettier is a single rule, so the entire configuration object gets overridden when you extend `prettier/prettier`. See [**eslint-plugin-prettier**](https://github.com/prettier/eslint-plugin-prettier) to see a complete list of options available to you. Any options you don't provide will fallback to the plugin's defaults for that option.

You will have to redefine all Prettier options if you want to change any part of Prettier until if/when the plugin supports individual rules.

<details>
<summary>Hypothetical Example</summary>

If the plugin were to support multiple rules in the future, they might look like this:

-   `prettier/bracketSpacing`
-   `prettier/jsxBracketSameLine`
-   `prettier/printWidth`
-   `prettier/semi`
-   `prettier/singleQuote`
-   `prettier/tabWidth`
-   `prettier/trailingComma`
-   `prettier/useTabs`

</details>

## "BSD-3-Clause" License

-   [LICENSE](LICENSE)
-   <https://spdx.org/licenses/BSD-3-Clause.html>
-   <https://choosealicense.com/licenses/bsd-3-clause/>
