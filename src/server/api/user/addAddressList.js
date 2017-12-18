const fs = require('fs')

module.exports = (req, res) => {
    // 读取文件
    var data = fs.readFileSync('./data/consignee_list.json', { encoding: 'utf-8' })
    data = JSON.parse(data)

    // 添加数据
    data.push(req.body)

    // 写入文件
    fs.writeFileSync('./data/consignee_list.json', JSON.stringify(data))

    res.end(JSON.stringify({
        msg: 'success'
    }))
}