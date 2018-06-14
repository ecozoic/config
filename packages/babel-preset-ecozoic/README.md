# babel-preset-ecozoic

A Babel preset to quickly bootstrap a new application

## Features
### Babel Presets
* `babel-preset-env` (`babel-preset-es2015`, `babel-preset-es2016`, `babel-preset-es2017`)
* `babel-preset-react`
* `babel-preset-stage-0`, `babel-preset-stage-1`, `babel-preset-stage-2`, `babel-preset-stage-3`

### Babel Plugins
* `react-hot-loader/babel`
* `babel-plugin-lodash`
* `babel-plugin-styled-components`
* `babel-plugin-transform-decorators-legacy`

## Installation
```bash
npm install @ecozoic/babel-preset-ecozoic
```

`.babelrc`
```json
{
  "presets": ["@ecozoic/ecozoic"]
}
```

## Options
You can optionally configure the preset by passing in an options object in `.babelrc`
```json
{
  "presets": [
    ["@ecozoic/ecozoic", {
      "env": {
        "modules": false,
      },
      "styled": false,
      "lodash": false,
      "hmr": true,
      "decorators": true,
      "react": true
    }]
  ]
}
```

### Supported Options
* `"env"` - Options to pass to `babel-preset-env`. `"modules"` is set to `false` by default to support using Webpack/Rollup bundling. Set `"env"` to `false` to disable preset.

* `"styled"` - Options to pass to `babel-plugin-styled-components`. Set to `false` to disable plugin.

* `"lodash"` - Options to pass to `babel-plugin-lodash`. Set to `false` to disable plugin.

* `"hmr"` - Set to `false` to indicate you do not want to include React-Hot-Loader via `react-hot-loader/babel`.

* `"decorators"` - Set to `false` to indicate you do not want to support decorator syntax via `babel-plugin-transform-decorators-legacy`.

* `"react"` - Set to `false` to indicate you do not want to support React/JSX/Flow via `babel-preset-react`.

## Test Environment
This preset automatically includes `babel-plugin-transform-es2015-modules-commonjs` when `NODE_ENV` is set to `"test"` to support running tests in Node test runners like Jest.

