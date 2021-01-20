const connection = require('../requirements/connection')
const express = require('express')
const router = express.Router()
router.post('/Add',(req,res) => {
    const name = req.body.name
    const part = req.body.part
    const sum = req.body.sum
    const to = req.body.to
    const from = req.body.from
    var sql = `INSERT INTO lessonTodo (name, part, sum, toWhen, fromWhen) VALUES ('${name}', '${part}', '${sum}', '${to}', '${from}')`;
    connection.query(sql, function (err, result) {
        res.status(200).send({
            msg: 'Todo Inserted'
        })
    })
})
router.delete('/:id',(req,res) => {
    const id = req.params.id
    var sql = `DELETE FROM lessonTodo WHERE id = '${id}'`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        res.status(200).send({
            msg: 'Todo Removed Successfully'
        })
    })
})
router.get('/', (req,response) => {
    connection.query('SELECT name, part, sum, toWhen, fromWhen FROM lessonTodo', (err,res) => {
        response.json(res)
    })
})
module.exports = router