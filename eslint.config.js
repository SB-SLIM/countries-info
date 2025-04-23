import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: { js, jsdoc },
    extends: ['js/recommended'],
    rules: {
      '@typescript-eslint/ban-ts-comment': [0],
      '@typescript-eslint/no-redeclare': [2],
      '@typescript-eslint/no-explicit-any': [0],
      '@typescript-eslint/no-unused-vars': [0],
      '@typescript-eslint/ban-types': [0],
      '@typescript-eslint/consistent-type-imports': [
        2,
        { fixStyle: 'separate-type-imports' },
      ],
      '@typescript-eslint/consistent-type-exports': 2,
      'jsdoc/valid-types': 2,
      'jsdoc/require-returns': 3,
      'jsdoc/require-param-type': 2,
    },
  },

  // JSdoc recommended config
  jsdoc.configs['flat/recommended'],

  // TypeScript recommended config
  tseslint.configs.recommended,
]);
