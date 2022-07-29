"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1706],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(r),h=a,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||s;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<s;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6863:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const s={sidebar_position:5},o="4.5 Addresses",i={unversionedId:"04coin-set-model/addresses",id:"04coin-set-model/addresses",title:"4.5 Addresses",description:"Puzzle hashes in Chia are 32-byte values. These can be displayed in hex, but this can lead to errors due to typos, and a poor user experience. Therefore, Chia displays puzzle hashes in a custom format called an address. The encoding scheme used is bech32m.",source:"@site/docs/04coin-set-model/addresses.md",sourceDirName:"04coin-set-model",slug:"/04coin-set-model/addresses",permalink:"/zh/docs/04coin-set-model/addresses",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/04coin-set-model/addresses.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4.4 Spend Bundles",permalink:"/zh/docs/04coin-set-model/spend_bundles"},next:{title:"4.6 Coin Set vs UTXO",permalink:"/zh/docs/04coin-set-model/coin_set_vs_utxo"}},c={},d=[],l={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"45-addresses"},"4.5 Addresses"),(0,a.kt)("p",null,"Puzzle hashes in Chia are 32-byte values. These can be displayed in hex, but this can lead to errors due to typos, and a poor user experience. Therefore, Chia displays puzzle hashes in a custom format called an ",(0,a.kt)("em",{parentName:"p"},"address"),". The encoding scheme used is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki"},"bech32m"),"."),(0,a.kt)("p",null,"Address: ",(0,a.kt)("inlineCode",{parentName:"p"},"xch1pwrzyy35qxk0rz76jl0648fvt6ql905vwd7zs0scjqant5sf25lql4hz3z")),(0,a.kt)("p",null,"Puzzle hash: ",(0,a.kt)("inlineCode",{parentName:"p"},"0b8622123401acf18bda97dfaa9d2c5e81f2be8c737c283e18903b35d209553e")),(0,a.kt)("p",null,"An address is just a different way to display the puzzle hash, which contains some additional data (checksum) at the end to find errors. Puzzle hashes can be converted to addresses and vice versa. "),(0,a.kt)("p",null,"bech32m addresses have several features which make them attractive:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki#specification"},"Checksum"),", which makes addresses invalid if only one character is modified."),(0,a.kt)("li",{parentName:"ul"},"An XCH prefix to distinguish from other cryptocurrencies."),(0,a.kt)("li",{parentName:"ul"},"Shorter than hex, and more compact than base58 addresses (and fit better in QR codes)")),(0,a.kt)("p",null,"The blockchain consensus code does not operate with addresses; addresses are only used in user facing applications."),(0,a.kt)("p",null,"Spacescan.io has a handy bi-directional ",(0,a.kt)("a",{parentName:"p",href:"https://www.spacescan.io/xch/tools/puzzlehashconvertor"},"bech32m <",">"," puzzle hash converter"),"."))}p.isMDXComponent=!0}}]);