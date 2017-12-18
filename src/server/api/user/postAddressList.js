const fs = require('fs')

module.exports = (req, res) => {
    // 读取文件
    var data = fs.readFileSync('./data/consignee_list.json', { encoding: 'utf-8' })

    data = JSON.parse(data)

    res.end(JSON.stringify(data))
}