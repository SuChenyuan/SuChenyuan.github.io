if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const l=e=>c(e,s),n={module:{uri:s},exports:d,require:l};i[s]=Promise.all(a.map((e=>n[e]||l(e)))).then((e=>(r(...e),d)))}}define(["./workbox-bc77d2d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/04/05/atricle1/index.html",revision:"22257201801399d069896c7b832af96c"},{url:"2022/04/26/artcle2/index.html",revision:"da63c21183378d4c16aee9d8b69bddfe"},{url:"about/index.html",revision:"e3ca64bd4a40640d0a0fbeb64fe4571c"},{url:"archives/2022/04/index.html",revision:"46f906d3e60684bb3e7c2d98b0293336"},{url:"archives/2022/index.html",revision:"946a63648f288fdc15d29dc51cc09d58"},{url:"archives/index.html",revision:"02950b2cbc24abcbab24de17f3eba9c1"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"c064026c7729ccd1edb73742850d3349"},{url:"categories/热点事件/index.html",revision:"65376fd801ac2b45941e1afdd015f6b4"},{url:"css/index.css",revision:"395ac5bd620ca37ed82e38e9a86c3d89"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"gallery/index.html",revision:"9aa7fc705fa9e1af9c41b84e25e70591"},{url:"img/404.jpg",revision:"4f2c360907c294925aafbb236dc845cc"},{url:"img/alipay.jpg",revision:"d26afddd5f4689121e618619457c5621"},{url:"img/avatar.png",revision:"42b69554c8930fc07bd253ffc6da5d57"},{url:"img/avatar.svg",revision:"448fe86555f7ebfdd61cc5acc86f4455"},{url:"img/background.jpg",revision:"2c748e1058ce2c6e1159994770a79ee9"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"d686d00c300a4bc90ed91261d21a1919"},{url:"img/logo.svg",revision:"a7ecaa40bab722478cc3254896072275"},{url:"img/top_img.jpg",revision:"840f5fea8c1359a7a23aa7a8437f2fdf"},{url:"img/wechat.jpg",revision:"d26afddd5f4689121e618619457c5621"},{url:"index.html",revision:"938812a2da2eccaebb9d170bb7420ab1"},{url:"js/main.js",revision:"396291332560459bcc82dcba71b971d8"},{url:"js/search/algolia.js",revision:"df1ac71726c61743d55c86bdd1e74a03"},{url:"js/search/local-search.js",revision:"06b6cdc4efe57a53987d1effde8431a4"},{url:"js/tw_cn.js",revision:"4c05755c2f8e23cb674c983981a9e104"},{url:"js/utils.js",revision:"64062a7dac10b70165ab319a5a09069c"},{url:"links/index.html",revision:"57d2b8dfa76b301ebc0af3e6feac39f2"},{url:"movies/index.html",revision:"f340b954efd5095c4f973e4bfe9002bf"},{url:"music/index.html",revision:"d755277ca65b4f948cfc16efb3ca0640"},{url:"resources/index.html",revision:"097f3d2ca87f665cd2e9603f9ff2e49d"},{url:"tags/index.html",revision:"894eb8d523b1baff649f8fe0cc7a5169"},{url:"tags/社会议题/index.html",revision:"1b2580666ea0f0fca6c676eb426b7eab"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
