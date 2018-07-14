require('dotenv').config({})
let _config = {
  shortcutRegex: /^[a-zA-Z]{6}$|^compare$|^[a-zA-Z]{9}$|^compare\s[\w]+$/,
  port: process.env.PORT,
  botName: process.env.BOT_NAME || 'momoka',
  mongoURL: process.env.MONGODB_URL,
  domain: process.env.DOMAIN,
  facebook: {
    pageToken: process.env.FACEBOOK_PAGE_TOKEN
  },
  line: {
    id: process.env.LINE_CHANNEL_ID,
    secret: process.env.LINE_CHANNEL_SECRET,
    token: process.env.LINE_CHANNEL_TOKEN
  }
}

const momoka = require('..')

// const strategies = require('./strategy/index')

momoka(_config, []).then((bot) => {
  bot.start()
  bot.addLineBot('/line2', {
    ..._config,
    line: {
      id: process.env.LINE_CHANNEL_ID,
      secret: process.env.LINE_CHANNEL_SECRET,
      token: process.env.LINE_CHANNEL_TOKEN
    }
  })
})
