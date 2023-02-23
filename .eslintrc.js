/* eslint-disable no-undef */
module.exports = {
  root: true,
  plugins: ["tailwindcss", "solid", "jsx-a11y"],
  extends: [
    "eslint:recommended",
    "plugin:solid/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
};
