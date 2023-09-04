const express = require('express')
const router = express.Router()
const likedAlbumController = require('../controllers/likedAlbumController')
const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)

router.route('/')
//.get(likedAlbumController.getAllLikedAlbums)
.get(likedAlbumController.getLikedAlbumByUserID)
.put(likedAlbumController.updateLikedAlbum)
.post(likedAlbumController.createNewLikedAlbum)
.delete(likedAlbumController.deleteLikedAlbum)

module.exports = router