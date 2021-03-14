const axios = require('axios');
require('dotenv').config();

const { API_BASE_URL, API_KEY } = process.env;

exports.getNews = async (req, res, next) => {
	// default values
	let keyword = 'Poland';
	let sortBy = 'popularity';
	let dateSearch = new Date().toISOString().slice(0, 10);

	try {
		const resultNews = await axios.get(
			`${API_BASE_URL}?q=${keyword}&from=${dateSearch}&sortBy=${sortBy}&apiKey=${API_KEY}`
		);
		//console.log(resultNews.data.articles);
		res.status(200).render('news', { news: resultNews.data.articles });
	} catch (error) {
		if (error.response) {
			res.status(404).render('news', { news: null });
		} else if (error.request) {
			res.status(404).render('news', { news: null });
			console.log(error.request);
		} else {
			res.status(404).render('news', { news: null });
			console.error('Error', error.message);
		}
	}
};

exports.searchNews = async (req, res, next) => {
	let keyword = req.body.search;
	let dateSearch = req.body.date;
	let sortBy = req.body.sort;
	if (!dateSearch) {
		dateSearch = new Date().toISOString().slice(0, 10);
	}
	//console.log(keyword, dateSearch, sortBy);
	try {
		const resultNews = await axios.get(
			`${API_BASE_URL}?q=${keyword}&from=${dateSearch}&sortBy=${sortBy}&apiKey=${API_KEY}`
		);
		//console.log(resultNews.data.articles);
		res.status(200).render('news', { news: resultNews.data.articles });
	} catch (error) {
		if (error.response) {
			res.status(404).render('news', { news: null });
		} else if (error.request) {
			res.status(404).render('news', { news: null });
			console.log(error.request);
		} else {
			res.status(404).render('news', { news: null });
			console.error('Error', error.message);
		}
	}
};
