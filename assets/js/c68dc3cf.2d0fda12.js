"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[9350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(r),u=o,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||n;return r?a.createElement(m,i(i({ref:t},d),{},{components:r})):a.createElement(m,i({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3682:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:3},i="5.3 Block rewards",l={unversionedId:"05block-validation/block_rewards",id:"05block-validation/block_rewards",title:"5.3 Block rewards",description:"In Chia, the issuance schedule, also referred to as the block reward schedule, determines how many XCH get created with every block that gets farmed on the network.",source:"@site/docs/05block-validation/block_rewards.md",sourceDirName:"05block-validation",slug:"/05block-validation/block_rewards",permalink:"/docs/05block-validation/block_rewards",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/05block-validation/block_rewards.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"5.2 Block format",permalink:"/docs/05block-validation/block_format"},next:{title:"6.1 Mempool",permalink:"/docs/06mempool/mempool"}},s={},c=[{value:"Strategic Reserve (pre-farm)",id:"strategic-reserve-pre-farm",level:2},{value:"Halvings",id:"halvings",level:2},{value:"Reward claims",id:"reward-claims",level:2},{value:"Farmer vs Pool reward",id:"farmer-vs-pool-reward",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"53-block-rewards"},"5.3 Block rewards"),(0,o.kt)("p",null,"In Chia, the issuance schedule, also referred to as the block reward schedule, determines how many XCH get created with every block that gets farmed on the network.\n1 XCH, or 1 Chia, is equivalent to 1,000,000,000,000 or 1x10^12 or 1 trillion mojos.\nAll consensus code uses mojos; XCH is used as a conveniently larger unit."),(0,o.kt)("h2",{id:"strategic-reserve-pre-farm"},"Strategic Reserve (pre-farm)"),(0,o.kt)("p",null,"The first block of the network pays out 21 million XCH, divided into a 1/8 coin and a 7/8 coin, to an address that Chia Network Inc controls. The purpose and future usage of the funds is described in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.chia.net/2021/02/10/chia-businesss-whitepaper.html"},"business whitepaper"),"."),(0,o.kt)("h2",{id:"halvings"},"Halvings"),(0,o.kt)("p",null,"All other coins go through a formula, where the block reward starts at 2 XCH per block, and halves every 3 years, a total of 4 times. The exact block at which halvings occur is ",(0,o.kt)("inlineCode",{parentName:"p"},"32 * 6 * 24 * 365 * 3 * x"),", where x is the index of the halving, starting at 1."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"0-3 years: 2 XCH\n3-6 years: 1 XCH\n6-9 years: 0.5 XCH\n9-12 years: 0.25 XCH\n12+: 0.125 XCH\n")),(0,o.kt)("p",null,"After the start of year 12, 0.125 XCH is created in perpetuity."),(0,o.kt)("h2",{id:"reward-claims"},"Reward claims"),(0,o.kt)("p",null,"In most cryptocurrencies, the creator of a block pays themselves based on the ",(0,o.kt)("em",{parentName:"p"},"current")," block reward. In Chia, there is a slight difference -- block rewards are paid in a ",(0,o.kt)("em",{parentName:"p"},"future")," block, depending on whether the farmer's block is a transaction block or not."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Option 1: If the farmer's block is a transaction block, the farmer will get paid on the next transaction block."),(0,o.kt)("li",{parentName:"ul"},"Option 2: If the farmer's block is not a transaction block, the farmer will get paid on the next transaction block after the next transaction block (next next).")),(0,o.kt)("p",null,"Fees are also paid at the same time. Let's say a farmer creates a transaction block with 4.9 XCH of outputs, but 5 XCH of inputs (excluding reward claims). In this case, they will receive the remaining 0.1 XCH as a fee, plus their block reward, for a total of 2.1 XCH, in the next transaction block."),(0,o.kt)("p",null,"Therefore, Chia coins are never destroyed. In a given block, any portion of a spent coin that is not added into a new coin will be sent to the farmer as a fee. This topic is covered in more detail in ",(0,o.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/coin_lifecycle#fees-and-the-mempool",title:"Fees and the Mempool section of Chialisp's tutorial on coin lifecycles"},"chialisp.com"),"."),(0,o.kt)("h2",{id:"farmer-vs-pool-reward"},"Farmer vs Pool reward"),(0,o.kt)("p",null,"The block reward is divided into two coins. The first coin goes to the farmer puzzle hash, which is specified by the farmer, and usually goes straight to the farmer's wallet. This contains 1/8 of the total value (0.25 XCH for the first 3 years). This is referred to as the ",(0,o.kt)("em",{parentName:"p"},"farmer coin"),". "),(0,o.kt)("p",null,"The second coin, with 7/8 of the value, is called the ",(0,o.kt)("em",{parentName:"p"},"pool coin"),". This coin can go to one of two places:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If a ",(0,o.kt)("em",{parentName:"li"},"pool public key")," is specified for the winning plot, then the reward is sent to the address signed by that public key. The ",(0,o.kt)("em",{parentName:"li"},"pool public key")," is usually used for solo farming, and sent directly to the farmer's wallet."),(0,o.kt)("li",{parentName:"ol"},"Otherwise, a ",(0,o.kt)("em",{parentName:"li"},"pool address")," must be encoded into the plot, and the reward is sent to the address. The ",(0,o.kt)("em",{parentName:"li"},"pool address")," is usually used along with the official Chia pooling protocol, and a pay-to-singleton address is used.")))}p.isMDXComponent=!0}}]);