module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    'shared-node-browser': true,
    es6: true
  },
  extends: 'eslint:recommended',
  plugins: [
    'react',
    'flowtype'
  ],
  rules: {
    // Possible Errors
    'no-console': 'off',
    'valid-jsdoc': [
      'error',
      {
        prefer: {
          return: 'returns'
        },
        requireReturn: false,
        requireParamDescription: false,
        requireReturnDescription: false
      }
    ],

    // Best Practices
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    complexity: [
      'error',
      8
    ],
    curly: [
      'error',
      'multi-line'
    ],
    'default-case': 'error',
    'dot-notation': 'error',
    'dot-location': [
      'error',
      'property'
    ],
    eqeqeq: [
      'error',
      'allow-null'
    ],
    'guard-for-in': 'error',
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': [
      'error',
      {
        boolean: false,
        number: false
      }
    ],
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': [
      'error',
      {
        allowLoop: true,
        allowSwitch: true
      }
    ],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'warn',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-void': 'error',
    'no-with': 'error',
    radix: 'error',
    'vars-on-top': 'error',
    'wrap-iife': [
      'error',
      'inside'
    ],
    yoda: [
      'error',
      'never'
    ],

    // Strict Mode
    strict: [
      'off',
      'global'
    ],

    // Variables
    'init-declarations': [
      'off',
      'always'
    ],
    'no-catch-shadow': 'error',
    'no-label-var': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used'
      }
    ],
    'no-use-before-define': 'error',

    // Node.js and CommonJS
    'callback-return': 'error',
    'handle-callback-err': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-restricted-modules': 'warn',
    'no-sync': 'error',

    // Stylistic Issues
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false
      }
    ],
    camelcase: 'error',
    'comma-spacing': [
      'warn',
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [
      'error',
      'last'
    ],
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'consistent-this': [
      'error',
      'self',
      '_this'
    ],
    'eol-last': 'error',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'jsx-quotes': [
      'error',
      'prefer-double'
    ],
    'key-spacing': [
      'warn',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {}
      }
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'max-nested-callbacks': [
      'error',
      3
    ],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2
      }
    ],
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-extra-parens': 'error',
    'operator-assignment': [
      'error',
      'always'
    ],
    'operator-linebreak': [
      'error',
      'after'
    ],
    'padded-blocks': [
      'off',
      'never'
    ],
    'quote-props': [
      'error',
      'as-needed'
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    semi: [
      'error',
      'always'
    ],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'space-before-blocks': [
      'error',
      'always'
    ],
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: [
          '*',
          '-',
          ','
        ],
        markers: [
          '*',
          '-',
          ','
        ]
      }
    ],
    'wrap-regex': 'warn',

    // ECMAScript 6
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: true
      }
    ],
    'arrow-parens': [
      'error',
      'always'
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'generator-star-spacing': [
      'error',
      'before'
    ],
    'no-duplicate-imports': 'error',
    'prefer-const': 'warn',
    'prefer-rest-params': 'error',
    'rest-spread-spacing': 'error',
    'sort-imports': 'off',
    'template-curly-spacing': [
      'error',
      'never'
    ]
  }
};
