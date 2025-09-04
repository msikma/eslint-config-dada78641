import eslint from '@eslint/js'
import {defineConfig} from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export const baseConfig = defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
    }
  },
  {
    rules: {
      '@stylistic/quotes': ['error', 'single', {allowTemplateLiterals: 'always', avoidEscape: true}],
      '@stylistic/no-tabs': ['error'],
      '@stylistic/object-curly-spacing': ['error', 'never'],
      '@stylistic/semi': ['error', 'never'],
    }
  },
  {
    ignores: [
      'dist/',
    ]
  }
)

export const nodeConfig = [
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      }
    }
  },
]

export default baseConfig
