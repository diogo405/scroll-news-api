class Piece {

	static createPiece(nytPiece) {
		try {
			return {
				id: nytPiece.asset_id,
				author: nytPiece.byline,
				title: nytPiece.title.length > 45 ? nytPiece.title.substring(0, 42) + '...' : nytPiece.title,
				image: nytPiece.media[0]['media-metadata'].find(m => m.format === 'mediumThreeByTwo440').url,
				url: nytPiece.url,
				date: nytPiece.updated,
				tags: nytPiece.des_facet.map(t => t.length > 50 ? t.substring(0, 47) + '...' : t),
				section: nytPiece.nytdsection
			}
		} catch (e) {
			console.error('Error creating piece', nytPiece)
			return null
		}
	}
}

module.exports = Piece
