import presetEnv from 'babel-preset-env';
import presetReact from 'babel-preset-react';

import syntaxDynamicImport from 'babel-plugin-syntax-dynamic-import';
import transformAsyncGeneratorFunctions from 'babel-plugin-transform-async-generator-functions';
import transformClassProperties from 'babel-plugin-transform-class-properties';
import transformDecoratorsLegacy from 'babel-plugin-transform-decorators-legacy';
import transformDoExpressions from 'babel-plugin-transform-do-expressions';
import transformES2015ModulesCommonJS from 'babel-plugin-transform-es2015-modules-commonjs';
import transformExportExtensions from 'babel-plugin-transform-export-extensions';
import transformFunctionBind from 'babel-plugin-transform-function-bind';
import transformObjectRestSpread from 'babel-plugin-transform-object-rest-spread';

import reactHotLoader from 'react-hot-loader/babel';
import lodash from 'babel-plugin-lodash';
import styledComponents from 'babel-plugin-styled-components';

// plugins run before presets
// plugin order: first to last
// preset order: last to first

export default function buildPreset(context, opts = {}) {
  const isTest = process.env.NODE_ENV === 'test';

  return {
    presets: [
      opts.env !== false && [presetEnv, {
        modules: false,
        ...opts.env,
      }],
      opts.react !== false && presetReact,
    ].filter(Boolean),
    plugins: [
      // styled-components
      opts.styled !== false && [styledComponents, opts.styled],

      // decorators
      opts.decorators !== false && transformDecoratorsLegacy,

      // hmr
      opts.hmr !== false && reactHotLoader,

      // lodash
      opts.lodash !== false && [lodash, opts.lodash],

      // stage 0
      transformDoExpressions,
      transformFunctionBind,

      // stage 1
      transformExportExtensions,

      // stage 2
      syntaxDynamicImport,
      transformClassProperties, // spec: false
      
      // stage 3
      transformAsyncGeneratorFunctions,
      transformObjectRestSpread, // useBuiltIns: false

      isTest && transformES2015ModulesCommonJS, // loose: false, strict: false, noInterop: false, allowTopLevelThis: false
    ].filter(Boolean),
  };
}