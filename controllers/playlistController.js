const db = require('../models/index')
const Playlist = db.playlist
const playlistDal = require("../dal/playlist-db-accessor");


const getAllPlaylists = async (req, res) => {

    const playlists = await playlistDal.getAllPlaylists({})

    if (!playlists?.length) {
        return res.status(400).json({ message: 'No playlists found' })
    }
    res.json(playlists)
}

const getAllPlaylists2Songs = async (req, res) => {
    const playlists2song = await playlistDal.getAllPlaylists2Songs({})
    if (!playlists2song?.length) {
        return res.status(400).json({ message: 'No playlists2songs found' })
    }
    res.json(playlists2song)
}

const getPlaylistById = async (req, res) => {
    const playlistID = req.params.id
    const playlist = await playlistDal.getPlaylistByID(playlistID);
    res.json(playlist)
}
const getPlaylistsByUserID = async (req, res) => {
    const { userID } = req.user

    res.json(await playlistDal.getPlaylistsByUserID(userID));


}
const createNewPlaylist = async (req, res) => {

    const { playlistTitle } = req.body
    const { userID } = req.user
    // Confirm data
    if (!userID || !playlistTitle) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const playlist = await playlistDal.createNewPlaylist(playlistTitle, userID)
    if (playlist) { // Created
        return res.status(201).json({ message: 'New playlist created' })
    } else {
        return res.status(400).json({
            message: 'Invalid playlist data received'
        })
    }
}

const addSongToPlaylist = async (req, res) => {
    const { p_songs_songID } = req.body
    const { p_playlists_playlistID } = req.body

    // Confirm data
    if (!p_playlists_playlistID || !p_songs_songID) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const playlist2song = await playlistDal.addSongToPlaylist(p_playlists_playlistID, p_songs_songID)
    if (playlist2song) { // Created
        return res.status(201).json({ message: 'New playlist created' })
    } else {
        return res.status(400).json({
            message: 'Invalid playlist data received'
        })
    }
}

const updatePlaylist = async (req, res) => {
    const { playlistsID, playlistTitle } = req.body

    await playlistDal.updatePlaylist(playlistsID, playlistTitle);

    res.json('Successfully updated');

}

const deletePlaylist = async (req, res) => {
    const id = req.params.id
    await playlistDal.deletePlaylist(id);
    res.json('Successfully deleted');
}






module.exports = {
    getAllPlaylists,
    getPlaylistById,
    getPlaylistsByUserID,
    createNewPlaylist,
    updatePlaylist,
    deletePlaylist,
    addSongToPlaylist,
    getAllPlaylists2Songs
}