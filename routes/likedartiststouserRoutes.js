const express = require('express')
const router = express.Router()
const likedArtistsToUserController = require('../controllers/likedArtistsToUserController')
// const verifyJWT = require("../middleware/verifyJWT")
// router.use(verifyJWT)

router.route('/')
//.get(likedAlbumController.getAllLikedAlbums)
.get(likedArtistsToUserController.getLikedArtistsByUserID)


module.exports = router