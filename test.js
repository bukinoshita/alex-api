const test = require('ava')
const request = require('supertest')

const api = require('.')

const service = request(api)

test('should fail if no URL is defined', async t => {
  const result = await service.get('/').expect(400)

  t.is(result.status, 400)
})

test('should succeed with text schema defined', async t => {
  const text = 'The slaves were read-only copies of master. But not to worry, he was a cripple.'
  const result = await service.get(`/?text=${text}`).expect(200)

  t.is(result.status, 200)
  t.is(result.body.data.length, 4)
})
