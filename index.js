// Packages
const { parse } = require('url')
const qs = require('querystring')
const { send } = require('micro')
const alex = require('alex')

const handleQuery = req => {
  const url = parse(req.url)
  const query = qs.parse(url.query)

  if (query && query.text) {
    return { text: query.text }
  }

  throw new TypeError('Text is required')
}

module.exports = async (req, res) => {
  try {
    const { text } = handleQuery(req)
    const data = alex(text).messages
    return send(res, 200, { data })
  } catch (error) {
    return send(res, 400, { error: { message: error.message } })
  }
}
