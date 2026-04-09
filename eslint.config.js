import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importX from 'eslint-plugin-import-x'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite
    ],
    plugins: {
      'import-x': importX
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      quotes: ['error', 'double'],
      'no-console': 'warn',
      // 导入不存在的文件/模块 → 报错
      'import-x/no-unresolved': 'error',
      // 导入的名称在模块中不存在 → 报错
      'import-x/named': 'error',
      // 禁止重复导入同一模块
      'import-x/no-duplicates': 'error',
      // 导入排序：内置模块 → 第三方包 → 项目文件，组间空行
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index'
          ],
          'newlines-between': 'always'
        }
      ]
    },
    settings: {
      'import-x/resolver': {
        node: {
          extensions: ['.js', '.jsx']
        }
      }
    }
  },
  // prettier 放最后，覆盖前面所有冲突的格式化规则（如 quotes、semi）
  eslintPluginPrettier
])
