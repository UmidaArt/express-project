import express from "express"
import {getUsersList, getOneUser, postUser, deleteAllUsers, deleteOneUser, editUser} from "../controllers/users.controller.js"
const router = express.Router()

router.get('/', getUsersList)

router.get('/:id', getOneUser)

router.post('/', postUser)

router.delete('/',  deleteAllUsers)

router.delete('/:id', deleteOneUser)

router.put('/:id', editUser)

export default router