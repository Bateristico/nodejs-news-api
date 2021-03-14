const request = require('supertest');
const index = require('../src/index');

describe('# Test requests', () => {
	it('Should return a status code of 200 when GET requested', async () => {
		const res = await request(index).get('/');
		expect(res.status).toBe(200);
		expect(res.headers).toHaveProperty(
			'content-type',
			'text/html; charset=utf-8'
		);
	});
	it('Should return a status code of 200 when POST requested', async () => {
		const res = await request(index).post('/');
		expect(res.status).toBe(200);
		expect(res.headers).toHaveProperty(
			'content-type',
			'text/html; charset=utf-8'
		);
	});
});
