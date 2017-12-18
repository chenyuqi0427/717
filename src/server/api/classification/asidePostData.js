const fs = require('fs')

module.exports = (req, res) => {

    const sonid = req.body.sonid

    switch(sonid){
        case '2' :
        let data2 = fs.readFileSync('./data/asidePostList/sonid=2.json', { encoding: 'utf-8' });
        res.end(JSON.stringify(data2));
        break;

        case '3' :
        let data3 = fs.readFileSync('./data/asidePostList/sonid=3.json', { encoding: 'utf-8' });
        res.end(JSON.stringify(data3));
        break;

        case '4' :
        let data4 = fs.readFileSync('./data/asidePostList/sonid=4.json', { encoding: 'utf-8' });
        res.end(JSON.stringify(data4));
        break;

        case '5' :
        let data5 = fs.readFileSync('./data/asidePostList/sonid=5.json', { encoding: 'utf-8' });
        res.end(JSON.stringify(data5));
        break;

        case '6' :
        let data6 = fs.readFileSync('./data/asidePostList/sonid=6.json', { encoding: 'utf-8' });
        res.end(JSON.stringify(data6));
        break;

        case '7' :
        let data7 = fs.readFileSync('./data/asidePostList/sonid=7.json', { encoding: 'utf-8' });
        res.end(JSON.stringify(data7));
        break;

        case '8' :
        let data8 = fs.readFileSync('./data/asidePostList/sonid=8.json', { encoding: 'utf-8' });
        res.end(JSON.stringify(data8));
        break;

        case '9' :
        let data9 = fs.readFileSync('./data/asidePostList/sonid=9.json', { encoding: 'utf-8' });
        res.end(JSON.stringify(data9));
        break;
        
        default :
        break;

    }

}