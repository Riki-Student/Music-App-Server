const express = require('express')
const router = express.Router()
const artistController = require('../controllers/artistController')
// const verifyJWT = require("../middleware/verifyJWT")
// router.use(verifyJWT)

router.route('/')
.get(artistController.getAllArtists)
.post(artistController.createNewArtist)
router.get('/:id', artistController.getArtistById)
module.exports = router