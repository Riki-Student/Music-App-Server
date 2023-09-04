

const db = require('../models/index')
const Artist = db.artist

// @desc Get all notes 
// @route GET /notes
// @access Private
class ArtistDataAccessor {

getAllArtists = async () => {
    // Get all lessons from DB
    const Artist = await Artist.findAll({})
   
    return Artist;
}
// @desc Get all notes 
// @route GET /notes
// @access Private
getOneLesson= async (_id) => {
    const lesson = await Lesson.findByPk(_id);
    return lesson;
}

// @desc Create new note
// @route POST /notes
// @access Private
// const createNewNote = async (req, res) => {
//     const { title, contents } = req.body
//     // Confirm data
//     if (!title) {
//         return res.status(400).json({ message: 'All fields are required' })
//     }
//     const note = await Note.create({ title, contents })

//     if (note) { // Created 
//         return res.status(201).json({ message: 'New note created' })
//     } else {
//         return res.status(400).json({ message: 'Invalid note data received' })
//     }

// }

// @desc Update a note
// @route PATCH /notes
// @access Private
// const updateNote = async (req, res) => {
//     const { id, title, contents } = req.body

//     // Confirm data
//     if (!id ||  !title) {
//         return res.status(400).json({ message: 'All fields are required' })
//     }
//     const note = await Note.update({title,contents},{where:{id:id}})

//     if (!note) {
//         return res.status(400).json({ message: 'note not found' })
//     }


//     res.json(note)
// }

// @desc Delete a note
// @route DELETE /notes
// @access Private
// const deleteNote = async (req, res) => {
//     const { id } = req.body

//     // Confirm data
//     if (!id) {
//         return res.status(400).json({ message: 'note ID required' })
//     }
//     await Note.destroy({
//         where: {
//           id: id
//         }
//     });
//     res.json( `Note  with ID ${id} deleted`)
// }
}
const LessondataAccessor = new LessonsDataAccessor();
module.exports = LessondataAccessor;

// module.exports = {
//     getAllNotes,
//     //createNewNote,
//     getOneNote
//    // updateNote,
//    // deleteNote
// }