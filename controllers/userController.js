const db = require('../models/index')
const userDal = require("../dal/user-db-accessor");

const User = db.user

const getAllUsers = async (req, res) => {
   
    const users = await User.findAll({})
    
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' })
    }
    res.json(users)
}

const getUserById = async (req, res) => {
    const id = req.params.id
    //const album = await Album.findOne({ where: { id:  id} })
    const user = await User.findByPk(id);
    res.json(user)
}

const createNewUser = async (req, res) => {
    const { userName, password, email } = req.body
    // Confirm data
    if (!userName) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const user = await User.create({ userName,password,email  })
    if (user) { // Created
        return res.status(201).json({ message: 'New user created' })
    } else {
        return res.status(400).json({
            message: 'Invalid user data received' })
}
}

const Update=async (req,res)=>{
    const {userID,password,premium} = req.body
    if(password)
    {
        await userDal.UpdatePasswordById(userID,password);
    }
    
        await userDal.UpdatePremiumById(userID,premium);
    
    res.json('Successfully updated');

}

const verify=async (req, res)=>{
    const {userName, password}=req.body
    res.json(await userDal.signIn(userName,password))
    
}

      
    module.exports = {
        getAllUsers,
        getUserById,
        createNewUser,
        Update,
        verify
    }
