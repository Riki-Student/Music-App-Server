const db = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { user } = require('../models/index')
const User = db.user

const login = async (req, res) => {
    
    const { userName, password } = req.body
    if (!userName || !password) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const foundUser = await User.findOne({ where: { userName: userName } })
    console.log(foundUser,"aaaaa");
    if (!foundUser) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    const match = await bcrypt.compare(password, foundUser.password)
    if (!match) {
        return res.status(401).json({ message: 'Unauthorized' })}
    const userInfo = {
        userID: foundUser.userID, userName: foundUser.userName,email:foundUser.email
    }
    const accessToken = jwt.sign(userInfo,process.env.ACCESS_TOKEN_SECRET)
    console.log("token")

    res.send({accessToken:accessToken ,user:foundUser})
// user:foundUser,

}
const register = async (req, res) => {
    const { userName, email, password } = req.body
    console.log("server")
    if (!userName || !password) {// Confirm data
        return res.status(400).json({ message: 'All fields are required' })
    }
    const duplicate = await User.findOne({ where: { userName: userName } })
    if (duplicate) {
        return res.status(409).json({ message: "Duplicate username" })
    }
    const hashedPwd = await bcrypt.hash(password, 10)
    const userObject = { email, userName, password: hashedPwd }
    const user = await User.create(userObject)
    if (user) { // Created
        return res.status(201).json({
            message: `New user ${user.userName} created`
        })
    } else {
        return res.status(400).json({ message: 'Invalid user data received' })
    }

}
module.exports = { login, register }
