var queryApi = require('../../data/queryApi.js')
const fs = require('fs')
module.exports = (req, res) => {
    const homepageScrollPath = '/mall/index/getGoodsChannel'

    queryApi(homepageScrollPath, req.body, req.method)

        .then(data => {
            res.end(JSON.stringify({
                id: req.body.channel_id,
                data: data
            }))
        })
}