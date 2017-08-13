export function MP() {
    return new Promise(function(resolve, reject) {
        window.onload = function() {
            //resolve成功时调用
            resolve(BMap);
        }
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://api.map.baidu.com/api?v=2.0&ak=Zhdfr5Gx6f3nAhDNqTaTk16bKUasot5k&callback=init";
        script.onerror = function() {
            reject();
        };
        document.head.appendChild(script);
    })
}
//vue中通过src引进来的页面 获取不到对象?
//window.onload等dom树加载完成后,在调用获取BMap