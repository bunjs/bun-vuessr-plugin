const {
    createBundleRenderer
} = require('vue-server-renderer');

const SSR = ({ state, url, templatePath, serverManifestPath, clientManifestPath }, cb) => {
	const template = require('fs').readFileSync(templatePath, 'utf-8');
	const clientManifest = require(clientManifestPath);
	const renderer = createBundleRenderer(
	    serverManifestPath,
	    {
	        runInNewContext: false, // 推荐
	        template, // （可选）页面模板
	        clientManifest, // （可选）客户端构建 manifest
	        inject: false
	    }
	);
	const context = {
	    state,
	    url
	};
	process.SERVERBUILD = true;
	renderer.renderToString(context, (err, html) => {
		process.SERVERBUILD = false;
		cb(err, html);
	})
}
module.exports = SSR;
