if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const l=e=>a(e,s),f={module:{uri:s},exports:d,require:l};i[s]=Promise.all(c.map((e=>f[e]||l(e)))).then((e=>(r(...e),d)))}}define(["./workbox-bc77d2d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/04/05/atricle1/index.html",revision:"5e8956cf3e10ed095257f320821d8b6d"},{url:"2022/04/26/artcle2/index.html",revision:"aebbc28afa074652aba886045c83c521"},{url:"2022/11/14/11-14/index.html",revision:"3d3c1fc924f44402afaf2921da956571"},{url:"about/index.html",revision:"e61c9d86bb20a5c0ad49861c72854846"},{url:"archives/2022/04/index.html",revision:"c758564a5f5c58218fb76eb232748d84"},{url:"archives/2022/11/index.html",revision:"66ff6c41fe1aad6824dac28eb750a6b7"},{url:"archives/2022/index.html",revision:"6f8994405a963afa278d3f48ab7beca9"},{url:"archives/index.html",revision:"091b691f42d28513fe548dbaad1dff3c"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"d2e68d9205c9258dacf81e9be0a9f568"},{url:"categories/热点事件/index.html",revision:"638b0d64958816754f41fc5935c6b03e"},{url:"css/index.css",revision:"da2f28d1eba2efee6af9decbd1d1a03f"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"0b98a066329fa8ba7fe25bf59cdd192f"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/alipay.jpg",revision:"d26afddd5f4689121e618619457c5621"},{url:"img/avatar.png",revision:"42b69554c8930fc07bd253ffc6da5d57"},{url:"img/avatar.svg",revision:"448fe86555f7ebfdd61cc5acc86f4455"},{url:"img/background.jpg",revision:"2c748e1058ce2c6e1159994770a79ee9"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/logo.svg",revision:"a7ecaa40bab722478cc3254896072275"},{url:"img/top_img.jpg",revision:"840f5fea8c1359a7a23aa7a8437f2fdf"},{url:"img/wechat.jpg",revision:"d26afddd5f4689121e618619457c5621"},{url:"index.html",revision:"f44b2c3cd9333ff7ccb2133f50bdd125"},{url:"js/main.js",revision:"396291332560459bcc82dcba71b971d8"},{url:"js/search/algolia.js",revision:"df1ac71726c61743d55c86bdd1e74a03"},{url:"js/search/local-search.js",revision:"06b6cdc4efe57a53987d1effde8431a4"},{url:"js/tw_cn.js",revision:"4c05755c2f8e23cb674c983981a9e104"},{url:"js/utils.js",revision:"64062a7dac10b70165ab319a5a09069c"},{url:"links/index.html",revision:"66eb31e02bdebb4b2c58e03bb4c153ac"},{url:"movies/index.html",revision:"0a5a986e98458ec51127cf97535386a0"},{url:"music/index.html",revision:"e0d3cc82f6205a7320482ccb0df29edc"},{url:"resources/index.html",revision:"bf606791a5fdaad73e9ea1cdf047c316"},{url:"tags/index.html",revision:"1d6fcd5a7c35e7eb4a291482d24efc13"},{url:"tags/社会议题/index.html",revision:"89a1e047ca3cde7e7fbd74e500c8cae6"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
