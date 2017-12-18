const fs = require('fs')

module.exports = (req, res) => {
    // req.body   接受post方式传参
    // res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' })

    // 读取文件
    var admin = fs.readFileSync('./data/user_list.json', { encoding: 'utf-8' })
    // 文件中所有数据
    admin = JSON.parse(admin)
    console.log(admin)
    for (let i = 0; i < admin.list.length; i++) {
        if (admin.list[i].user == req.body.user) {
            res.end(JSON.stringify({
                "msg": "error"
            }));
            return;
        }
    }
    // 添加
    admin.list.push(req.body)

    // 写入文件
    fs.writeFileSync('./data/user_list.json', JSON.stringify(admin))
    res.end(JSON.stringify({
        "msg": "success"
    }));
}