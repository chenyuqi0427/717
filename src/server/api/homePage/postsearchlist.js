const fs = require('fs')

module.exports = (req, res) => {
    // 读取文件
    var data = fs.readFileSync('./data/searchdata_list.json', { encoding: 'utf-8' })

    data = JSON.parse(data)
    let arr = [];

    data.forEach((v,i) => {
        if (v.goods_name.indexOf(req.body.val) != -1) {
            console.log(v)
            arr.push(v)
        }
    })

    res.end(JSON.stringify(arr))
}