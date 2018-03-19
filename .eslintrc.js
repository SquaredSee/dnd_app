module.exports = {
  "extends": "airbnb-base",
  "parser": "babel-eslint",  // needed for react
  "rules": {
    // "arrow-body-style": "off",
    "arrow-parens": ["error", "always"],
    "brace-style": ["error", "stroustrup"],
    "no-console": "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": "off",  // doesn't play well with react :(
    "prefer-destructuring": "off",
  }
};
