const todos = ['cook dinner', 'walk the dog']

const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

// GET /todos
router.route('/')
    .get(async (req, res, next) => {
        // 1. Get all todos in our DB
        try {
            const docs = await Todo.find({}) // Go get ALL todo documents
            res.status(200).send({data: docs})
        } catch (e) {
            next(e)
        }
    })

router.route('/')
    .post(async (req, res, next) => {
        // 1. Grab the new todo from the request body
        const description = req.body.todo
        // 2. Instantiate todo models
        const todo = new Todo({description})
        try {
            //  3. Save it
            const doc = await todo.save()
            // 4. Respond with the updated todos array
            res.status(201).send({
                data: [doc]
            })
        } catch (e) {
            next(e)
        }
    })

// DELETE /todos/2
router.route('/:id')
    .delete(async (req, res, next) => {
        // 1. Grab the todo index from the url params.
        // same as writing index = req.params.index
        const {id} = req.params

        // 2. Find the matching todo by id and remove it
        try {
            const doc = Todo.findByIdAndRemove({_id: id})
            res.status(202).send({
                data: [doc]
            })
        } catch (e) {
            next(e)
        }
    })

// PATCH /todos/:id/complete
router
    .route('/:id/complete')
    .patch(async (req, res, next) => {
        const {id} = req.params
        try {
            const doc = Todo.findByIdAndUpdate(id, {completed: true})
            res.status(200).send({data: [doc]})
        } catch (e) {
            next(e)
        }
    })

exports.router = router
