export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-declaration-strict-value', 'stylelint-prettier'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'declaration-block-no-shorthand-property-overrides': null,
    'prettier/prettier': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep'],
      },
    ],
    'selector-class-pattern': [
      '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
      {
        resolveNestedSelectors: true,
        /** Custom message */
        message: function expected(selectorValue) {
          return `Expected class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css. Selector validation tool: https://regexr.com/3apms`;
        },
      },
    ],
    'scale-unlimited/declaration-strict-value': [
      [
        '/color/',
        '/margin/',
        '/padding/',
        'fill',
        'stroke',
        'font-size',
        'font-family',
        'border-radius',
        '/gap/',
        'z-index',
      ],
      {
        disableFix: true,
        ignoreValues: ['currentColor', 'inherit', 'transparent', 'auto', 'none'],
      },
    ],

    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'define-mixin'],
      },
    ],
    'custom-property-pattern': null,
  },
};
