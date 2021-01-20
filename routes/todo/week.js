const connection = require('../requirements/connection')
const express = require('express')
const router = express.Router()
router.post('/Add',(req,res) => {
    const lesson = req.body.lesson
    const hours = req.body.hours
    const day = req.body.day
    const done = req.body.done
    const part = req.body.part
    var sql = `INSERT INTO weekTodo (lesson, hours, day, done, part) VALUES ('${lesson}', '${hours}', '${day}', '${done}', '${part}')`;
    connection.query(sql, function (err, result) {
        res.status(200).send({
            msg: 'Todo Inserted'
        })
    })
})
router.get('/',(req,response) => {
    connection.query('SELECT id, lesson, hours, day, done, part FROM weekTodo', (err,res) => {
        response.json(res)
    })
})
router.put('/:id',(req,response) => {
    const id = req.params.id
    connection.query(`UPDATE weekTodo SET done = 'بله' WHERE id = ${id}`,(err,res) => {
    })
})
module.exports = router