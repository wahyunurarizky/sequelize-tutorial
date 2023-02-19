const express = require('express')
const { Article } = require('./app/models')
const app = express()

app.get('/api/v1/articles', async (req, res) => {
  const articles = await Article.findAll()
  return res.json(articles)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
