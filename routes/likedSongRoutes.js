const express = require('express')
const router = express.Router()
const verifyJWT = require("../middleware/verifyJWT")
const likedSongController = require('../controllers/likedSongController')
router.use(verifyJWT)
router.route('/')
//.get(likedSongController.getAllLikedSongs)
.get( likedSongController.getLikedSongByUserID)
.put(likedSongController.updateLikedSong)
.post(likedSongController.createNewLikedSong)
.delete(likedSongController.deleteLikedSong)

module.exports = router