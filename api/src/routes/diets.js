const { Router } = require('express')
const { Diet } = require('../db')

const router = Router()

router.get('/', async(req, res) => {
	try {
		let diets = await Diet.findAll()
		res.json(diets)
	} catch (error) {
			res.status(400).send(error)
	}
})

module.exports = router