function getCookie(tar) {
    let val;

    document.cookie.split('; ').forEach((v, i) => {
        let _key = v.split('=');

        if (_key[0] == tar) {
            
            val = _key[1]

        } else {
            val = null
        }
    })

    return val
}
function setCookie(a, b) {
    if (a && b) document.cookie = a + '=' + b;
}
function delCookie (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() -1);
    var cval = getCookie(name);
    // cookie 不等于空
    if (cval != null) {

        document.cookie = name + '=' + cval + ";expires=" + exp.toGMTString();
        
    }
}

export { getCookie, setCookie, delCookie }