const parser = require('..')([
  {
    test: /^compare$/,
    action: 'test/compare',
    mapToPayload: (event) => {
      return 'compare'
    }
  }
])

describe('Language parser test', function () {
  it('should return get action from msg object correctly', () => {
    expect(parser({
      type: 'message',
      text: 'compare'
    })).toEqual({
      type: 'test/compare',
      source: undefined,
      payload: 'compare'
    })
  })
})
