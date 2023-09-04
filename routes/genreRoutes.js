const express = require('express')
const router = express.Router()
const genreController = require('../controllers/genreController')
// const verifyJWT = require("../middleware/verifyJWT")
// router.use(verifyJWT)

router.route('/')
.post(genreController.createNewGenre)
router.get('/:id', genreController.getGenreById)
router.delete('/:id', genreController.deleteGenre)
module.exports = router