let body = $response.body;

if (body) {
    let obj = JSON.parse(body);
    if (obj.data) {
        obj.data.isAuth = "1";
        obj.data.isVip = 1;
    }
    body = JSON.stringify(obj);
}
$done({ body });