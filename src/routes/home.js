const Router = require('express').Router()
const controller = require('../controllers/homeController')
const { join } = require('path')

const { index } = controller

Router.get('/', index)

Router.get('/icon.svg', (req, res) => {
	res.sendFile(join(__dirname, 'assets', 'icon.svg'))
})

module.exports = Router