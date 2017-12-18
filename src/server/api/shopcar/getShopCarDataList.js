const fs = require('fs')

module.exports = (req, res) => {

    // 读取数据
    const data = JSON.parse(fs.readFileSync('./data/shopcar_list.json', { encoding: 'utf-8' }));

    // 返回
    res.end(JSON.stringify(data))
}