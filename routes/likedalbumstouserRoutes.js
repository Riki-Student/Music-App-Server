const express = require('express')
const router = express.Router()
const likedAlbumsToUserController = require('../controllers/likedAlbumsToUserController')
const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)

router.route('/')
//.get(likedAlbumController.getAllLikedAlbums)
.get(likedAlbumsToUserController.getLikedAlbumsByUserID)


module.exports = router