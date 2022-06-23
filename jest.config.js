module.exports = {
  transform: {
    "\\.js$": ["babel-jest", { configFile: "./jest.babel.config.js" }],
  },
  testRegex: 'tests/component/.*\.test\.js$',
  roots: ["../"],
};
