import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import globals from 'globals';
import typescriptParser from '@typescript-eslint/parser';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier/recommended';
import vueConfigPrettier from '@vue/eslint-config-prettier';
import fsdLitePlugin from 'eslint-plugin-fsd-lite';
import boundaries from 'eslint-plugin-boundaries';

export default defineConfigWithVueTs([
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
        createDefaultProgram: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: ['dist', '.helm', '.husky', '.vscode', '.gitignore', 'node_modules', 'vite.config.ts'],
  },
  {
    plugins: {
      fsd: fsdLitePlugin,
    },
    rules: {
      'fsd/no-fsd-imports': ['error', { aliases: ['@'] }],
    },
  },
  {
    plugins: {
      boundaries,
    },
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['**/features/*/**', '**/entities/*/**', '**/widgets/*/**'],
              message: 'Нарушение FSD — импортируй через public API (index.ts)',
            },
          ],
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  // prettier
  prettier,
  {
    rules: {
      ...vueConfigPrettier.rules,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          bracketSpacing: true,
          singleAttributePerLine: true,
        },
      ],
    },
  },
  // vue
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        { registeredComponentsOnly: true },
      ],
      'vue/multi-word-component-names': 0,
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 3,
          multiline: 1,
        },
      ],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
    },
  },
  // ts
  vueTsConfigs.recommended,
  {
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/no-floating-promises': [
        'error',
        {
          ignoreVoid: true,
        },
      ],
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false,
        },
      ],
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            accessors: 'explicit',
            constructors: 'no-public',
            methods: 'explicit',
            properties: 'explicit',
            parameterProperties: 'explicit',
          },
        },
      ],
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'error',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      '@typescript-eslint/prefer-readonly': [
        'error',
        {
          onlyInlineLambdas: false,
        },
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'public-static-field',
            'protected-static-field',
            'private-static-field',
            'private-instance-field',
            'protected-instance-field',
            'public-instance-field',
            'constructor',
            'public-static-method',
            'protected-static-method',
            'private-static-method',
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
          ],
        },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-namespace': 0,
      '@typescript-eslint/no-use-before-define': 0,
      '@typescript-eslint/consistent-type-assertions': 0,
      '@typescript-eslint/interface-name-prefix': 'off',
    },
  },
  // common
  {
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      semi: ['error', 'always'],
      'no-extra-semi': ['error'],
      quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      radix: ['error', 'always'],
      eqeqeq: 2,
      curly: 2,
      'no-debugger': [1],
      'no-prototype-builtins': 0,
      '@/no-throw-literal': 'error',
      'no-nested-ternary': ['error'],
    },
  },
]);
