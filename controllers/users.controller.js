import {User} from '../models/user.model.js'

const getUsersList = async (req, res) => {
    try {
        const users = await User.find({}).populate('name')
        res.json(users)
    } catch (e) {
        res.status(400).json({message: e.message})
    }
}

const getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (e) {
        res.status(400).json({message: e.message})
    }
}

const postUser = async (req, res) => {
    try {
        const newUser = new User(req.body)
        const insertUser = await newUser.save()
        res.json(insertUser)
    } catch (e) {
        res.status(400).json({message: e.message})
    }
}

const deleteAllUsers = async (req, res) => {
    try {
        const deleteUser = await User.deleteMany()
        res.send(deleteUser)
    } catch (e) {
        res.status(400).json({message: e.message})
    }
}

const deleteOneUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.json(user)
    } catch (e) {
        res.status(400).json({message: e.message})
    }
}

const editUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {...req.body},{
            returnOriginal: false
        })
        res.json(user);
    } catch (e) {
        res.status(400).json({message: e.message})
    }
}

export {getUsersList, getOneUser, postUser, deleteAllUsers, deleteOneUser, editUser}