const fs = require('fs')

module.exports = (req, res) => {

    const changeId = req.body.id;
    const changeCount = req.body.count;
    // 读取文件
    const data = JSON.parse(fs.readFileSync('./data/shopcar_list.json', { encoding: 'utf-8' }));

    data.merchandise.forEach((v, i) => {
        if (v.data.goods_id == changeId) {

            v.count = changeCount

        }
    })

    // 写入文件
    fs.writeFileSync('./data/shopcar_list.json', JSON.stringify(data))

    res.end(JSON.stringify('data'))
}