require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
})
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.error(`Mongoose error:\n ${err}`))
