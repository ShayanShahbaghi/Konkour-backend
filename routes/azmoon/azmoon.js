const connection = require('../requirements/connection')
const express = require('express')
const router = express.Router()
router.post('/Add',(req,response) => {
    const name = req.body.name
    const desc = req.body.desc
    const date = req.body.date
    const peymane = req.body.peymane
    const farsi0 = req.body.farsi0
    const farsi1 = req.body.farsi1
    const farsi2 = req.body.farsi2
    const dini0 = req.body.dini0
    const dini1 = req.body.dini1
    const dini2 = req.body.dini2
    const arabi0 = req.body.arabi0
    const arabi1 = req.body.arabi1
    const arabi2 = req.body.arabi2
    const zaban0 = req.body.zaban0
    const zaban1 = req.body.zaban1
    const zaban2 = req.body.zaban2
    const hendese0 = req.body.hendese0
    const hendese1 = req.body.hendese1
    const hendese2 = req.body.hendese2
    const amar0 = req.body.amar0
    const amar1 = req.body.amar1
    const amar2 = req.body.amar2
    const hesaban0 = req.body.hesaban0
    const hesaban1 = req.body.hesaban1
    const hesaban2 = req.body.hesaban2
    const fizik0 = req.body.fizik0
    const fizik1 = req.body.fizik1
    const fizik2 = req.body.fizik2
    const shimy0 = req.body.shimy0
    const shimy1 = req.body.shimy1
    const shimy2 = req.body.shimy2
    var sql = `INSERT INTO azmoon (name, description, date, peymane, farsi0, farsi1, farsi2, dini0, dini1, dini2, arabi0, arabi1, arabi2, zaban0, zaban1, zaban2, hendese0, hendese1, hendese2, amar0, amar1, amar2, hesaban0, hesaban1, hesaban2, fizik0, fizik1, fizik2, shimy0, shimy1, shimy2) VALUES ('${name}', '${desc}', '${date}', '${peymane}', '${farsi0}', '${farsi1}', '${farsi2}', '${dini0}', '${dini1}', '${dini2}', '${arabi0}', '${arabi1}', '${arabi2}', '${zaban0}', '${zaban1}', '${zaban2}', '${hendese0}', '${hendese1}', '${hendese2}', '${amar0}', '${amar1}', '${amar2}', '${hesaban0}', '${hesaban1}', '${hesaban2}', '${fizik0}', '${fizik1}', '${fizik2}', '${shimy0}', '${shimy1}', '${shimy2}')`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        response.status(200).json({
            msg: 'Azmoon Created'
        })
    });
})
router.get('/last', (req,response) => {
    connection.query('SELECT name, description, date, peymane, farsi0, farsi1, farsi2, dini0, dini1, dini2, arabi0, arabi1, arabi2, zaban0, zaban1, zaban2, hendese0, hendese1, hendese2, amar0, amar1, amar2, hesaban0, hesaban1, hesaban2, fizik0, fizik1, fizik2, shimy0, shimy1, shimy2 FROM azmoon', (err,res) => {
        response.json(res.reverse()[0])
    })
})
module.exports = router