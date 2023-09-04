const express = require('express')
const router = express.Router()
const playlistController = require('../controllers/playlistController')
const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)

router.route('/')
.get(playlistController.getPlaylistsByUserID)
.post(playlistController.createNewPlaylist)
.put(playlistController.updatePlaylist)

router.get('/all',playlistController.getAllPlaylists)
router.get('/allSongsInPlaylist',playlistController.getAllPlaylists2Songs)
router.get('/:id', playlistController.getPlaylistById)
router.delete('/:id', playlistController.deletePlaylist)
router.post('/add',playlistController.addSongToPlaylist)
module.exports = router