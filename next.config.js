const path = require('path')
const withVideos = require('next-videos')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = withVideos()