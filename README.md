# bun-vuessr-plugin
bunjs框架vue项目ssr插件，基于vue-router15.x

## 用法：
SSR方法接受5个参数：
url: 当前请求path
templatePath：模板路径
state：初始数据
serverManifestPath：server端使用的vue-ssr-server-bundle.json
clientManifestPath：client端使用的vue-ssr-client-bundle.json
callback: ssr执行完成的回调，参数是err和后端渲染后的html

```javascript
import SSR from 'bun-vuessr-plugin'
SSR({
    state,
    url: ctx.request.path,
    templatePath,
    clientManifestPath,
    serverManifestPath
    }, (err, renderHtml) => {
    	if (err) {
            if (err.code === 404) {
                ctx.status = 404;
                ctx.type = 'text/html';
                console.log(err);
                ctx.body = JSON.stringify(err);
            } else {
                ctx.status = 500;
                ctx.type = 'text/html';
                console.log(err);
                ctx.body = JSON.stringify(err);
            }
        }
	if (renderHtml) {
	    ctc.body = renderHtml;      
	}
});
```
