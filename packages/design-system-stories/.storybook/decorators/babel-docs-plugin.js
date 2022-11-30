const template = require("@babel/template");

/**
 * Adding this babel transformer supports the src code view with Suspense
 * Until this issue is resolved, we have to add the src code docs ourselves:
 * https://github.com/storybookjs/storybook/issues/11554
 * The approach is to grab the src code for the entire file, and then strip out unecessary things
 * like large file header helpers that storybook injects so we only show the essentials.
 */
module.exports = () => {
  return {
    visitor: {
      Program(path, state) {
        if (state.file.opts.filename.endsWith(".stories.tsx")) {
          const srcCode = path.hub.file.code
            .trim()
            .replace(/(.*((__(STORY|LOCATIONS_MAP)__)|(\/\/)|(\/\*)|(@storybook\/react)|(Template\.parameters =))|(Template\.storyName)).*/g, "")
            .replace(/.*React\.Suspense.*\n/gm, "")
            .replace(/export default.*Meta/s, "")
            .replace(/\n\s*\n/g, "\n\n");

          path.node.body.push(
            template.default.ast(`
Template.parameters = {
    ...Template.parameters,
    docs: {
        source: {
            code: \`${srcCode}\`
        }
    }
};`)
          );
        }
      },
    },
  };
};
