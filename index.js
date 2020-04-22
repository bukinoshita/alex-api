const { parse } = require('url')
const qs = require('querystring')
const { send } = require('micro')
const alex = require('alex')

const handleQuery = (request) => {
  const url = parse(request.url)
  const query = qs.parse(url.query)

  if (query && query.text) {
    return { text: query.text }
  }

  throw new TypeError('Text is required')
}

module.exports = async (request, response) => {
  try {
    const { text } = handleQuery(request)
    const data = alex(text).messages
    return send(response, 200, { data })
  } catch (error) {
    return send(response, 400, { error: { message: error.message } })
  }
}
