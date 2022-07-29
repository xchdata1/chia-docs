"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=u(n),m=r,f=h["".concat(c,".").concat(m)]||h[m]||p[m]||o;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},s="3.3 VDFs",i={unversionedId:"03consensus/vdfs",id:"03consensus/vdfs",title:"3.3 VDFs",description:"A Verifiable Delay Function, also referred to as a Proof of Time or VDF, is a proof that a sequential function was executed a certain number of times.",source:"@site/docs/03consensus/vdfs.md",sourceDirName:"03consensus",slug:"/03consensus/vdfs",permalink:"/docs/03consensus/vdfs",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/03consensus/vdfs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"3.2 Proof of Space",permalink:"/docs/03consensus/proof-of-space"},next:{title:"3.4 Challenges",permalink:"/docs/03consensus/challenges"}},c={},u=[{value:"Infusion",id:"infusion",level:3}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"33-vdfs"},"3.3 VDFs"),(0,r.kt)("p",null,"A Verifiable Delay Function, also referred to as a Proof of Time or VDF, is a proof that a sequential function was executed a certain number of times."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Verifiable"),": This means that after performing the computation (which takes time), the Prover can create a very small proof in a very short time, and the Verifier can verify this proof without having to redo the whole computation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Delay"),": This means that the Prover actually spent a real amount of time (although we don\u2019t know exactly how much) to compute the function."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function"),": This means it\u2019s deterministic: computing a VDF on an input x ",(0,r.kt)("em",{parentName:"p"},"always")," yields the same result y."),(0,r.kt)("p",null,"The key word here is \u201csequential\u201d, like hashing a number many times: hash(hash(hash(a))), etc. This means the prover cannot just add more machines to make the function execute faster. Therefore we can assume that computing a VDF requires real (wall-clock) time. The construction that we use is repeated squaring. The Prover must square a challenge x T times. This requires time \u03f4(T). The Prover also must create a proof that this was performed properly."),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/vdf.png",alt:"drawing"}),(0,r.kt)("figcaption",null,"Figure 3: The Verifier (blockchain) sends a challenge to the Prover (timelord) and the Prover computes the output and proof.")),(0,r.kt)("p",null,"Although the following details are not very important for understanding the consensus algorithm, the choice of what VDF to use is relevant, because if an attacker succeeds in obtaining a much faster machine, some ",(0,r.kt)("a",{parentName:"p",href:"/docs/03consensus/attacks_and_countermeasures",title:"Section 3.14: Attacks and Countermeasures"},"attacks")," become possible."),(0,r.kt)("p",null,"The VDF used by Chia is repeated squaring in a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/vdf-competition/blob/main/classgroups.pdf",title:"Binary quadratic forms white paper, by Lipa Long"},"class group of unknown order"),". There are two main ways to generate a large group that has an unknown order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use an RSA modulus, and use the integers mod N as a group. The order of the group is unknown if you can generate your modulus with many participating parties using an MPC ceremony."),(0,r.kt)("li",{parentName:"ol"},"An easier approach is to use classgroups with a large prime discriminant, which are groups of unknown order. This does not require any complex or trusted setup, so we chose this option for Chia.")),(0,r.kt)("p",null,"To create one of these groups, one just needs a large, random, prime number. The drawbacks are that classgroup code is less tested in real life, and optimizations are less well-known than in RSA groups. We use the same initial element for the squaring (a=2, b=1 classgroup element), and instead use the challenge to generate a new random prime number for each VDF, which is used as the discriminant. The discriminant has a size of 1024 bits, which means the proof sizes are around 1024 bits. We use the ",(0,r.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2018/623"},"Wesolowski scheme")," split into n (1<=n<=64) phases so that creating the proofs is very fast. Since the n-wesolowski proofs can be large, we replace them with 1-wesolowski proofs as soon as they are available. These are smaller, but require more time to make. The proofs themselves are not committed to on-chain, so they are replaceable."),(0,r.kt)("h3",{id:"infusion"},"Infusion"),(0,r.kt)("p",null,"As a recap, VDFs take in an input, called a ",(0,r.kt)("em",{parentName:"p"},"challenge"),", and produce an output, together with a proof that certifies that the function was evaluated correctly."),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"value"),", in this context, can be thought of as a block with a proof of space. The value is combined with an output of a VDF, to generate a new value, which is used as the input/challenge for the next VDF. This is known as an ",(0,r.kt)("em",{parentName:"p"},"infusion")," of a value into a VDF."),(0,r.kt)("p",null,"Therefore, we are chaining VDFs, but committing to a new value in between. This is used so that we have a linear progression of blocks, alternating proofs of space with proofs of time."))}p.isMDXComponent=!0}}]);