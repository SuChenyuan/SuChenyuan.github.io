if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const l=e=>a(e,s),f={module:{uri:s},exports:d,require:l};i[s]=Promise.all(c.map((e=>f[e]||l(e)))).then((e=>(r(...e),d)))}}define(["./workbox-bc77d2d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/04/05/atricle1/index.html",revision:"5f9a02dd60c83aee1c280574a6e552f5"},{url:"2022/04/26/artcle2/index.html",revision:"caa98ba3885c1ff740007b042a8169f9"},{url:"about/index.html",revision:"aeac771ad3f664c02904fe58ceb3cf8a"},{url:"archives/2022/04/index.html",revision:"1da18b0afe6db23e0ac75d1045182036"},{url:"archives/2022/index.html",revision:"3b7d6ac0dc09d79a3e6e3e1ddaf466d2"},{url:"archives/index.html",revision:"a5c78dc232a1d767f629b805b98f4ba1"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"7278f5fd7e8d5b796b543c5abca671da"},{url:"categories/热点事件/index.html",revision:"05acddbe025dfe17f6987f0e880d5e98"},{url:"css/index.css",revision:"65dbc48acc92e1f0441a856355618d8c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"7a6f2948c509c923aa85b59c513f1fdf"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/alipay.jpg",revision:"d26afddd5f4689121e618619457c5621"},{url:"img/avatar.png",revision:"42b69554c8930fc07bd253ffc6da5d57"},{url:"img/avatar.svg",revision:"448fe86555f7ebfdd61cc5acc86f4455"},{url:"img/background.jpg",revision:"2c748e1058ce2c6e1159994770a79ee9"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/logo.svg",revision:"a7ecaa40bab722478cc3254896072275"},{url:"img/top_img.jpg",revision:"840f5fea8c1359a7a23aa7a8437f2fdf"},{url:"img/wechat.jpg",revision:"d26afddd5f4689121e618619457c5621"},{url:"index.html",revision:"97702da40242b9c744eba8f52241ace4"},{url:"js/main.js",revision:"396291332560459bcc82dcba71b971d8"},{url:"js/search/algolia.js",revision:"df1ac71726c61743d55c86bdd1e74a03"},{url:"js/search/local-search.js",revision:"06b6cdc4efe57a53987d1effde8431a4"},{url:"js/tw_cn.js",revision:"4c05755c2f8e23cb674c983981a9e104"},{url:"js/utils.js",revision:"64062a7dac10b70165ab319a5a09069c"},{url:"links/index.html",revision:"73534fdccb5eea1963a2cbe5ff5e68b7"},{url:"movies/index.html",revision:"c286fecdd1bc9e9aa69bd3fd3dfe3dae"},{url:"music/index.html",revision:"ef0c722d1f90302cc0ac3ad76589443c"},{url:"resources/index.html",revision:"835faf89c2c4ed2e0f65e086ed9e0712"},{url:"tags/index.html",revision:"d08e74b8d8d72a4a1af2ec1726697bf2"},{url:"tags/社会议题/index.html",revision:"b53b129a41a22594f39f63cd186f86e8"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
