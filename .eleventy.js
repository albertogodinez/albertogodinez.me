const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addPassthroughCopy('./src/img');


  // Unsorted items (in whatever order they were added)
  eleventyConfig.addCollection("draggableNotes", function(collectionApi) {
    const draggableNotes = collectionApi.getAll().filter((item) =>  {
      return 'isDraggable' in  item.data && item.data.isDraggable
    });
    return draggableNotes
  });

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
      "md",
      "html",
      "njk"
    ],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    dir: {
      input: 'src',
      output: 'public'
    },

  }
}
