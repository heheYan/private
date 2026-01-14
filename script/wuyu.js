let body = $response.body;

if (body) {
    let obj = JSON.parse(body);
    if (obj) {
        obj.message = 'success';
        obj.statusCode = 200;
    }
    body = JSON.stringify(obj);
}
$done({ body });