module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ["plugin:vue/essential", "@vue/standard"],

  parserOptions: {
    parser: "babel-eslint",
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },

  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "eslint:recommended",
    "@vue/prettier",
  ],

  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "eslint:recommended",
    "@vue/prettier",
  ],

  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "eslint:recommended",
    "@vue/prettier",
  ],
};
