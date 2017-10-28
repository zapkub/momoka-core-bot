
const throwConfigError = (config, key) => {
  if (!config[key]) {
    throw new Error(key + ' is not defined in environment config')
  }
}

let _config = {

}
module.exports = {
  setConfig (config) {
    throwConfigError(config, 'botName')
    throwConfigError(config, 'line')
    _config = config
  },
  get shortcutRegex () {
    return _config.shortcutRegex
  },
  get port () {
    return _config.port
  },
  get botName () {
    return _config.botName || 'โมโมกะ'
  },
  get mongoURL () {
    if (process.env.NODE_ENV === 'test') {
      return 'mongodb://localhost:27017/momoka'
    }
    return _config.mongoURL
  },
  get domain () {
    return _config.domain
  },
  get facebook () {
    return _config.facebook
  },
  get line () {
    return _config.line
  }
}
