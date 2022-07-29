"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[7373],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(t),d=i,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||a;return t?o.createElement(m,r(r({ref:n},p),{},{components:t})):o.createElement(m,r({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=t[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(7462),i=(t(7294),t(3905));const a={sidebar_position:2},r="4.2 Coins, Puzzles and Solutions",s={unversionedId:"04coin-set-model/what-is-a-coin",id:"04coin-set-model/what-is-a-coin",title:"4.2 Coins, Puzzles and Solutions",description:"The Chia blockchain, as explained in the consensus section, is a linked list of blocks, agreed upon by nodes. Nodes also maintain a table of coins. A coin in chia is a record of ownership of a certain amount of XCH, which can be unlocked by providing a puzzle and solution.",source:"@site/docs/04coin-set-model/what-is-a-coin.md",sourceDirName:"04coin-set-model",slug:"/04coin-set-model/what-is-a-coin",permalink:"/docs/04coin-set-model/what-is-a-coin",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/04coin-set-model/what-is-a-coin.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"4.1 Intro",permalink:"/docs/04coin-set-model/intro"},next:{title:"4.3 Conditions",permalink:"/docs/04coin-set-model/conditions"}},c={},l=[{value:"Spends",id:"spends",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"42-coins-puzzles-and-solutions"},"4.2 Coins, Puzzles and Solutions"),(0,i.kt)("p",null,"The Chia blockchain, as explained in the consensus section, is a linked list of blocks, agreed upon by nodes. Nodes also maintain a table of ",(0,i.kt)("strong",{parentName:"p"},"coins"),". A coin in chia is a record of ownership of a certain amount of XCH, which can be unlocked by providing a puzzle and solution. "),(0,i.kt)("p",null,"The 3 properties in a coin are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Coin:\n    parent_coin_info: bytes32  # The coinID of the parent coin.\n    puzzle_hash: bytes32  # The hash of the puzzle that locks this coin.\n    amount: uint64  # The amount of XCH in this coin, in the mojos unit: 1 XCH = 1 trillion mojos.\n")),(0,i.kt)("p",null,"The coinID of each coin is computed by hashing together the concatenation of the three fields, where amount is encoded in CLVM format. "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"coinID == sha256(parent_ID + puzzlehash + amount)")),(0,i.kt)("p",null,"Because the coinID is a sha256 hash, coins can never be changed. They can only be created and then spent once."),(0,i.kt)("p",null,"So what is a ",(0,i.kt)("strong",{parentName:"p"},"puzzle"),"? Each coin has a CLVM (ChiaLisp Virtual Machine) program associated with it, which determines how, when, and by whom this coin can be spent. This program is called the puzzle, and it must be chosen at the time of the coin's creation."),(0,i.kt)("p",null,"For example, if Bob wanted to pay Alice, Bob would create a coin with a puzzle (and thus a puzzle hash) which Alice knows how to unlock. Bob can create a coin worth 5 XCH using Alice's puzzle hash, so that only Alice can unlock it."),(0,i.kt)("h2",{id:"spends"},"Spends"),(0,i.kt)("p",null,"When Alice wants to spend her coin, she creates a spend bundle (transaction), which reveals the coin she will spend, the original puzzle, and the solution to that puzzle. The solution usually involves things like signatures, conditions, and recipients of the coin. Alice is the only one that knows the solution to her puzzles, and thus she controls that coin. A basic example is that the puzzle requires a digital signature from Alice's public key. "),(0,i.kt)("p",null,"The network has no concept of accounts, or of coin ownership. Anybody can attempt to spend any coin on the network. It's up to the puzzles to prevent coins from being stolen or spent in unintended ways."),(0,i.kt)("p",null,"The data required to spend a coin is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The coin ID"),(0,i.kt)("li",{parentName:"ul"},"The puzzle (full CLVM source code)"),(0,i.kt)("li",{parentName:"ul"},"The solution to the puzzle")),(0,i.kt)("p",null,"A coin also has the option of requiring an aggregate signature in order to spend it."))}u.isMDXComponent=!0}}]);