if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const l=e=>c(e,s),n={module:{uri:s},exports:d,require:l};i[s]=Promise.all(a.map((e=>n[e]||l(e)))).then((e=>(r(...e),d)))}}define(["./workbox-bc77d2d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/04/05/atricle1/index.html",revision:"381eae62bbc845f7f4d45d18fc8bd9b1"},{url:"2022/04/26/artcle2/index.html",revision:"c40c1cb13233f5722620592d93f5c23d"},{url:"about/index.html",revision:"3e46c3c7d45789dbdf3f7095161edba2"},{url:"archives/2022/04/index.html",revision:"7d4859791aa8a801129e51e419960872"},{url:"archives/2022/index.html",revision:"15eefcdfb459eed43c789194902cf0de"},{url:"archives/index.html",revision:"0a15878e39829195f1d8991ae4b6eb3c"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"8d3ba3f8ca4ce0e17acc9146f7840b42"},{url:"categories/热点事件/index.html",revision:"cd58c517febd19cd3e8f1053b3159818"},{url:"css/index.css",revision:"da2f28d1eba2efee6af9decbd1d1a03f"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"d1cc2877f909bdd8c38f746f19c5681e"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/alipay.jpg",revision:"d26afddd5f4689121e618619457c5621"},{url:"img/avatar.png",revision:"42b69554c8930fc07bd253ffc6da5d57"},{url:"img/avatar.svg",revision:"448fe86555f7ebfdd61cc5acc86f4455"},{url:"img/background.jpg",revision:"2c748e1058ce2c6e1159994770a79ee9"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/logo.svg",revision:"a7ecaa40bab722478cc3254896072275"},{url:"img/top_img.jpg",revision:"840f5fea8c1359a7a23aa7a8437f2fdf"},{url:"img/wechat.jpg",revision:"d26afddd5f4689121e618619457c5621"},{url:"index.html",revision:"6381fe9e21cf6206bec7530afcd5ef6a"},{url:"js/main.js",revision:"396291332560459bcc82dcba71b971d8"},{url:"js/search/algolia.js",revision:"df1ac71726c61743d55c86bdd1e74a03"},{url:"js/search/local-search.js",revision:"06b6cdc4efe57a53987d1effde8431a4"},{url:"js/tw_cn.js",revision:"4c05755c2f8e23cb674c983981a9e104"},{url:"js/utils.js",revision:"64062a7dac10b70165ab319a5a09069c"},{url:"links/index.html",revision:"3d3b98fce1e07a4d6c3d8402b3dc3f6a"},{url:"movies/index.html",revision:"1abebd38c356cd74cb6847cefad43c8a"},{url:"music/index.html",revision:"0046851f47d518603ffa6a4099628f14"},{url:"resources/index.html",revision:"3445ecd2817fa042ed8567836cc3543b"},{url:"tags/index.html",revision:"14d8ce56cd92fcd68ee140a4f9b2567d"},{url:"tags/社会议题/index.html",revision:"5716a32b44282e2e3bb04c97b928c55f"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
