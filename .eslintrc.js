module.exports = {
  plugins: ["jest", "flowtype"],
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "prettier/flowtype",
    "plugin:jest/recommended",
    "plugin:flowtype/recommended"
  ],
  parserOptions: {
    sourceType: "module"
  },
  overrides: [
    {
      files: "src/*.test.js",
      env: {
        "jest/globals": true
      }
    }
  ]
};
