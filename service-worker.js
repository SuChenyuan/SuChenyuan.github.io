if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const l=e=>c(e,s),f={module:{uri:s},exports:d,require:l};i[s]=Promise.all(a.map((e=>f[e]||l(e)))).then((e=>(r(...e),d)))}}define(["./workbox-bc77d2d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/04/05/atricle1/index.html",revision:"a02e2c14c0ef0227cbacbf3105ddee76"},{url:"2022/04/26/artcle2/index.html",revision:"b27ffc3d496c48b4f9ee56dbed1eaafa"},{url:"2022/11/14/11-14/index.html",revision:"3d2bf5e2b4a2133ee44485add8f855f6"},{url:"about/index.html",revision:"1aab8d89ccc2e122815d0002cb9eec83"},{url:"archives/2022/04/index.html",revision:"cfe47475e47ae90e114f69559eed9756"},{url:"archives/2022/11/index.html",revision:"9e7481f972febe977d396228980f0d94"},{url:"archives/2022/index.html",revision:"4749da38d3b7ff1ee8bffc073b986a4a"},{url:"archives/index.html",revision:"3cd1cfdffc42d3eac74ad70ab4bb92a3"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"604a349a52d78bbbc5df9a489c2228ef"},{url:"categories/公民意识/index.html",revision:"bc7ccf571663c63f0f4f42a186b1fc8b"},{url:"categories/热点事件/index.html",revision:"f8f1b7ee4c103e245f8975a07c299f2d"},{url:"css/index.css",revision:"65dbc48acc92e1f0441a856355618d8c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"02959d8f1fec46484b21d5a6e0f79d1c"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/alipay.jpg",revision:"d26afddd5f4689121e618619457c5621"},{url:"img/avatar.png",revision:"42b69554c8930fc07bd253ffc6da5d57"},{url:"img/avatar.svg",revision:"448fe86555f7ebfdd61cc5acc86f4455"},{url:"img/background.jpg",revision:"2c748e1058ce2c6e1159994770a79ee9"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/logo.svg",revision:"a7ecaa40bab722478cc3254896072275"},{url:"img/top_img.jpg",revision:"840f5fea8c1359a7a23aa7a8437f2fdf"},{url:"img/wechat.jpg",revision:"d26afddd5f4689121e618619457c5621"},{url:"index.html",revision:"751c8b6e920df6e5f06bf4b9d6afaf07"},{url:"js/main.js",revision:"396291332560459bcc82dcba71b971d8"},{url:"js/search/algolia.js",revision:"df1ac71726c61743d55c86bdd1e74a03"},{url:"js/search/local-search.js",revision:"06b6cdc4efe57a53987d1effde8431a4"},{url:"js/tw_cn.js",revision:"4c05755c2f8e23cb674c983981a9e104"},{url:"js/utils.js",revision:"64062a7dac10b70165ab319a5a09069c"},{url:"links/index.html",revision:"91125ab3931062485b295cf0111a2c80"},{url:"movies/index.html",revision:"069cb9790669ae27f08746e182957541"},{url:"music/index.html",revision:"0fc68cb9be31e25577a7ccb1172320cd"},{url:"resources/index.html",revision:"41e560aba7de3d9a5127447245887fc5"},{url:"tags/index.html",revision:"980e921f650a68d3e856433444c9ed5a"},{url:"tags/概念辨析/index.html",revision:"ee82e6357c264ece8477b85f2cc6d2c5"},{url:"tags/社会议题/index.html",revision:"ba3f412f7c275ce52636b04dd978bea6"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
