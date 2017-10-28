const momoka = require('..')
const _config = require('./config')

const pattern = /^hello from (.+)$/

const simpleStrategies = [{
  test: pattern,
  action: 'test/hello-world',
  mapToPayload: (event) => {
    // extract your intent from msg to payload
    let name = ''
    let match
    while ((match = pattern.exec(event.text)) !== null) {
      name = match[1]
      return {
        name
      }
    }
    return ''
  },
  resolve: async (action) => {
    // try to resolve your data from
    // action payload
    return action.payload.name.toUpperCase()
  },
  messageReducer: (err, result) => {
    // craft your response
    return {
      type: 'text',
      text: 'Hello, ' + result
    }
  }
}]

// try to text to bot => โมโมกะ hello from {yourname}
momoka(_config, simpleStrategies).then((bot) => {
  bot.start()
})
