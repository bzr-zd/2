var rule = {
    title: '百忙无果[官]',
    host: 'https://pianku.api.%6d%67%74%76.com',
    homeUrl: '',
    searchUrl: 'https://mobileso.bz.%6d%67%74%76.com/msite/search/v2?q=**&pn=fypage&pc=10',
    detailUrl: 'https://pcweb.api.mgtv.com/episode/list?page=1&size=50&video_id=fyid',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    multi: 1,
    url: '/rider/list/pcweb/v3?platform=pcweb&channelId=fyclass&pn=fypage&pc=80&hudong=1&_support=10000000&{{fl.kind}}&{{fl.area}}',
    filter_url: 'year={{fl.year or "all"}}&sort={{fl.sort or "all"}}&chargeInfo={{fl.chargeInfo or "all"}}',
    headers: {
        'User-Agent': 'PC_UA'
    },
    timeout: 5000,
    class_name: '电影&电视剧&综艺&动漫&纪录片&教育&少儿',
    class_url: '3&2&1&50&51&115&10',
    filter: {
        "1": [
            {"key": "chargeInfo", "name": "付费类型", "value": [{"n": "全部", "v": "all"}, {"n": "免费", "v": "b1"}, {"n": "VIP", "v": "b2"}, {"n": "VIP用券", "v": "b3"}, {"n": "付费点播", "v": "b4"}]},
            {"key": "sort", "name": "排序", "value": [{"n": "最新", "v": "c1"}, {"n": "最热", "v": "c2"}, {"n": "知乎高分", "v": "c4"}]},
            {"key": "year", "name": "年代", "value": [{"n": "全部", "v": "all"}, {"n": "2025", "v": "2025"}, {"n": "2024", "v": "2024"}, {"n": "2023", "v": "2023"}, {"n": "2022", "v": "2022"}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {"n": "2019", "v": "2019"}, {"n": "2018", "v": "2018"}, {"n": "2017", "v": "2017"}, {"n": "2016", "v": "2016"}, {"n": "2015", "v": "2015"}]}
        ],
        "2": [
            {"key": "chargeInfo", "name": "付费类型", "value": [{"n": "全部", "v": "all"}, {"n": "免费", "v": "b1"}, {"n": "VIP", "v": "b2"}, {"n": "VIP用券", "v": "b3"}, {"n": "付费点播", "v": "b4"}]},
            {"key": "sort", "name": "排序", "value": [{"n": "最新", "v": "c1"}, {"n": "最热", "v": "c2"}, {"n": "知乎高分", "v": "c4"}]},
            {"key": "year", "name": "年代", "value": [{"n": "全部", "v": "all"}, {"n": "2025", "v": "2025"}, {"n": "2024", "v": "2024"}, {"n": "2023", "v": "2023"}, {"n": "2022", "v": "2022"}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {"n": "2019", "v": "2019"}, {"n": "2018", "v": "2018"}]}
        ],
        "3": [
            {"key": "chargeInfo", "name": "付费类型", "value": [{"n": "全部", "v": "all"}, {"n": "免费", "v": "b1"}, {"n": "VIP", "v": "b2"}, {"n": "VIP用券", "v": "b3"}, {"n": "付费点播", "v": "b4"}]},
            {"key": "sort", "name": "排序", "value": [{"n": "最新", "v": "c1"}, {"n": "最热", "v": "c2"}, {"n": "知乎高分", "v": "c4"}]},
            {"key": "year", "name": "年代", "value": [{"n": "全部", "v": "all"}, {"n": "2025", "v": "2025"}, {"n": "2024", "v": "2024"}, {"n": "2023", "v": "2023"}, {"n": "2022", "v": "2022"}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {"n": "2019", "v": "2019"}, {"n": "2018", "v": "2018"}]}
        ],
        "50": [
            {"key": "chargeInfo", "name": "付费类型", "value": [{"n": "全部", "v": "all"}, {"n": "免费", "v": "b1"}, {"n": "VIP", "v": "b2"}, {"n": "VIP用券", "v": "b3"}, {"n": "付费点播", "v": "b4"}]},
            {"key": "sort", "name": "排序", "value": [{"n": "最新", "v": "c1"}, {"n": "最热", "v": "c2"}, {"n": "知乎高分", "v": "c4"}]},
            {"key": "year", "name": "年代", "value": [{"n": "全部", "v": "all"}, {"n": "2025", "v": "2025"}, {"n": "2024", "v": "2024"}, {"n": "2023", "v": "2023"}, {"n": "2022", "v": "2022"}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}]}
        ],
        "51": [
            {"key": "chargeInfo", "name": "付费类型", "value": [{"n": "全部", "v": "all"}, {"n": "免费", "v": "b1"}, {"n": "VIP", "v": "b2"}, {"n": "VIP用券", "v": "b3"}, {"n": "付费点播", "v": "b4"}]},
            {"key": "sort", "name": "排序", "value": [{"n": "最新", "v": "c1"}, {"n": "最热", "v": "c2"}, {"n": "知乎高分", "v": "c4"}]},
            {"key": "year", "name": "年代", "value": [{"n": "全部", "v": "all"}, {"n": "2025", "v": "2025"}, {"n": "2024", "v": "2024"}, {"n": "2023", "v": "2023"}, {"n": "2022", "v": "2022"}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}]}
        ],
        "115": [
            {"key": "chargeInfo", "name": "付费类型", "value": [{"n": "全部", "v": "all"}, {"n": "免费", "v": "b1"}, {"n": "VIP", "v": "b2"}, {"n": "VIP用券", "v": "b3"}, {"n": "付费点播", "v": "b4"}]},
            {"key": "sort", "name": "排序", "value": [{"n": "最新", "v": "c1"}, {"n": "最热", "v": "c2"}, {"n": "知乎高分", "v": "c4"}]},
            {"key": "year", "name": "年代", "value": [{"n": "全部", "v": "all"}, {"n": "2025", "v": "2025"}, {"n": "2024", "v": "2024"}, {"n": "2023", "v": "2023"}, {"n": "2022", "v": "2022"}, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}]}
        ]
    },
    limit: 20,
    play_parse: true,
    lazy: $js.toString(() => {
        let apiList = [
       'http://php.xuan666.icu/高兴/api101.php?url=',
        'http://niubi.69mini.com/api/?key=h28y9WWIgO2BU25bpW&url=',
        'http://116.62.133.86:56682/api/?key=oDE5dyA0Xosa3OtRzV&url=',
        'http://125.208.22.184:1667/api/?key=LYFNmrDBRZH9w2v0Z9&url=',
        'http://sspa8.top:8100/api/?key=智云&url=',
        "http://1.94.244.214:8889/geturl?url=",
        'http://111.170.156.122:8989/api/?key=1Tuwrl1wuRH2mHyyWB&url=',
         "http://mg.itufm.top/mg.php?url=",
         'https://jx.xmflv.com/?url=',
         "http://shybot.top/v2/video/jx/?shykey=4595a71a4e7712568edcfa43949236b42fcfcb04997788ebe7984d6da2c6a51c&url=",
         "http://xiayede.dpdns.org/xiaye.php?url="
        ];
        
        let videoUrl = input.split("?")[0];
        let success = false;
        let playUrl = '';
        
        for (let i = 0; i < apiList.length; i++) {
            try {
                let api = apiList[i] + videoUrl;
                print("尝试解析接口 " + (i + 1));
                
                let response = fetch(api, {
                    method: 'get',
                    headers: {
                        'User-Agent': 'okhttp/3.14.9'
                    }
                });
                
                let data = JSON.parse(response);
                playUrl = data.url || data.playUrl || data.data;
                
                if (playUrl && playUrl.indexOf("http") > -1) {
                    success = true;
                    print("解析接口 " + (i + 1) + " 成功");
                    break;
                }
            } catch (e) {
                print("解析接口 " + (i + 1) + " 失败");
                continue;
            }
        }
        
        if (success && playUrl) {
            input = {
                header: {'User-Agent': ''},
                parse: 0,
                url: playUrl,
                jx: 0,
                danmaku: ''
            };
        } else {
            input = {
                header: {'User-Agent': ''},
                parse: 0,
                url: videoUrl,
                jx: 1,
                danmaku: ''
            };
        }
    }),
    推荐: '.list_item;img&&alt;img&&src;a&&Text;a&&data-float',
    一级: 'json:data.hitDocs;title;img;updateInfo||rightCorner.text;playPartId',
    二级: $js.toString(() => {
        fetch_params.headers.Referer = "https://www.mgtv.com";
        fetch_params.headers["User-Agent"] = MOBILE_UA;
        pdfh = jsp.pdfh;
        pdfa = jsp.pdfa;
        pd = jsp.pd;
        VOD = {};
        let d = [];
        let html = request(input);
        let json = JSON.parse(html);
        let host = "https://www.mgtv.com";
        let ourl = json.data.list.length > 0 ? json.data.list[0].url : json.data.series[0].url;
        if (!/^http/.test(ourl)) {
            ourl = host + ourl
        }
        html = request(ourl);
        if (html.includes("window.location =")) {
            ourl = pdfh(html, "meta[http-equiv=refresh]&&content").split("url=")[1];
            html = request(ourl)
        }
        try {
            let details = pdfh(html, ".m-details&&Html").replace(/h1>/, "h6>").replace(/div/g, "br");
            let actor = "", director = "", time = "";
            if (/播出时间/.test(details)) {
                actor = pdfh(html, "p:eq(5)&&Text").substr(0, 25);
                director = pdfh(html, "p:eq(4)&&Text");
                time = pdfh(html, "p:eq(3)&&Text")
            } else {
                actor = pdfh(html, "p:eq(4)&&Text").substr(0, 25);
                director = pdfh(html, "p:eq(3)&&Text");
                time = "已完结"
            }
            let _img = pd(html, ".video-img&&img&&src");
            let JJ = pdfh(html, ".desc&&Text").split("简介：")[1];
            VOD.vod_name = pdfh(html, ".vt-txt&&Text");
            VOD.type_name = pdfh(html, "p:eq(0)&&Text").substr(0, 6);
            VOD.vod_area = pdfh(html, "p:eq(1)&&Text");
            VOD.vod_actor = actor;
            VOD.vod_director = director;
            VOD.vod_remarks = time;
            VOD.vod_pic = _img;
            VOD.vod_content = JJ;
            if (!VOD.vod_name) { VOD.vod_name = VOD.type_name; }
        } catch (e) {
            log("获取影片信息发生错误:" + e.message)
        }

        function getRjpg(imgUrl, xs) {
            xs = xs || 3;
            let picSize = /jpg_/.test(imgUrl) ? imgUrl.split("jpg_")[1].split(".")[0] : false;
            if (picSize) {
                let a = parseInt(picSize.split("x")[0]) * xs;
                let b = parseInt(picSize.split("x")[1]) * xs;
                return imgUrl.replace(imgUrl.split("jpg_")[1], a + "x" + b + ".jpg")
            }
            return imgUrl;
        }

        if (json.data.total === 1 && json.data.list.length === 1) {
            let data = json.data.list[0];
            d.push({title: data.t4, desc: data.t2, pic_url: getRjpg(data.img), url: "https://www.mgtv.com" + data.url})
        } else if (json.data.list.length > 1) {
            for (let i = 1; i <= json.data.total_page; i++) {
                if (i > 1) { json = JSON.parse(fetch(input.replace("page=1", "page=" + i), {})) }
                json.data.list.forEach(function(data) {
                    if (data.isIntact == "1") {
                        d.push({title: data.t4, desc: data.t2, pic_url: getRjpg(data.img), url: "https://www.mgtv.com" + data.url})
                    }
                })
            }
        } else {
            print(input + "暂无片源")
        }
        VOD.vod_play_from = "芒果TV";
        VOD.vod_play_url = d.map(function(it) { return it.title + "$" + it.url }).join("#");
        setResult(d);
    }),
    搜索: $js.toString(() => {
        fetch_params.headers.Referer = "https://www.mgtv.com";
        fetch_params.headers["User-Agent"] = MOBILE_UA;
        let d = [];
        let html = request(input);
        let json = JSON.parse(html);
        json.data.contents.forEach(function(data) {
            if (data.type && data.type == 'media') {
                let item = data.data[0];
                if (item.source === "imgo") {
                    let img = item.img || '';
                    let fyclass = '';
                    try { fyclass = item.rpt.match(/idx=(.*?)&/)[1] + '$'; } catch (e) { fyclass = ''; }
                    d.push({
                        title: item.title.replace(/<B>|<\/B>/g, ''),
                        img: img,
                        content: '',
                        desc: item.desc.join(','),
                        url: fyclass + item.url.match(/.*\/(.*?)\.html/)[1]
                    })
                }
            }
        });
        setResult(d);
    }),
}
