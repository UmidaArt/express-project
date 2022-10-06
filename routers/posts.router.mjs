import express from "express"
import {getPostsList, getOnePost, postNewPost, deleteAllPosts, deleteOnePost, editPost} from "../controllers/post.controller.js"

const router = express.Router()

router.get('/', getPostsList)

router.get('/:id', getOnePost)

router.post('/', postNewPost)

router.delete('/',  deleteAllPosts)

router.delete('/:id', deleteOnePost)

router.put('/:id', editPost)

export default router