require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const PORT = process.env.PORT || 3600

//console.log(process.env.NODE_ENV)


//middleware
app.use('/', express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))





//routes
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
app.use('/', require('./routes/root'))
app.use("/api/albums", require("./routes/albumRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/songs", require("./routes/songRoutes"));
app.use("/api/artists", require("./routes/artistRoutes"));
app.use("/api/playlists", require("./routes/playlistRoutes"));
app.use("/api/likedsongs", require("./routes/likedSongRoutes"));
app.use("/api/likedartists", require("./routes/likedArtistRoutes"));
app.use("/api/likedalbums", require("./routes/likedAlbumRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/genre", require("./routes/genreRoutes"));
app.use("/api/getAlbumsToUser",require("./routes/likedalbumstouserRoutes"))
app.use("/api/getArtistsToUser",require("./routes/likedartiststouserRoutes"))
app.use("/api/mood2genres" , require("./routes/mood2genresRoutes"));

