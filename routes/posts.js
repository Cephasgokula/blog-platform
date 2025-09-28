const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//GET all posts
router.get('/',async (req,res) => {
    try{
        const posts = await Post.find().sort({date : -1}); // sort by date descending
        res.json(posts);
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
});

// GET /api/posts/:id - get a single post by ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// POST /api/posts - create a new post

router.post('/',async (req,res)=> {
    const {title,content} = req.body;
    if(!title  || !content){
        return res.status(400).json({message : "Title and content are required"});
    }

    const newPost = new Post({title, content});
    try{
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
});

// PUT /api/posts/:id -update posts
router.put('/:id',async (req,res) => {
    const {title,content} = req.body;
    try{
        const post = await Post.findById(req.params.id);
        if(!post) return res.status(404).json({message : "Post not found"});

        post.title = title;
        post.content = content;
        post.date = Date.now();

        const updatedPost = await post.save();
        res.json(updatedPost);
    }
    catch(err){
        res.status(400).json({message : err.message});
    }
});

// DELETE /api/posts/:id -delete posts
router.delete('/:id', async(req,res) => {
    try{
        const post = await Post.findByIdAndDelete(req.params.id);
        if(!post) return res.status(404).json({message : "Post not found"});

        res.json({message : "Post deleted !"});
    }
    catch(err){
        res.status(400).json({message : err.message});
    }
});

module.exports = router;