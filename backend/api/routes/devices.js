const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'getting all pets'
    })
})

router.post('/', (req, res, next) => {
    const pet = {
        name: req.body.name,
        key: req.body.key
    }
    res.status(201).json({
        message: 'adding a pet',
        addPet: pet
    })
})

router.get('/:name', (req, res, next) => {
    const name = req.params.name
    res.status(200).json({
        message: `fetched ${name}`
    })
})

router.patch('/:name', (req, res, next) => {
    const name = req.params.name
    res.status(200).json({
        message: `updated ${name}`
    })
})

router.delete('/:name', (req, res, next) => {
    const name = req.params.name
    res.status(200).json({
        message: `deleted ${name}`,
    })
})



module.exports = router

