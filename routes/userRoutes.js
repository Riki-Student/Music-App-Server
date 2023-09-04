const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
router.route('/')
.post(userController.createNewUser)
.put(userController.Update)
.get(userController.getAllUsers)
router.get('/:id', userController.getUserById)
module.exports = router