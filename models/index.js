const{Sequelize}= require('sequelize');
const{sequelize}= require('./sequelize');
const {applyExtraSetup} = require('./extra-setup')


const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
//insert all tables
db.album = require('./album')
db.artist = require('./artist')
db.genre = require('./genre')
db.likedalbum = require('./likedalbum')
db.likedartist = require('./likedartist')
db.likedsong = require('./likedsong')
db.mood = require('./mood')
db.mood2genre = require('./mood2genre')
db.playlist = require('./playlist')
db.playlists2song = require('./playlists2song')
db.song = require('./song')
db.user = require('./user')


applyExtraSetup();

db.sequelize.sync({ alter: true })
.then(() => {
console.log('yes re-sync done!')
})
module.exports = db