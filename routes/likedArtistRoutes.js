const express = require('express')
const router = express.Router()
const likedArtistController = require('../controllers/likedArtistController')
const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)

router.route('/')
//.get(likedArtistController.getAllLikedArtists)
.get(likedArtistController.getLikedArtistByUserID)
.put(likedArtistController.updateLikedArtist)
.post(likedArtistController.createNewLikedArtist)
.delete(likedArtistController.deleteLikedArtist)

module.exports = router