const express = require("express")
const posts = express.Router()
const cors = require('cors')

const Post = require("../models/Post")


posts.use(cors())

process.env.SECRET_KEY = 'secret'

posts.post('/new', (req, res) => {
    
    const postData = {
        title: req.body.title,
        content: req.body.content,
        tag: req.body.tag,
        users_id: req.body.users_id
    }

    Post.create(postData)
                        .then(post => {
                            res.json({ status: post.title + ' posted' })
                        })
                        .catch(err => {
                            res.send('error1: ' + err)
                        })
})

module.exports = posts