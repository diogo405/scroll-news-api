const axios = require('axios')
const Piece = require('../vo/Piece')

class NewsService {

	constructor() {
		this.baseUrl = 'https://api.nytimes.com/svc/mostpopular/v2'
		this.apiKey = process.env.API_KEY
	}
	
	getMostEmailedNews() {
		return this.getNews('emailed')
	}

	getMostViewedNews() {
		return this.getNews('viewed')
	}

	getMostSharedNews() {
		return this.getNews('shared')
	}

	async getNews(type, period = 7) {
		const {data: response} = await axios.get(`${this.baseUrl}/${type}/${period}.json?api-key=${this.apiKey}`)
		return response.results.map(nytPiece => Piece.createPiece(nytPiece)).filter(p => p !== null)
	}
}

module.exports = NewsService