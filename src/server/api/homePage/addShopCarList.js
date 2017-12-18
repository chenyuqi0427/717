const fs = require('fs')

module.exports = (req, res) => {

    // 读取数据
    let data = JSON.parse(fs.readFileSync('./data/shopcar_list.json', { encoding: 'utf-8' }));
    // 获取判断id
    const ifId = req.body.id;
    // 添加数据
    
    let flag = false;

    data.merchandise.forEach((v, i) => {
        if (v.data.goods_id == ifId) {
            // 找到重复值
            v.count++
            flag = true
        }
    })

    if (!flag) {
        data.merchandise.push(req.body)
    }


    // 写入数据
    fs.writeFileSync('./data/shopcar_list.json', JSON.stringify(data))

    res.end(JSON.stringify(data))
}