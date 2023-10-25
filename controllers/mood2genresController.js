const db = require('../models/index')
//const Mood2genre = db.mood2genre
const Mood2genreDal = require("../dal/mood2genres-db-accessor")
//const playlistDal = require("../dal/playlist-db-accessor");


const getAllSongs2Mood= async (req, res)=> {

    const {mood_moodID} = req.body;
    console.log("=-=-=--=-=-=-=-=-=");
    console.log(mood_moodID);
    res.json(await Mood2genreDal.getAllSongs2Mood(mood_moodID));
}

module.exports = {
    getAllSongs2Mood
}