const eleventySass = require('eleventy-sass')

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventySass)
  eleventyConfig.addWatchTarget('./src/sass/')
  eleventyConfig.addPassthroughCopy('./src/assets/images')

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  }
}
