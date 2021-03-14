const app = require('./index');
require('dotenv').config();

const { PORT } = process.env || 3000;

app.listen(PORT, () => {
	console.log(`app listening on port ${PORT}`);
});
