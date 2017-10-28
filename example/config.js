const path = require('path')
require('dotenv').config({path: path.join(__dirname, './.env') })

let _config = {
  port: process.env.PORT,
  shortcutRegex: /^hello from (.+)$/,
  botName: process.env.BOT_NAME,
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

module.exports = _config
