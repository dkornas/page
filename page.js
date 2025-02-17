(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3989:(e,a,s)=>{"use strict";s.r(a),s.d(a,{GlobalError:()=>l.a,__next_app__:()=>h,originalPathname:()=>d,pages:()=>p,routeModule:()=>m,tree:()=>c}),s(4361),s(2829),s(996);var n=s(170),r=s(5002),i=s(3876),l=s.n(i),t=s(6299),o={};for(let e in t)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>t[e]);s.d(a,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4361)),"C:\\dok\\private\\warhammer\\tow\\kampania\\stronka\\warhammer-campaign\\app\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,2829)),"C:\\dok\\private\\warhammer\\tow\\kampania\\stronka\\warhammer-campaign\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,996,23)),"next/dist/client/components/not-found-error"]}],p=["C:\\dok\\private\\warhammer\\tow\\kampania\\stronka\\warhammer-campaign\\app\\page.tsx"],d="/page",h={require:s,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3696:(e,a,s)=>{Promise.resolve().then(s.bind(s,7553))},7553:(e,a,s)=>{"use strict";s.d(a,{CampaignData:()=>j});var n=s(7247),r=s(8964),i=s(8053),l=s(4283),t=s(6991),o=s(6323);let c=(0,o.Z)("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]),p=(0,o.Z)("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);var d=s(7013),h=s(8917),m=s(1246),u=s(8969);function x({isOpen:e,onClose:a,onSubmit:s}){let[l,o]=(0,r.useState)(""),[c,p]=(0,r.useState)("");return n.jsx(u.Vq,{open:e,onOpenChange:a,children:(0,n.jsxs)(u.cZ,{children:[(0,n.jsxs)(u.fK,{children:[n.jsx(u.$N,{children:"Ulala Rodo Srodo podaj hasło"}),n.jsx(u.Be,{children:"Wprowadź hasło, aby uzyskać dostęp do linku."})]}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),"pierogi"===l?(s(l),o(""),p("")):p("Złe hasło")},className:"space-y-4",children:[n.jsx(t.I,{type:"password",placeholder:"Wprowadź hasło",value:l,onChange:e=>o(e.target.value)}),c&&n.jsx("p",{className:"text-red-500",children:c}),n.jsx(i.z,{type:"submit",children:"Potwierdź"})]})]})})}function j(){let{entries:e,setEntries:a}=(0,m.y)(),[s,o]=(0,r.useState)(null),[u,j]=(0,r.useState)({}),[k,g]=(0,r.useState)(!1),[v,b]=(0,r.useState)(""),y=a=>{o(a);let s=e.find(e=>e.id===a);s&&j(s)},w=s=>{a(e.map(e=>e.id===s?{...e,...u}:e)),o(null),j({})},C=e=>{b(e),g(!0)};return(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsxs)("div",{className:"rounded-lg border bg-white/50 p-4",children:[n.jsx("h2",{className:"mb-4 text-xl font-bold",children:"Dodaj nowego gracza"}),(0,n.jsxs)("div",{className:"grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",children:[n.jsx(t.I,{placeholder:"Gracz",value:u.player||"",onChange:e=>j({...u,player:e.target.value})}),n.jsx(t.I,{placeholder:"Link do Facebooka",value:u.facebookLink||"",onChange:e=>j({...u,facebookLink:e.target.value})}),n.jsx(t.I,{placeholder:"Nazwa Armii",value:u.army||"",onChange:e=>j({...u,army:e.target.value})}),n.jsx(t.I,{type:"number",placeholder:"KP",value:u.kp||"",onChange:e=>j({...u,kp:Number(e.target.value)})}),n.jsx(t.I,{placeholder:"Link do ChampionsHub",value:u.championshubLink||"",onChange:e=>j({...u,championshubLink:e.target.value})}),(0,n.jsxs)(i.z,{onClick:()=>{u.player&&u.army&&(a([...e,{id:Date.now(),player:u.player.trim(),facebookLink:u.facebookLink||"",army:u.army,kp:Number(u.kp)||0,championshubLink:u.championshubLink||""}]),j({}))},className:"flex items-center gap-2",children:[n.jsx(c,{className:"h-4 w-4"}),"Dodaj"]})]})]}),n.jsx("div",{className:"rounded-lg border bg-white/50",children:(0,n.jsxs)(l.iA,{children:[n.jsx(l.xD,{children:(0,n.jsxs)(l.SC,{children:[n.jsx(l.ss,{className:"w-[50px]",children:"Lp."}),n.jsx(l.ss,{children:"Imię i Nazwisko"}),n.jsx(l.ss,{children:"Link do Facebooka"}),n.jsx(l.ss,{children:"Nazwa Armii"}),n.jsx(l.ss,{className:"w-[80px]",children:"KP"}),n.jsx(l.ss,{children:"ChampionsHub"}),n.jsx(l.ss,{className:"w-[100px]",children:"Akcje"})]})}),n.jsx(l.RM,{children:e.map((e,a)=>n.jsx(l.SC,{children:s===e.id?(0,n.jsxs)(n.Fragment,{children:[n.jsx(l.pj,{children:a+1}),n.jsx(l.pj,{children:n.jsx(t.I,{value:u.player||"",onChange:e=>j({...u,player:e.target.value})})}),n.jsx(l.pj,{children:n.jsx(t.I,{value:u.facebookLink||"",onChange:e=>j({...u,facebookLink:e.target.value})})}),n.jsx(l.pj,{children:n.jsx(t.I,{value:u.army||"",onChange:e=>j({...u,army:e.target.value})})}),n.jsx(l.pj,{children:n.jsx(t.I,{type:"number",value:u.kp||"",onChange:e=>j({...u,kp:Number(e.target.value)})})}),n.jsx(l.pj,{children:n.jsx(t.I,{value:u.championshubLink||"",onChange:e=>j({...u,championshubLink:e.target.value})})}),n.jsx(l.pj,{children:(0,n.jsxs)("div",{className:"flex gap-2",children:[n.jsx(i.z,{size:"sm",variant:"outline",onClick:()=>w(e.id),children:n.jsx(p,{className:"h-4 w-4"})}),n.jsx(i.z,{size:"sm",variant:"outline",onClick:()=>{o(null),j({})},children:n.jsx(d.Z,{className:"h-4 w-4"})})]})})]}):(0,n.jsxs)(n.Fragment,{children:[n.jsx(l.pj,{children:a+1}),n.jsx(l.pj,{children:e.player.split(" ").map((e,a,s)=>a===s.length-1?e[0]+".":e+" ").join("")}),n.jsx(l.pj,{children:e.facebookLink&&n.jsx(i.z,{variant:"link",className:"p-0 text-blue-600 hover:underline",onClick:()=>C(`https://facebook.com/${e.facebookLink}`),children:e.facebookLink})}),n.jsx(l.pj,{children:e.army}),n.jsx(l.pj,{children:e.kp}),n.jsx(l.pj,{children:e.championshubLink&&n.jsx(i.z,{variant:"link",className:"p-0 text-blue-600 hover:underline",onClick:()=>C(`https://championshub.app/${e.championshubLink}`),children:e.championshubLink})}),n.jsx(l.pj,{children:n.jsx(i.z,{size:"sm",variant:"outline",onClick:()=>y(e.id),children:n.jsx(h.Z,{className:"h-4 w-4"})})})]})},e.id))})]})}),n.jsx(x,{isOpen:k,onClose:()=>g(!1),onSubmit:e=>{"pierogi"===e&&window.open(v,"_blank","noopener,noreferrer"),g(!1)}})]})}},4361:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>i});var n=s(2051);let r=(0,s(5347).createProxy)(String.raw`C:\dok\private\warhammer\tow\kampania\stronka\warhammer-campaign\components\campaign-data.tsx#CampaignData`);function i(){return n.jsx("div",{className:"space-y-8",children:n.jsx(r,{})})}}};var a=require("../webpack-runtime.js");a.C(e);var s=e=>a(a.s=e),n=a.X(0,[301,298,317],()=>s(3989));module.exports=n})();