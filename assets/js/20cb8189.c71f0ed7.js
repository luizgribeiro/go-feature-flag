"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[55438],{53265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(85893),r=n(11151),l=n(74866),o=n(85162);const s={},u="Canary Release",i={id:"configure_flag/rollout/canary",title:"Canary Release",description:"Canary release is a technique to reduce the risk of introducing a new software version in production by slowly rolling out the change to a small subset of users before rolling it out to the entire infrastructure and making it available to everybody.",source:"@site/versioned_docs/version-v1.19.0/configure_flag/rollout/canary.mdx",sourceDirName:"configure_flag/rollout",slug:"/configure_flag/rollout/canary",permalink:"/docs/v1.19.0/configure_flag/rollout/canary",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.19.0/configure_flag/rollout/canary.mdx",tags:[],version:"v1.19.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rollout strategies",permalink:"/docs/v1.19.0/category/rollout-strategies"},next:{title:"Experimentation rollout / A/B Testing",permalink:"/docs/v1.19.0/configure_flag/rollout/experimentation"}},c={},d=[{value:"Example",id:"example",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"canary-release",children:"Canary Release"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Canary release"})," is a technique to reduce the risk of introducing a new software version in production by slowly rolling out the change to a small subset of users before rolling it out to the entire infrastructure and making it available to everybody."]}),"\n",(0,a.jsxs)(t.p,{children:["This is the easiest rollout strategy available.\nYou just have to select a percentage of your users in your flag, and the ",(0,a.jsx)(t.code,{children:"True"})," behavior will apply to them."]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(l.Z,{groupId:"code",children:[(0,a.jsx)(o.Z,{value:"yaml",label:"YAML",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"canary-flag:\n  variations:\n    oldBehavior: false\n    canary: true\n  defaultRule:\n  # highlight-start\n    percentage:\n      oldBehavior: 99\n      canary: 1\n  # highlight-end\n"})})}),(0,a.jsx)(o.Z,{value:"json",label:"JSON",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:' {\n  "canary-flag": {\n    "variations": {\n      "oldBehavior": false,\n      "canary": true\n    },\n    "defaultRule": {\n# highlight-start\n      "percentage": {\n        "oldBehavior": 99,\n        "canary": 1\n      }\n# highlight-end\n    }\n  }\n}\n'})})}),(0,a.jsx)(o.Z,{value:"toml",label:"TOML",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-toml",children:"[canary-flag.variations]\noldBehavior = false\ncanary = true\n\n# highlight-start\n[canary-flag.defaultRule.percentage]\noldBehavior = 99\ncanary = 1\n# highlight-end\n"})})})]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var l=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),l=n(12466),o=n(16550),s=n(20469),u=n(91980),i=n(67392),c=n(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=h(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,d]=g({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),m=(()=>{const e=i??p;return f({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{m&&u(m)}),[m]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function y(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),r=s[n].value;r!==a&&(i(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.Z)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var a=n(67294);const r={},l=a.createContext(r);function o(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);