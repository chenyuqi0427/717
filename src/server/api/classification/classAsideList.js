var queryApi = require('../../data/queryApi.js')

module.exports = (req, res) => {
    const classAsidePath = '/mall/category/topCategory'

    queryApi(classAsidePath, req.body, req.method)

    .then(data => {

        res.end(JSON.stringify({
            data: data
        }))
    })
}