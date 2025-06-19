/*
尝试去广告 https://sdk.huimiaokeji.com/appApi/app/free/ads/v2/conf
 */
let body = $response.body;

if (body) {
    let obj = JSON.parse(body);
    if (obj.data) {
        obj.data.forEach(item => {
            item.nextAdvertId = null;
            item.countPoints = 0;
            item.nextAdvertType = null;
        })
    }
    body = JSON.stringify(obj);
}
$done({body});