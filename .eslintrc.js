module.exports = {

  env: {
    browser: true,
    node: true,
    es2020: true
  },
  extends: ["airbnb","prettier" ],
  parseOptions: {
    sourceTapy: "module",
    ecmaVersion: 11,
  },
  rules: {
    "no-console": 0,
  },
};