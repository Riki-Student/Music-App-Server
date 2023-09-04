const express = require('express')
const router = express.Router()
const songController = require('../controllers/songController')
// const verifyJWT = require("../middleware/verifyJWT")
// router.use(verifyJWT)

router.route('/')
.post(songController.createNewSong)
//.get(songController.getSong)
.get(songController.getAllSongs)
router.get('/albumSongs/:id',songController.getSongsByAlbumId)
router.get('/:id', songController.getSongById)
module.exports = router