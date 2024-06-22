const eleventySass = require('eleventy-sass')
const htmlmin = require('html-minifier')
const faviconPlugin = require('eleventy-favicon')

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventySass)
  eleventyConfig.addWatchTarget('./src/sass/')
  eleventyConfig.addPassthroughCopy('./src/assets/images')
  eleventyConfig.addPlugin(faviconPlugin, { destination: './public' })

  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
      })
    }

    return content
  })
  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  }
}
