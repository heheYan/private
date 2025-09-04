let body = $response.body;

if (body) {
    let obj = JSON.parse(body);
    if (obj) {
        obj.is_vip = 1;
        obj.vip_end_time = 1788105600;
        obj.vip_level = 9;
        obj.vip_start_time = 1756656000;
    }
    body = JSON.stringify(obj);
}
$done({ body });