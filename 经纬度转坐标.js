//直接复制求助短信，运行脚本即可使用
var text = $clipboard.text;
if (text != undefined) {
  var getw = /北纬\:\d+\°\d+\′\d+\.\d+″/;
  var gete = /东经\:\d+\°\d+\′\d+\.\d+″/;
  var prew = text.match(getw);
  var pree = text.match(gete);
  if (prew != undefined && pree != undefined) {
    var nd = JSON.stringify(prew).slice(5, 7);
    var nm = JSON.stringify(prew).slice(8, 10);
    var ns = JSON.stringify(prew).slice(11, -3);
    var n = parseFloat(nd) + parseFloat(nm) / 60 + parseFloat(ns) / 3600;
    console.log(n);
    var ed = JSON.stringify(pree).slice(5, 8);
    var em = JSON.stringify(pree).slice(9, 11);
    var es = JSON.stringify(pree).slice(12, -3);
    var e = parseFloat(ed) + parseFloat(em) / 60 + parseFloat(es) / 3600;
    console.log(e);
    $http.request({
      method: "GET",
      url: `https://api.map.baidu.com/reverse_geocoding/v3/?ak=gQsCAgCrWsuN99ggSIjGn5nO&output=json&extensions_poi=1&location=${n}%2C${e}&coordtype=wgs84ll&extensions_poi=1&callback=showBaiduResult5`,
      header: {
        "Accept-Encoding": `gzip, deflate, br`,
        Accept: `*/*`,
        Connection: `keep-alive`,
        Referer: `https://www.piliang.tech/`,
        Host: `api.map.baidu.com`,
        "User-Agent": `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Safari/605.1.15`,
        "Accept-Language": `zh-CN,zh-Hans;q=0.9`
      },
      handler: function (resp) {
        var data = JSON.parse(resp.data.slice(35, -1));
        var result = data.result;
        var address = result.formatted_address;
        var pois = result.pois;
        var name = [];
        var number = pois.length;
        if (number > 5) {
          var num = 5;
        } else {
          num = number;
        }
        for (var i = 0; i < num; i++) {
          name.push(pois[i].name);
        }
        $push.schedule({
          title: "经纬度转坐标",
          body: "参考地址：" + address + "\n附近地点名称：" + name
        });
        console.log(result);
      }
    });
  } else {
    $push.schedule({
      title: "经纬度转坐标",
      body: "未查询到经纬度坐标"
    });
  }
} else {
  $push.schedule({
    title: "经纬度转坐标",
    body: "剪贴板为空"
  });
}
