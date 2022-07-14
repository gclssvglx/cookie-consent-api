module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy(
    { "./node_modules/govuk-frontend/govuk/assets": "assets" }
  );

  eleventyConfig.addPassthroughCopy(
    { "./node_modules/govuk-frontend/govuk/all.js": "scripts/govuk.js" }
  );

  eleventyConfig.addPassthroughCopy("./src/scripts");
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy("./src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
