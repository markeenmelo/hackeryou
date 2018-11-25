const { Post, Comment } = require('../models/Post')
const users = require('./users')

const posts = []

const comment = new Comment({
    body: 'This is more of comment than a question...',
    user: users[1]

})

const post = new Post({
    title: 'TypeScript is awesome, a haiku',
    description: 'Enclosed find my poem on TypeScript',
    user: users[0]
})

post.comments.push(comment)

module.exports = post
