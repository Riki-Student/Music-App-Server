const db = require('../models/index')
const User = db.user

const UpdatePasswordById=async (userID,password)=>{

    await User.update({password:password},{where:{userID:userID}});

    }


const UpdatePremiumById=async (userID,premium)=>{

    await User.update({premium:premium},{where:{userID:userID}});


    }

const signIn=async(userName, password)=>{
    const indeed = await User.findOne({ where: { userName: userName } });
    if(indeed)
    {
        if(indeed.password==password)
        {
            return indeed;
        }
        else{
            return "incorrect password"
        }
    }
    else{
        return "user does not exist"
    }
}

// const allUsers=async()=>{
//     const users = await User.findAll({})
//     return users

        
// }

    module.exports = {
        UpdatePasswordById,
        UpdatePremiumById,
        signIn,
        //allUsers
    }