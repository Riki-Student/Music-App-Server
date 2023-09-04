const db = require('../models/index')
const Genre = db.genre

const getGenreById = async (req, res) => {
    const id = req.params.id
    const genre = await Genre.findByPk(id);
    res.json(genre)
}

const createNewGenre = async (req, res) => {
    const { genreTitle} = req.body
    // Confirm data
    if (!genreTitle) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const genre = await Genre.create({ genreTitle })
    if (genre) { // Created
        return res.status(201).json({ message: 'New genre created' })
    } else {
        return res.status(400).json({
            message: 'Invalid genre data received' })
}
}

const deleteGenre=async (req,res)=>{
    const id = req.params.id
    await Genre.destroy({
        where: {
            genreID: id
        }
      });
      res.json('Successfully deleted');
}

module.exports = {
    getGenreById,
    createNewGenre,
    deleteGenre
}