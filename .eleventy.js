module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/css/tailwind.css');
  eleventyConfig.addPassthroughCopy('./src/img');

  // Unsorted items (in whatever order they were added)
  eleventyConfig.addCollection("draggableNotes", function(collectionApi) {
    const draggableNotes = collectionApi.getAll().filter((item) =>  {
      return 'draggable' in  item.data
    });
    console.log(draggableNotes[0].data);
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

/*
    inputPath: './src/test.md',
    fileSlug: 'test',
    filePathStem: '/test',
    data: {
      eleventy: [Object],
      pkg: [Object],
      title: 'How I Create Series of Articles in Eleventy',
      series: 'Colophon: Finding A Place For My Head',
      tags: [Array],
      page: [Object],
      collections: [Object]
    },
*/