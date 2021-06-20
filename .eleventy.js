module.exports = function (config) {
  config.addPassthroughCopy({ "./src/assets/scripts": "assets/scripts" });
  config.addPassthroughCopy({ "./src/assets/css": "assets/css" });
  config.addPassthroughCopy({ "./src/assets/images": "assets/images" });

  return {
    dir: {
      input: "./src",
      output: "./docs",
    },
  };
};
