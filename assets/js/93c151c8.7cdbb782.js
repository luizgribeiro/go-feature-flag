"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[2640],{60891:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(85893),r=t(11151);const l={},o="Canary Release",s={id:"rollout/canary",title:"Canary Release",description:"Canary release is a technique to reduce the risk of introducing a new software version in production by slowly rolling out the change to a small subset of users before rolling it out to the entire infrastructure and making it available to everybody.",source:"@site/versioned_docs/version-v0.28.2/rollout/canary.md",sourceDirName:"rollout",slug:"/rollout/canary",permalink:"/docs/v0.28.2/rollout/canary",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v0.28.2/rollout/canary.md",tags:[],version:"v0.28.2",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rollout strategies",permalink:"/docs/v0.28.2/rollout/"},next:{title:"Experimentation rollout / A/B Testing",permalink:"/docs/v0.28.2/rollout/experimentation"}},i={},c=[{value:"Example",id:"example",level:2},{value:"YAML",id:"yaml",level:3},{value:"JSON",id:"json",level:3},{value:"TOML",id:"toml",level:3}];function u(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"canary-release",children:"Canary Release"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Canary release"})," is a technique to reduce the risk of introducing a new software version in production by slowly rolling out the change to a small subset of users before rolling it out to the entire infrastructure and making it available to everybody."]}),"\n",(0,a.jsxs)(n.p,{children:["This is the easiest rollout strategy available.",(0,a.jsx)(n.br,{}),"\n","You just have to select a percentage of your users in your flag, and the ",(0,a.jsx)(n.code,{children:"True"})," behavior will apply to them."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.h3,{id:"yaml",children:"YAML"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'linenums="1"',children:"canary-flag:\n  true: true\n  false: false\n  default: false\n  # highlight-next-line\n  percentage: 1\n"})}),"\n",(0,a.jsx)(n.h3,{id:"json",children:"JSON"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "canary-flag": {\n    "true": true,\n    "false": false,\n    "default": "false,\n    # highlight-next-line\n    "percentage": 1\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"toml",children:"TOML"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:"[canary-flag]\ntrue = true\nfalse = false\ndefault = false\n# highlight-next-line\npercentage = 1.0\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var a=t(67294);const r={},l=a.createContext(r);function o(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);