const fs = require('fs')

module.exports = (req,res) => {

    const delListId = req.body.id;

    // 读取文件
    const data = JSON.parse(fs.readFileSync('./data/shopcar_list.json', { encoding: 'utf-8' }));

    data.merchandise.forEach((v,i) => {
        if (v.data.goods_id == delListId) {
            data.merchandise.splice(i,1);
        }
    })

    // 写入文件
    fs.writeFileSync('./data/shopcar_list.json', JSON.stringify(data))

    res.end(JSON.stringify(data))
}