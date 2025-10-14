import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'
import stylistic from '@stylistic/eslint-plugin'

// Rule severity levels
const OFF = 'off'
const WARN = 'warn'
const ERROR = 'error'

// Rule configurations
const SPACING_RULES = {
  'array-bracket-spacing': [ERROR, 'never'],
  'arrow-spacing': ERROR,
  'block-spacing': ERROR,
  'comma-spacing': ERROR,
  'computed-property-spacing': ERROR,
  'func-call-spacing': ERROR,
  'key-spacing': ERROR,
  'keyword-spacing': ERROR,
  'object-curly-spacing': [ERROR, 'always'],
  'rest-spread-spacing': WARN,
  'semi-spacing': WARN,
  'space-in-parens': WARN,
  'template-curly-spacing': WARN,
}

const CODE_QUALITY_RULES = {
  'complexity': [WARN, 20],
  'max-depth': [WARN, 5],
  'max-lines-per-function': [WARN, 120],
  'max-nested-callbacks': [WARN, 5],
  'max-params': [WARN, 7],
  'max-statements': [WARN, 25],
  'max-lines': [WARN, 500],
}

const TYPESCRIPT_RULES = {
  '@typescript-eslint/no-unsafe-assignment': OFF,
  '@typescript-eslint/no-unsafe-call': OFF,
  '@typescript-eslint/no-unsafe-member-access': OFF,
  '@typescript-eslint/no-unsafe-argument': OFF,
  '@typescript-eslint/no-unsafe-return': OFF,
  '@typescript-eslint/no-floating-promises': OFF,
  '@typescript-eslint/no-implied-eval': WARN,
  '@typescript-eslint/no-explicit-any': WARN,
  '@typescript-eslint/no-empty-function': WARN,
  '@typescript-eslint/return-await': ERROR,
  '@typescript-eslint/require-await': ERROR,
}

const STYLISTIC_RULES = {
  '@stylistic/brace-style': [ERROR, '1tbs', { allowSingleLine: true }],
  '@stylistic/indent': [ERROR, 2],
  '@stylistic/keyword-spacing': ERROR,
  '@stylistic/quotes': [ERROR, 'single'],
}

export default tseslint.config(
  { ignores: ['dist', 'cypress', 'cypress.config.ts'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-x': reactX,
      'react-dom': reactDom,
      '@stylistic': stylistic
    },
    rules: {
      // Inherit recommended configs
      ...reactHooks.configs.recommended.rules,
      ...reactX.configs['recommended-typescript'].rules,
      ...reactDom.configs.recommended.rules,

      // Apply rule groups
      ...SPACING_RULES,
      ...CODE_QUALITY_RULES,
      ...TYPESCRIPT_RULES,
      ...STYLISTIC_RULES,

      // React specific rules
      'react-refresh/only-export-components': [WARN, { allowConstantExport: true }],
      'react-hooks/exhaustive-deps': WARN,

      // General code style
      'prefer-const': WARN,
      'prefer-destructuring': [WARN, {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: true, object: true }
      }, { enforceForRenamedProperties: false }],
      'prefer-arrow-callback': ERROR,
      'prefer-template': ERROR,

      // Console usage
      'no-console': [WARN, { allow: ['warn', 'error'] }],

      // Variable naming
      'id-length': [ERROR, { exceptions: ['_', 's', 'l', 'a', 'b', 'm', 'x', 'y', 'z'] }],
    },
  },
)