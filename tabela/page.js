(()=>{var e={};e.id=313,e.ids=[313],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9023:(e,a,r)=>{"use strict";r.r(a),r.d(a,{GlobalError:()=>s.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>c}),r(8009),r(2829),r(996);var n=r(170),i=r(5002),t=r(3876),s=r.n(t),o=r(6299),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(a,l);let c=["",{children:["tabela",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8009)),"C:\\dok\\private\\warhammer\\tow\\kampania\\stronka\\warhammer-campaign\\app\\tabela\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,2829)),"C:\\dok\\private\\warhammer\\tow\\kampania\\stronka\\warhammer-campaign\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,996,23)),"next/dist/client/components/not-found-error"]}],d=["C:\\dok\\private\\warhammer\\tow\\kampania\\stronka\\warhammer-campaign\\app\\tabela\\page.tsx"],m="/tabela/page",p={require:r,loadChunk:()=>Promise.resolve()},u=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/tabela/page",pathname:"/tabela",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4618:(e,a,r)=>{Promise.resolve().then(r.bind(r,4448)),Promise.resolve().then(r.bind(r,1246)),Promise.resolve().then(r.t.bind(r,5889,23))},9545:(e,a,r)=>{Promise.resolve().then(r.bind(r,588))},4539:(e,a,r)=>{Promise.resolve().then(r.t.bind(r,3642,23)),Promise.resolve().then(r.t.bind(r,7586,23)),Promise.resolve().then(r.t.bind(r,7838,23)),Promise.resolve().then(r.t.bind(r,8057,23)),Promise.resolve().then(r.t.bind(r,7741,23)),Promise.resolve().then(r.t.bind(r,3118,23))},588:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>d});var n=r(7247),i=r(8964),t=r(1246),s=r(4283),o=r(8053);let l=(0,r(6323).Z)("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);var c=r(5008);function d(){let{entries:e}=(0,t.y)(),[a,r]=(0,i.useState)([]),[d,m]=(0,i.useState)({key:"points",direction:"descending"}),p=e=>{let n="ascending";d.key===e&&"ascending"===d.direction&&(n="descending"),m({key:e,direction:n}),r([...a].sort((a,r)=>a[e]<r[e]?"ascending"===n?-1:1:a[e]>r[e]?"ascending"===n?1:-1:0))};return(0,n.jsxs)("div",{className:"space-y-6",children:[n.jsx("h1",{className:"text-3xl font-bold",children:"Tabela Wynik\xf3w"}),(0,n.jsxs)(s.iA,{children:[n.jsx(s.xD,{children:(0,n.jsxs)(s.SC,{children:[n.jsx(s.ss,{className:"w-[200px]",children:(0,n.jsxs)(o.z,{variant:"ghost",onClick:()=>p("name"),children:["Imię i Nazwisko ",n.jsx(l,{className:"ml-2 h-4 w-4"})]})}),n.jsx(s.ss,{children:(0,n.jsxs)(o.z,{variant:"ghost",onClick:()=>p("army"),children:["Nazwa Armii ",n.jsx(l,{className:"ml-2 h-4 w-4"})]})}),n.jsx(s.ss,{children:(0,n.jsxs)(o.z,{variant:"ghost",onClick:()=>p("kp"),children:["KP ",n.jsx(l,{className:"ml-2 h-4 w-4"})]})}),n.jsx(s.ss,{children:(0,n.jsxs)(o.z,{variant:"ghost",onClick:()=>p("battlesPlayed"),children:["Liczba Bitew ",n.jsx(l,{className:"ml-2 h-4 w-4"})]})}),n.jsx(s.ss,{children:(0,n.jsxs)(o.z,{variant:"ghost",onClick:()=>p("vpGained"),children:["Zdobyte VP ",n.jsx(l,{className:"ml-2 h-4 w-4"})]})}),n.jsx(s.ss,{children:(0,n.jsxs)(o.z,{variant:"ghost",onClick:()=>p("vpLost"),children:["Stracone VP ",n.jsx(l,{className:"ml-2 h-4 w-4"})]})}),n.jsx(s.ss,{children:(0,n.jsxs)(o.z,{variant:"ghost",onClick:()=>p("points"),children:["Liczba Punkt\xf3w ",n.jsx(l,{className:"ml-2 h-4 w-4"})]})})]})}),n.jsx(s.RM,{children:a.map(e=>(0,n.jsxs)(s.SC,{children:[n.jsx(s.pj,{className:"font-medium",children:(0,c.y)(e.name)}),n.jsx(s.pj,{children:e.army}),n.jsx(s.pj,{children:e.kp}),n.jsx(s.pj,{children:e.battlesPlayed}),n.jsx(s.pj,{children:e.vpGained}),n.jsx(s.pj,{children:e.vpLost}),n.jsx(s.pj,{children:e.points})]},e.name))})]})]})}},4448:(e,a,r)=>{"use strict";r.d(a,{MainNav:()=>h});var n=r(7247),i=r(9906),t=r(4178),s=r(5008),o=r(6460),l=r(473),c=r(7361),d=r(545),m=r(836),p=r(7989);let u=[{title:"Strona Gł\xf3wna",href:"/",icon:o.Z},{title:"Bitwy",href:"/bitwy",icon:l.Z},{title:"Tabela",href:"/tabela",icon:c.Z},{title:"Scenariusze",href:"/scenariusze",icon:d.Z},{title:"Zasady specjalne",href:"/zasady",icon:m.Z},{title:"Spotkania",href:"/spotkania",icon:p.Z}];function h(){let e=(0,t.usePathname)();return n.jsx("nav",{className:"border-b bg-white/50 backdrop-blur-sm",children:n.jsx("div",{className:"container mx-auto px-4",children:n.jsx("div",{className:"flex h-14 items-center space-x-4 sm:space-x-6",children:u.map(a=>{let r=a.icon;return(0,n.jsxs)(i.default,{href:a.href,className:(0,s.cn)("flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary",e===a.href?"text-primary":"text-muted-foreground"),children:[n.jsx(r,{className:"h-4 w-4"}),n.jsx("span",{children:a.title})]},a.href)})})})})}},8053:(e,a,r)=>{"use strict";r.d(a,{z:()=>c});var n=r(7247),i=r(8964),t=r(9008),s=r(7972),o=r(5008);let l=(0,s.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=i.forwardRef(({className:e,variant:a,size:r,asChild:i=!1,...s},c)=>{let d=i?t.g7:"button";return n.jsx(d,{className:(0,o.cn)(l({variant:a,size:r,className:e})),ref:c,...s})});c.displayName="Button"},4283:(e,a,r)=>{"use strict";r.d(a,{RM:()=>l,SC:()=>c,iA:()=>s,pj:()=>m,ss:()=>d,xD:()=>o});var n=r(7247),i=r(8964),t=r(5008);let s=i.forwardRef(({className:e,...a},r)=>n.jsx("div",{className:"relative w-full overflow-auto",children:n.jsx("table",{ref:r,className:(0,t.cn)("w-full caption-bottom text-sm",e),...a})}));s.displayName="Table";let o=i.forwardRef(({className:e,...a},r)=>n.jsx("thead",{ref:r,className:(0,t.cn)("[&_tr]:border-b",e),...a}));o.displayName="TableHeader";let l=i.forwardRef(({className:e,...a},r)=>n.jsx("tbody",{ref:r,className:(0,t.cn)("[&_tr:last-child]:border-0",e),...a}));l.displayName="TableBody",i.forwardRef(({className:e,...a},r)=>n.jsx("tfoot",{ref:r,className:(0,t.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...a})).displayName="TableFooter";let c=i.forwardRef(({className:e,...a},r)=>n.jsx("tr",{ref:r,className:(0,t.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...a}));c.displayName="TableRow";let d=i.forwardRef(({className:e,...a},r)=>n.jsx("th",{ref:r,className:(0,t.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...a}));d.displayName="TableHead";let m=i.forwardRef(({className:e,...a},r)=>n.jsx("td",{ref:r,className:(0,t.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...a}));m.displayName="TableCell",i.forwardRef(({className:e,...a},r)=>n.jsx("caption",{ref:r,className:(0,t.cn)("mt-4 text-sm text-muted-foreground",e),...a})).displayName="TableCaption"},1246:(e,a,r)=>{"use strict";r.d(a,{CampaignProvider:()=>s,y:()=>o});var n=r(7247),i=r(8964);let t=(0,i.createContext)(void 0);function s({children:e,initialEntries:a}){let[r,s]=(0,i.useState)(a);return n.jsx(t.Provider,{value:{entries:r,setEntries:s},children:e})}function o(){let e=(0,i.useContext)(t);if(void 0===e)throw Error("useCampaign must be used within a CampaignProvider");return e}},5008:(e,a,r)=>{"use strict";r.d(a,{cn:()=>t,y:()=>s});var n=r(1929),i=r(5770);function t(...e){return(0,i.m6)((0,n.W)(e))}function s(e){return e.split(" ").map((e,a,r)=>a===r.length-1?e[0]+".":e).join(" ")}},2829:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>p,metadata:()=>d});var n=r(2051),i=r(3750),t=r.n(i);r(7633);var s=r(9624),o=r(5347);let l=(0,o.createProxy)(String.raw`C:\dok\private\warhammer\tow\kampania\stronka\warhammer-campaign\components\main-nav.tsx#MainNav`),c=(0,o.createProxy)(String.raw`C:\dok\private\warhammer\tow\kampania\stronka\warhammer-campaign\contexts\CampaignContext.tsx#CampaignProvider`);(0,o.createProxy)(String.raw`C:\dok\private\warhammer\tow\kampania\stronka\warhammer-campaign\contexts\CampaignContext.tsx#useCampaign`),r(7272);let d={title:"Poznańska Kampania Old World",description:"System zarządzania kampanią Warhammer: The Old World",generator:"v0.dev"},m=[{id:1,player:"Dawid Remlein",facebookLink:"Link",army:"Korsarze Czarnego Wybrzeża",kp:2,championshubLink:"Gobos"},{id:2,player:"Krzysztof Szczepecki",facebookLink:"Link",army:"Klan Krwi - Rakh Rzeźnik z Kharanos",kp:2,championshubLink:"dzida"},{id:3,player:"Mateusz Kubiak",facebookLink:"Link",army:"Pogromcy Zimy",kp:1,championshubLink:"ZimowyWilk"},{id:4,player:"Sebastian Remlein",facebookLink:"Link",army:"Warriors of Chaos - Wolves of the SEA",kp:2,championshubLink:"Savil"},{id:5,player:"Łukasz Mikołajewski",facebookLink:"Link",army:"Ekspedycja Nicolasa Schl\xe4gera (Imperium)",kp:1,championshubLink:"ukemiko"},{id:6,player:"Kacper Walda",facebookLink:"Link",army:"Korsarze z Cair Aew (mroczne elfy)",kp:2,championshubLink:"Warudo"},{id:7,player:"Kuba Lenar",facebookLink:"Link",army:"Vampire Counts, The Red Duke 驪",kp:2,championshubLink:"Lenar"},{id:8,player:"Jan de Mezer",facebookLink:"Link",army:"Pierwsza Wyprawa Thorbucha Colensen",kp:1,championshubLink:""},{id:9,player:"Mikołaj Adamiak",facebookLink:"Link",army:"Eddie the Head",kp:2,championshubLink:""},{id:10,player:"Laurenty Tański",facebookLink:"Link",army:"Krasnoludy, Banda Larsa Villkatta",kp:1,championshubLink:""},{id:11,player:"Michał Jamrozik",facebookLink:"Link",army:"Sramzes... Generał Sramzes. Prawa ręka Faraona Onanhutepa.",kp:2,championshubLink:"Rommel"},{id:12,player:"Mateusz Tochowicz",facebookLink:"Link",army:"Księżna Kleopatra Kabira",kp:2,championshubLink:"AzbestowyWegorz"},{id:13,player:"Dominik Kornaś",facebookLink:"Link",army:'"Bulb Zab\xf3jca Gigant\xf3w i jego zgniła szajka"',kp:3,championshubLink:"Myzu"},{id:14,player:"Piotr Filipiak",facebookLink:"Link",army:"Vaeri Hadreath z Vael Thundril",kp:3,championshubLink:"Piotr Piotras Filipiak"},{id:15,player:"Karol Krajewski",facebookLink:"Link",army:"Kapitan Karul",kp:3,championshubLink:"krajewskikarol"},{id:16,player:"Bartek Jansson",facebookLink:"Link",army:"Kompania Koneser\xf3w Złota Gurniego Długi Wąs",kp:2,championshubLink:"Bartas"},{id:17,player:"Bartosz Leszczyński",facebookLink:"Link",army:"Wredzug Waaagh-Oko",kp:3,championshubLink:"Leszczorr"},{id:18,player:"Ilia Krasiukov",facebookLink:"Link",army:"House Kronhart of Beeckerhoven, from Grand County of Osterlund",kp:2,championshubLink:"Clawandfang"},{id:19,player:"Dariusz Myszkiewicz",facebookLink:"Link",army:"Rikictus Wielogłowy i Skarb Spaczenia",kp:3,championshubLink:""},{id:20,player:"Wojciech Gładysiak",facebookLink:"Link",army:"Pancerne zagony Be-lacora - Chaos",kp:0,championshubLink:""},{id:21,player:"Rafał Capiński",facebookLink:"Link",army:"Luther von Fleischer",kp:2,championshubLink:""},{id:22,player:"Tomasz Kwieciński",facebookLink:"Link",army:"Zielonosk\xf3ra banda Krugga Złotopyska",kp:3,championshubLink:""},{id:23,player:"Mateusz Woźniak",facebookLink:"Link",army:"Skotnik P\xf3łtwarzy- Szalony Kr\xf3l Nocy-",kp:2,championshubLink:""}];function p({children:e}){return n.jsx("html",{lang:"pl",children:n.jsx("body",{className:t().className,children:n.jsx(c,{initialEntries:m,children:(0,n.jsxs)("div",{className:"min-h-screen bg-[#f5f0e6]",children:[n.jsx("header",{className:"border-b bg-white/50 backdrop-blur-sm",children:n.jsx("div",{className:"container mx-auto px-4 py-4",children:n.jsx("div",{className:"flex items-center justify-between",children:(0,n.jsxs)("div",{className:"flex items-center gap-4",children:[n.jsx(s.default,{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jpg-MWTJKPlneQhI51u5XmxnaiSyI7VZAt.jpeg",alt:"Poznańska Kampania Logo",width:100,height:100,className:"h-16 w-auto"}),n.jsx("h1",{className:"text-2xl font-bold text-[#8B0000]",children:"Poznańska Kampania Old World"})]})})})}),n.jsx(l,{}),n.jsx("main",{className:"container mx-auto px-4 py-8",children:e})]})})})})}},8009:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>n});let n=(0,r(5347).createProxy)(String.raw`C:\dok\private\warhammer\tow\kampania\stronka\warhammer-campaign\app\tabela\page.tsx#default`)},7272:()=>{},7633:()=>{},3191:(e,a,r)=>{"use strict";r.d(a,{F:()=>t,e:()=>s});var n=r(8964);function i(e,a){if("function"==typeof e)return e(a);null!=e&&(e.current=a)}function t(...e){return a=>{let r=!1,n=e.map(e=>{let n=i(e,a);return r||"function"!=typeof n||(r=!0),n});if(r)return()=>{for(let a=0;a<n.length;a++){let r=n[a];"function"==typeof r?r():i(e[a],null)}}}}function s(...e){return n.useCallback(t(...e),e)}},9008:(e,a,r)=>{"use strict";r.d(a,{g7:()=>s});var n=r(8964),i=r(3191),t=r(7247),s=n.forwardRef((e,a)=>{let{children:r,...i}=e,s=n.Children.toArray(r),l=s.find(c);if(l){let e=l.props.children,r=s.map(a=>a!==l?a:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,t.jsx)(o,{...i,ref:a,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,t.jsx)(o,{...i,ref:a,children:r})});s.displayName="Slot";var o=n.forwardRef((e,a)=>{let{children:r,...t}=e;if(n.isValidElement(r)){let e=function(e){let a=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=a&&"isReactWarning"in a&&a.isReactWarning;return r?e.ref:(r=(a=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in a&&a.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r),s=function(e,a){let r={...a};for(let n in a){let i=e[n],t=a[n];/^on[A-Z]/.test(n)?i&&t?r[n]=(...e)=>{t(...e),i(...e)}:i&&(r[n]=i):"style"===n?r[n]={...i,...t}:"className"===n&&(r[n]=[i,t].filter(Boolean).join(" "))}return{...e,...r}}(t,r.props);return r.type!==n.Fragment&&(s.ref=a?(0,i.F)(a,e):e),n.cloneElement(r,s)}return n.Children.count(r)>1?n.Children.only(null):null});o.displayName="SlotClone";var l=({children:e})=>(0,t.jsx)(t.Fragment,{children:e});function c(e){return n.isValidElement(e)&&e.type===l}},7972:(e,a,r)=>{"use strict";r.d(a,{j:()=>s});var n=r(1929);let i=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,t=n.W,s=(e,a)=>r=>{var n;if((null==a?void 0:a.variants)==null)return t(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:s,defaultVariants:o}=a,l=Object.keys(s).map(e=>{let a=null==r?void 0:r[e],n=null==o?void 0:o[e];if(null===a)return null;let t=i(a)||i(n);return s[e][t]}),c=r&&Object.entries(r).reduce((e,a)=>{let[r,n]=a;return void 0===n||(e[r]=n),e},{});return t(e,l,null==a?void 0:null===(n=a.compoundVariants)||void 0===n?void 0:n.reduce((e,a)=>{let{class:r,className:n,...i}=a;return Object.entries(i).every(e=>{let[a,r]=e;return Array.isArray(r)?r.includes({...o,...c}[a]):({...o,...c})[a]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}}};var a=require("../../webpack-runtime.js");a.C(e);var r=e=>a(a.s=e),n=a.X(0,[301],()=>r(9023));module.exports=n})();