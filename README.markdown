# eslint-config-prettier-standard

An ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs)
for projects using **Prettier** and **JavaScript Standard Style** as ESLint
rules.

## Installation

These instructions assume that you've already installed ESLint
(`npm install --save-dev eslint`).

### Two Line Installation

```
npm install --save-dev eslint-config-prettier eslint-config-prettier-standard eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise prettier-config-standard
npm install --save-dev --save-exact prettier
```

### Line By Line Installation

Install the peer dependencies:

```
npm install --save-dev eslint-config-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
npm install --save-dev eslint-plugin-prettier eslint-config-prettier prettier-config-standard
npm install --save-dev --save-exact prettier
```

Then install eslint-config-prettier-standard:

```
npm install --save-dev eslint-config-prettier-standard
```

<details>
<summary>Peer Dependencies</summary>

**eslint-config-prettier-standard** has four peer dependencies: 
[**eslint-config-prettier**](https://github.com/prettier/eslint-config-prettier), 
[**eslint-config-standard**](https://github.com/standard/eslint-config-standard), 
[**eslint-plugin-prettier**](https://github.com/prettier/eslint-plugin-prettier), 
and [**prettier-config-standard**](https://github.com/npetruzzelli/prettier-config-standard). 
Some of which have their own peer dependencies.

| Descendant `peerDependency` | depended upon by         |
| --------------------------- | ------------------------ |
| **eslint**                  | _everything!_            |
| **eslint-plugin-import**    | • eslint-config-standard |
| **eslint-plugin-node**      | • eslint-config-standard |
| **eslint-plugin-promise**   | • eslint-config-standard |
| **prettier**                | • eslint-plugin-prettier |

</details>

## Usage

**Basic Use**

Once you've finished installation, add eslint-config-prettier-standard to the 
"extends" array in your ESLint configuration. Make sure to put it last, so that
it gets the chance to override other configs that could conflict with Prettier.

```json
{
  "extends": [
    "prettier-standard"
  ]
}
```

<details>
<summary>Advanced Use</summary>

### Extending The Base Configuration.

If you are making a custom configuration that absolutely must extend a different 
configuration between Standard and Prettier, you can extend the base 
configuration instead.

```json
{
  "extends": [
    "prettier-standard/eslint-file-base",
    "foo",
    "bar",
    "prettier-standard/end"
  ]
}
```

_`prettier-standard/eslint-file-base` is available for those configuring
Prettier through its own configuration files. See "Partial Configurations" for
possible options._

### Other Prettier Configurations

**eslint-config-prettier** comes with a number of additional configurations. To
use them, extend them after "prettier-standard".


```json
{
  "extends": [
    "prettier-standard",
    "prettier/flowtype",
    "prettier/react"
  ]
}
```

_These configurations disable rules provided by their respective plugins that
could conflict with Prettier. Configurations like this that are provided by
other modules should be placed after "prettier-standard" for consistent and
expect behavior._
</details>

## Available Configurations

There are two ways to use this configuration. Each option describes how or where
Prettier will be configured.


### `eslint-file`

**`prettier-standard/eslint-file`** is the default configuration, and it can be
referenced with just **`prettier-standard`**. It is effectively the same
configuration used by this configuration prior to version 3.

It combines the `prettier-standard/eslint-file-base` and `prettier-standard/end`
partial configurations to create a complete configuration.

```diff
    Prettier's configuration will be included in the ESLint configuration.
+   You don't need to worry about a seperate file or property for configuring Prettier
-   Extending Prettier options is a little more complex.
-   Prettier used for other file types (such as stylesheets or HTML) will need to be configured seperately.
```

```jsonc
{
  "extends": [
    "prettier-standard"
    
    // EFFECTIVELY THE SAME AS:
    // "prettier-standard/eslint-file"
  ]
}
```


### `prettier-file`

**`prettier-standard/prettier-file`** combines the 
`prettier-standard/prettier-file-base` and `prettier-standard/end` partial
configurations to create a complete configuration.

```diff
    Prettier is expected to be configured in its own file
+   Extending Prettier options is more simple.
+   Keeps multiple Prettier workflows consistent by configuring it in one location.
-   One additional file to setup
```

-   See Prettier's documentation on the 
    [Configuration File](https://prettier.io/docs/en/configuration.html) to
    learn more.
-   We expose a reference to the Prettier configuration for ease of 
    modification. See "partial configurations" for more information.


```jsonc
// .eslintrc.json
{
  "extends": [
    "prettier-standard/prettier-file"
  ]
}
```

```jsonc
// .prettierrc.json
"prettier-config-standard"
```

### Why Configure Prettier In A Seperate File?

-   To make tooling in build systems and IDEs more consistent and to make
    Prettier options easier to extend.
-   Prettier is used for more than just JavaScript. Configuring it once in a
    standard location and letting the tools find it makes maintainence easier
    and reduces confusion. It doesn't make sense to maintain a configuration for
    ESLint, then again for Stylelint, and again for whatever other language you
    may be using Prettier with.


## Partial Configurations

These are provided as a convenience to aid with extending configurations.

-   **eslint-config-prettier-standard/prettierrc**: The Prettier configuration
    as an object. Since this won't be used in the context of ESLint's "extends",
    the complete module name must be used. This partial configuration is 
    provided for anyone who absolutely must be certain that they are using the 
    same version of the Prettier config that this ESLint config can resolve and 
    consume.  
      
    _In most cases, importing `prettier-config-standard` directly is recommended._
-   **prettier-standard/base**: Extends the JavaScript Standard Style shareable 
    config and includes the Prettier plugin.
-   **prettier-standard/end**: This kicks of the last of the shareable configs
    you should be using. Disables conflicting ESLint rules (Including those from 
    the JavaScript Standard Style plugin) by extending the Prettier shareable 
    configs.
-   **prettier-standard/eslint-file-base**: Extends `prettier-standard/base`. 
    Sets the `prettier/prettier` ESLint rule to "error", reads 
    `prettier-standard/prettierrc`, and passes it as the configuration for the 
    `prettier/prettier` ESLint rule.
-   **prettier-standard/prettier-file-base**: Extends `prettier-standard/base`. 
    Sets the `prettier/prettier` rule to "error".


## Extending The Configuration

Extending ESLint rules works normally, but extending Prettier can range from
simple to complex, depending on how many shareable Prettier configurations you
are working with and what you are trying to accomplish.

All Prettier options count as a single ESLint `prettier/prettier` rule
configuration, so they can not be individually extended.

All of your shareable Prettier configurations need to be imported, extended in
the proper order, modified as you desire, and then you export the combined
configuration.

The following references may be helpful:

-   [Extending Shared Configurations](https://github.com/npetruzzelli/prettier-config-standard#extending-shared-configurations) 
    from **prettier-config-standard**
-   [Sharing configurations](https://prettier.io/docs/en/configuration.html#sharing-configurations) 
    from Prettier's documentation on the "Configuration File".


## Deprecated

Use of resources in the `lib` directory is deprecated. These resources will be 
deleted in a future major release.


## "BSD-3-Clause" License

-   [LICENSE](LICENSE)
-   <https://spdx.org/licenses/BSD-3-Clause.html>
-   <https://choosealicense.com/licenses/bsd-3-clause/>
