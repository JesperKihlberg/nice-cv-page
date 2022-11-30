const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  managerWebpack: (config, options) => {
    options.cache.set = () => Promise.resolve();
    return config;
  },
  babel: async (config) => {
    return {
      ...config,
      // plugins: [...config.plugins, path.resolve(__dirname, "./babel-docs-plugin.js")],
    };
  },
};
