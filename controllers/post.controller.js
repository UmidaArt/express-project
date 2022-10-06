import {Post} from '../models/post.model.js'

const getPostsList = async (req, res) => {
    try {
        const posts = await Post.find({}).populate('author')
        res.json(posts)
    } catch (e) {
        res.status(400).json({message: e.message})
    }
}

const getOnePost = async (req, res) => {
    try {
        const post = await  Post.findById(req.params.id).populate('author', ['name', 'username'])
        res.json(post)
    } catch (e) {
        res.status(400).json({message: e.message})
    }
}

const postNewPost = async (req, res) => {
    try {
        const newPost = new Post(req.body)
        const insertPost = await newPost.save()
        res.json(insertPost)
    } catch (e) {
        res.status(400).json({message: e.message})
    }
}

const deleteAllPosts = async (req, res) => {
    try {
        const deletePost = await Post.deleteMany()
        res.send(deletePost)
    } catch (e) {
        res.status(400).json({message: e.message})
    }
}

const deleteOnePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        res.json(post)
    } catch (e) {
        res.status(400).json({message: e.message})
    }
}

const editPost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, {...req.body},{
            returnOriginal: false
        })
        res.json(post);
    } catch (e) {
        res.status(400).json({message: e.message})
    }
}

export {getPostsList, getOnePost, postNewPost, deleteAllPosts, deleteOnePost, editPost}