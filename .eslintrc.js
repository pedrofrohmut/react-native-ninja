// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    semi: ["warn", "never"],
    quotes: ["warn", "double"],
    "comma-dangle": ["error", "never"],
    "no-unused-vars": "warn",
    "react/prop-types": "off"
  }
}
