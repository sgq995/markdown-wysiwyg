/* eslint-disable no-undef */
module.exports = {
  root: true,
  plugins: ['tailwindcss', 'solid', 'jsx-a11y', 'testing-library', 'jest-dom'],
  extends: [
    'eslint:recommended',
    'plugin:solid/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['*.test.ts', '*.test.tsx'],
      extends: ['plugin:testing-library/react', 'plugin:jest-dom/recommended'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
