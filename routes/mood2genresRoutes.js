const express = require('express')
const router = express.Router()
const mood2genresController = require('../controllers/mood2genresController')
// const verifyJWT = require("../middleware/verifyJWT")
// router.use(verifyJWT)

router.route('/')
.post(mood2genresController.getAllSongs2Mood)
// router.get('/:id',mood2genresController.getAllSongs2Mood)
// .post(genreController.createNewGenre)
// router.get('/:id', genreController.getGenreById)
// router.delete('/:id', genreController.deleteGenre)
module.exports = router