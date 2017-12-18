const fs = require('fs')

module.exports = (req, res) => {

    const idx = req.body.idx;

    // 读取文件
    var data = fs.readFileSync('./data/consignee_list.json', { encoding: 'utf-8' })

    data = JSON.parse(data)

    data.forEach((v,i) => {
        v.morenAddress = 'check'
    })

    data[idx].morenAddress = 'check checked'

    // 写入文件
    fs.writeFileSync('./data/consignee_list.json', JSON.stringify(data))

    res.end(JSON.stringify(data))
}