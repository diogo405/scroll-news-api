const express = require('express')
const cors = require('cors')
const NewsService = require('./service/NewsService.js')
const newsService = new NewsService()
const app = express()
const port = process.env.PORT || 3003

app.use(cors())

app.get('/sc/news/most-emailed', async (req, res) => {
	try {
  		const news = await newsService.getMostEmailedNews()
  		res.send({success: true, news: news})
	} catch (e) {
		console.log('Error', e)
		res.status(500)
		res.send({success: false, error: 'Internal error'})
	}
})

app.get('/sc/news/most-shared', async (req, res) => {
	try {
  		const news = await newsService.getMostSharedNews()
  		res.send({success: true, news: news})
	} catch (e) {
		console.log('Error', e)
		res.status(500)
		res.send({success: false, error: 'Internal error'})
	}
})

app.get('/sc/news/most-viewed', async (req, res) => {
	try {
  		const news = await newsService.getMostViewedNews()
  		res.send({success: true, news: news})
	} catch (e) {
		console.log('Error', e)
		res.status(500)
		res.send({success: false, error: 'Internal error'})
	}
})

app.listen(port, () => {
  	console.log(`Listening at http://localhost:${port}`)
})