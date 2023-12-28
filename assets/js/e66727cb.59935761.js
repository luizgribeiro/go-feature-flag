"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[97684],{95882:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(85893),n=r(11151);const i={sidebar_position:80,description:"Monitor the relay proxy."},s="Monitor the relay proxy",a={id:"relay_proxy/monitor_relay_proxy",title:"Monitor the relay proxy",description:"Monitor the relay proxy.",source:"@site/versioned_docs/version-v1.12.1/relay_proxy/monitor_relay_proxy.md",sourceDirName:"relay_proxy",slug:"/relay_proxy/monitor_relay_proxy",permalink:"/docs/v1.12.1/relay_proxy/monitor_relay_proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.12.1/relay_proxy/monitor_relay_proxy.md",tags:[],version:"v1.12.1",sidebarPosition:80,frontMatter:{sidebar_position:80,description:"Monitor the relay proxy."},sidebar:"tutorialSidebar",previous:{title:"Deploy the relay proxy",permalink:"/docs/v1.12.1/relay_proxy/deploy_relay_proxy"},next:{title:"Migrate from v0.x.x to v1.x.x",permalink:"/docs/v1.12.1/migrate_v0_v1"}},l={},c=[{value:"<code>/health</code>",id:"health",level:2},{value:"<code>/info</code>",id:"info",level:2},{value:"<code>/metrics</code>",id:"metrics",level:2}];function d(e){const o={code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"monitor-the-relay-proxy",children:"Monitor the relay proxy"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.strong,{children:"relay proxy"})," offer some endpoints for you to be able to see how it behaves."]}),"\n",(0,t.jsx)(o.h2,{id:"health",children:(0,t.jsx)(o.code,{children:"/health"})}),"\n",(0,t.jsxs)(o.p,{children:["Making a ",(0,t.jsx)(o.strong,{children:"GET"})," request to the URL path ",(0,t.jsx)(o.code,{children:"/health"})," will tell you if the relay proxy is ready to\nserve traffic."]}),"\n",(0,t.jsx)(o.p,{children:"This is useful especially for loadbalancer to know that they can send traffic to the service."}),"\n",(0,t.jsx)(o.h2,{id:"info",children:(0,t.jsx)(o.code,{children:"/info"})}),"\n",(0,t.jsxs)(o.p,{children:["Making a ",(0,t.jsx)(o.strong,{children:"GET"})," request to the URL path ",(0,t.jsx)(o.code,{children:"/info"})," will give you information about the actual state\nof the relay proxy."]}),"\n",(0,t.jsx)(o.h2,{id:"metrics",children:(0,t.jsx)(o.code,{children:"/metrics"})}),"\n",(0,t.jsx)(o.p,{children:"This endpoint is providing metrics about the relay proxy in the prometheus format."})]})}function h(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,o,r)=>{r.d(o,{Z:()=>a,a:()=>s});var t=r(67294);const n={},i=t.createContext(n);function s(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);