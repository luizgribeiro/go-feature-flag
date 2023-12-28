"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[44752],{10738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(85893),r=n(11151);const a={sidebar_position:10,description:"How GO Feature Flag is working with OpenFeature."},s="Concepts",i={id:"openfeature_sdk/concepts",title:"Concepts",description:"How GO Feature Flag is working with OpenFeature.",source:"@site/versioned_docs/version-v1.3.0/openfeature_sdk/concepts.md",sourceDirName:"openfeature_sdk",slug:"/openfeature_sdk/concepts",permalink:"/docs/v1.3.0/openfeature_sdk/concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.3.0/openfeature_sdk/concepts.md",tags:[],version:"v1.3.0",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"How GO Feature Flag is working with OpenFeature."},sidebar:"tutorialSidebar",previous:{title:"Use with OpenFeature",permalink:"/docs/v1.3.0/category/use-with-openfeature"},next:{title:"GO SDK usage",permalink:"/docs/v1.3.0/openfeature_sdk/openfeature_go"}},c={},d=[{value:"What is OpenFeature?",id:"what-is-openfeature",level:2},{value:"How OpenFeature and GO Feature Flag are working together?",id:"how-openfeature-and-go-feature-flag-are-working-together",level:2}];function u(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"concepts",children:"Concepts"}),"\n",(0,o.jsx)(t.h2,{id:"what-is-openfeature",children:"What is OpenFeature?"}),"\n",(0,o.jsxs)(t.admonition,{type:"note",children:[(0,o.jsx)(t.p,{children:"OpenFeature is an open standard for feature flag management, created to support a robust feature flag ecosystem using cloud native technologies. OpenFeature provides a unified API and SDK, and a developer-first, cloud-native implementation, with extensibility for open source and commercial offerings."}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://docs.openfeature.dev/docs/category/concepts",children:"https://docs.openfeature.dev/docs/category/concepts"})})]}),"\n",(0,o.jsx)(t.p,{children:"OpenFeature offer a framework-agnostic way of using feature flags, it means that if you use OpenFeature SDKs you will have minimum changes to do if you want to choose another provider."}),"\n",(0,o.jsxs)(t.p,{children:["To support this initiative, ",(0,o.jsx)(t.strong,{children:"GO Feature Flag"})," does not have any SDKs and rely 100% on OpenFeature SDKs.",(0,o.jsx)(t.br,{}),"\n","To be compatible with our solution, we offer ",(0,o.jsx)(t.a,{href:"https://docs.openfeature.dev/docs/reference/concepts/provider",children:(0,o.jsx)(t.code,{children:"providers"})})," for GO Feature Flag in several languages."]}),"\n",(0,o.jsx)(t.h2,{id:"how-openfeature-and-go-feature-flag-are-working-together",children:"How OpenFeature and GO Feature Flag are working together?"}),"\n",(0,o.jsxs)(t.p,{children:["To use the OpenFeature SDKs you need what we call a provider.",(0,o.jsx)(t.br,{}),"\n","A ",(0,o.jsx)(t.strong,{children:"provider"})," is responsible for performing flag evaluations. It provides an abstraction between ",(0,o.jsx)(t.strong,{children:"GO Feature Flag"})," and the OpenFeature SDK."]}),"\n",(0,o.jsxs)(t.p,{children:["A provider need a backend service to perform the flag evaluation. This is why we have introduced the ",(0,o.jsx)(t.a,{href:"../category/use-the-relay-proxy",children:(0,o.jsx)(t.strong,{children:"relay proxy"})}),".",(0,o.jsx)(t.br,{}),"\n","This component retrieve your feature flag configuration file using the GO module and expose APIs to get your flags variations."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(30156).Z+"",width:"1740",height:"574"})}),"\n",(0,o.jsxs)(t.p,{children:["With this simple architecture you have a central component ",(0,o.jsx)(t.em,{children:"(the relay proxy)"})," that is in charge of the flag evaluation, while the SDKs and providers are responsible to communicate with the relay proxy."]}),"\n",(0,o.jsx)(t.p,{children:"This supports different languages the same way and makes you able to use GO Feature Flag with all your favorite languages."})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},30156:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/concepts-d23b05d83bb936d1d2cf17b34ec1d505.jpg"},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var o=n(67294);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);