const fs = require('fs')
const jwt = require('jsonwebtoken')

module.exports = (req, res) => {

    // res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' })
    // // 读取文件
    var admin = fs.readFileSync('./data/user_list.json', { encoding: 'utf-8' })
    admin = JSON.parse(admin)

    // req.body   接受post方式传参
    for (let i = 0; i < admin.list.length; i++) {
        if (admin.list[i].user == req.body.user && admin.list[i].pasd == req.body.pasd) {
            //token 加密
            let token = jwt.sign(req.body, '1508B', { expiresIn: 4 * 30 })
            var obj = {
                "code": 1,
                "token": token,
                "msg": "success"
            }
            res.end(JSON.stringify(obj));
            return;
        }
    }
    res.end(JSON.stringify({
        "msg": "error"
    }));

}