"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[4689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),h=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=h(e.components);return a.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=h(n),f=o,p=u["".concat(r,".").concat(f)]||u[f]||d[f]||i;return n?a.createElement(p,s(s({ref:t},c),{},{components:n})):a.createElement(p,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var h=2;h<i;h++)s[h]=n[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:8},s="3.8 Three VDF Chains",l={unversionedId:"03consensus/three_vdf_chains",id:"03consensus/three_vdf_chains",title:"3.8 Three VDF Chains",description:"If we only used one VDF (for the reward chain), the inclusion or exclusion of blocks would allow control of the challenge for the next slot. This means that an attacker could try many different combinations of blocks, and choose the challenge that suits them best, to obtain more wins in the next slot.",source:"@site/docs/03consensus/three_vdf_chains.md",sourceDirName:"03consensus",slug:"/03consensus/three_vdf_chains",permalink:"/zh/docs/03consensus/three_vdf_chains",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/03consensus/three_vdf_chains.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"3.7 Multiple Blocks",permalink:"/zh/docs/03consensus/multiple_blocks"},next:{title:"3.9 Overflow Blocks and Weight",permalink:"/zh/docs/03consensus/overflow_blocks"}},r={},h=[{value:"Definitions",id:"definitions",level:2}],c={toc:h};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"38-three-vdf-chains"},"3.8 Three VDF Chains"),(0,o.kt)("p",null,"If we only used one VDF (for the reward chain), the inclusion or exclusion of blocks would allow control of the challenge for the next slot. This means that an attacker could try many different combinations of blocks, and choose the challenge that suits them best, to obtain more wins in the next slot."),(0,o.kt)("p",null,"These types of attacks are called grinding attacks, and they are one of the main difficulties of changing from Proof of Work to Proof of Space or Proof of Stake. More detail is provided in ",(0,o.kt)("a",{parentName:"p",href:"/docs/03consensus/attacks_and_countermeasures",title:"Section 3.14: Relevant Attacks and Countermeasures"},"Section 3.14"),"."),(0,o.kt)("p",null,"To mitigate this, the challenges will be based only on the first block to be infused in a slot."),(0,o.kt)("figure",null,(0,o.kt)("img",{src:"/img/multiple_chains.png",alt:"drawing"}),(0,o.kt)("figcaption",null,"Figure 8: The three VDF chains for 1+ challenges.",(0,o.kt)("p",null,"cc = challenge chain, ic = infused challenge chain, rc = reward chain,"),(0,o.kt)("p",null,"sp = signage point, B = block, c = challenge, r = reward"),(0,o.kt)("p",null,"An attacker can manipulate the reward chain results but this has no effect on c2, and therefore has no effect on the PoSpace lottery."))),(0,o.kt)("p",null,"There is a lot going on in this diagram! Let's break it down."),(0,o.kt)("p",null,"There are 4 ",(0,o.kt)("strong",{parentName:"p"},"blocks"),": B1, B2, B3, and B4. Farmers create these blocks. The blocks have pointers (the arrows), and the data the pointers are pointing to is all contained within the blocks themselves. At least 16 blocks have been created in the diagram's sub-slot, but we don\u2019t draw all of them due to space constraints."),(0,o.kt)("p",null,"The challenge chain and the reward chain each create 64 signage points, released every 9.375 seconds (on average) by timelords. Blocks must include the signage point VDFs (which mark the signage points) for both chains."),(0,o.kt)("p",null,"The timelords send their VDF output to their full node, which adds it into an EndOfSubSlotBundle. This bundle includes the output from each chain (for example c1, ic1, and r1 in the diagram). The bundle is propagated to all other full nodes. Blocks must also include the infusion point VDFs for all three chains."),(0,o.kt)("p",null,'The challenge chain broadcasts the challenges (c1 and c2). The same chain also executes the VDF from the start of the sub-slot to the end with nothing infused into it (the circles are VDF proofs but they do not interrupt the VDF). That is, in the challenge chain, the "lottery" is completely pre-determined, and not affected by blocks in the slot, until the end of the slot.'),(0,o.kt)("p",null,"The reward chain infuses every block that is included."),(0,o.kt)("p",null,"The chain in the middle is called the ",(0,o.kt)("strong",{parentName:"p"},"infused challenge chain"),". It starts at the first infused block for each challenge, and goes on until the end of the slot."),(0,o.kt)("p",null,"Recall that a ",(0,o.kt)("strong",{parentName:"p"},"slot")," must have at least 16 reward-chain blocks. A sub-slot doesn't have a minimum number of blocks (though it targets 32 blocks). Instead, a sub-slot always ends when sub-slot_iterations has been reached (this is targeted to take 10 minutes)."),(0,o.kt)("p",null,"Because a sub-slot is targeted to produce more than 16 blocks, a slot usually only needs one sub-slot to meet its minimum-block requirement, but that is not always the case. For example, we may have only 10 blocks in a sub-slot, and then 3 and then 7, which means those three sub-slots form one slot. The ",(0,o.kt)("strong",{parentName:"p"},"deficit")," is the number of blocks still necessary to end the slot: this is described in more detail in  ",(0,o.kt)("a",{parentName:"p",href:"/docs/03consensus/overflow_blocks#minimum-block-requirement",title:"Section 3.9: Overflow Blocks and Weight"},"Section 3.9"),"."),(0,o.kt)("p",null,"At the end of the slot, the challenge chain is combined with the infused challenge chain to generate the new challenge c2, which is used to start the challenge chain for the next sub-slot."),(0,o.kt)("p",null,'The only block which affects the challenge chain (and thus the PoSpace lottery) is the first block in the slot, which here is B1. In fact, it\'s only a deterministic part of B1 called "cc B1", which only depends on challenge chain data. An attacker who wants to grind cannot change the challenge by withholding B2, B3, or any other block apart from the first one.'),(0,o.kt)("p",null,"An honest farmer who holds the first block (B1) will release it. If an attacker controls the first block (B1), they have two additional options: delay it or withhold it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Delay it: In order to know whether the new challenge will benefit them, they will need to execute the VDF all the way up to c2. By that time, their chance to get included in the reward chain is gone, since honest farmers sign only one block per proof of space."),(0,o.kt)("li",{parentName:"ul"},"Withhold it: This does not provide much benefit to the attacker, since they must release it before sp2 in order to get the farmers on their chain. Farmers will choose the heaviest chain, which is the one with the most (heaviest) reward chain blocks.")),(0,o.kt)("p",null,"Why do we commit to any blocks at all in the challenge chain? If we did not, an attacker with a faster VDF could look ahead, since they would not need the help of honest participants in order to compute the challenge chain into the future. The challenge chain would be totally deterministic. This would enable some advantage by replotting. Furthermore, the challenge chain can be used to probabilistically prove the weight of the reward chain to light clients, without sharing all reward chain blocks (since the challenge chain depends on the \u201cbest\u201d block in the slot, you can calculate the number of reward chain blocks)."),(0,o.kt)("p",null,"For a block to be considered valid, it has to provide VDFs for the challenge chain and reward chain, and optionally for the infused challenge chain if it is present. Forcing all VDFs to be included means that all three chains are guaranteed to move forward at the same rate."),(0,o.kt)("h2",{id:"definitions"},"Definitions"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Challenge chain"),": The VDF chain based on each challenge for each sub-slot, which does not infuse anything in the middle of each sub-slot. The challenges are also used for the proofs of space. The signage points in this chain are used for the SP filter."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reward chain"),": The VDF chain that contains infusions of all blocks. This chain pulls in the challenge chain, and optionally, the infused challenge chain at the end of each sub-slot."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Infused challenge chain"),": A VDF chain which starts at the first block infused in a slot (which is not based on the previous slot\u2019s challenge, this is called the challenge block) and ends at the end of the slot.\nThis increases security by preventing VDF lookahead attacks."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sub-slot"),": a period of time for which a timelord must run a VDF. The number of calculations the timelord must perform (sub-slot_iterations) to complete the sub-slot are adjusted periodically (and automatically) to take around 10 minutes. During this time, 64 signage points will be released and the entire network will submit an average of 32 valid proofs of space."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Slot"),": one or more sub-slots. The important thing to remember is that a slot requires at least 16 reward-chain blocks. If these blocks are not produced in the first sub-slot, then another sub-slot will be required within the same slot. At the end of the slot, the infused challenge chain stops, the challenge chain pulls in the result of the infused challenge chain, and the deficit is reset to 16."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Block"),": a block is a collection of data infused into the rewards chain which contains: a proof of space for a challenge hash with fewer iterations than the slot iterations, signage point and infusion point VDFs for both chains, optional infusion point VDF for the infused challenge chain, and a rewards address. Some blocks are also transaction blocks. There is a maximum of 128 blocks per slot."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Transaction Block"),": A block that is eligible to create transactions, along with an associated list of transactions."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Challenge block"),": The first block to be infused in each slot, which is not based on a previous slot's challenge. The challenge block always has a deficit of 15, and always starts off the infused challenge chain."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Peak"),": The peak of the blockchain as seen by a node is the block with the greatest weight. Weight is the sum of the difficulty of a block and all its ancestors, which is similar to height, but a shorter chain can have heavier weight, due to difficulty adjustments."))}d.isMDXComponent=!0}}]);