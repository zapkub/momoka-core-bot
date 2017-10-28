# Momoka core
This repository is the core of momoka crypto bot, momoka can use with varity of task and easy to implement with popular
chatbot API

# List of supported Messenging API
- [x] Line
- [x] Facebook
- [ ] Telegram


# Getting started
Take a look on simple setup in `./example` folder
## setup Bot config
```js
  let config = {
    port: process.env.PORT, // your bot port
    botName: process.env.BOT_NAME, // your bot name (also use as invoke phase)
    mongoURL: process.env.MONGODB_URL, // db url for notification service (optional)
    domain: process.env.DOMAIN, // your bot endpoint (optional for notification service)

    // information for Messenging API
    facebook: {
      pageToken: process.env.FACEBOOK_PAGE_TOKEN
    },
    line: {
      id: process.env.LINE_CHANNEL_ID,
      secret: process.env.LINE_CHANNEL_SECRET,
      token: process.env.LINE_CHANNEL_TOKEN
    }
  }
```

# DEMO
Checkout [Momoka cryptobot](https://github.com/zapkub/momoka-crypto-bot) for a demo