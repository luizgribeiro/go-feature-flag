"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[7095],{78105:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=t(85893),r=t(11151),l=t(74866),o=t(85162);const i={},s="Scheduled rollout",u={id:"configure_flag/rollout/scheduled",title:"Scheduled rollout",description:"Scheduling introduces the ability for users to changes their flags for future points in time.",source:"@site/versioned_docs/version-v1.0.1/configure_flag/rollout/scheduled.mdx",sourceDirName:"configure_flag/rollout",slug:"/configure_flag/rollout/scheduled",permalink:"/docs/v1.0.1/configure_flag/rollout/scheduled",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.0.1/configure_flag/rollout/scheduled.mdx",tags:[],version:"v1.0.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Progressive rollout",permalink:"/docs/v1.0.1/configure_flag/rollout/progressive"},next:{title:"Use as a GO module",permalink:"/docs/v1.0.1/category/use-as-a-go-module"}},c={},d=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"scheduled-rollout",children:"Scheduled rollout"}),"\n",(0,a.jsx)(n.p,{children:"Scheduling introduces the ability for users to changes their flags for future points in time.\nWhile this sounds deceptively straightforward, it unlocks the potential for users to create complex release strategies by scheduling the incremental steps in advance."}),"\n",(0,a.jsx)(n.p,{children:"For example, you may want to turn a feature ON for internal testing tomorrow and then enable it for your \u2018beta\u2019 user segment four days later."}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(l.Z,{groupId:"code",children:[(0,a.jsx)(o.Z,{value:"yaml",label:"YAML",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'scheduled-flag:\n  variations:\n    variationA: A\n    variationB: B\n  defaultRule:\n    name: legacyDefaultRule\n    percentage:\n      variationA: 100\n      variationB: 0\n# highlight-start\n  scheduledRollout:\n    - date: 2020-04-10T00:00:00.1+02:00\n      targeting:\n        - name: legacyRuleV0\n          query: beta eq "true"\n          percentage:\n            variationA: 0\n            variationB: 100\n\n    - date: 2022-05-12T15:36:00.1+02:00\n      targeting:\n        - name: legacyRuleV0\n          query: beta eq "false"\n# highlight-end\n'})})}),(0,a.jsx)(o.Z,{value:"json",label:"JSON",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "scheduled-flag": {\n    "variations": {\n    "variationA": "A",\n    "variationB": "B"\n  },\n    "defaultRule": {\n    "name": "legacyDefaultRule",\n    "percentage": {\n    "variationA": 100,\n    "variationB": 0\n  }\n  },\n    # highlight-start\n    "scheduledRollout": [\n  {\n    "date": "2020-04-09T22:00:00.100Z",\n    "targeting": [\n  {\n    "name": "legacyRuleV0",\n    "query": "beta eq \\"true\\"",\n    "percentage": {\n    "variationA": 0,\n    "variationB": 100\n  }\n  }\n    ]\n  },\n  {\n    "date": "2022-05-12T13:36:00.100Z",\n    "targeting": [\n  {\n    "name": "legacyRuleV0",\n    "query": "beta eq \\"false\\""\n  }\n    ]\n  }\n    ],\n    # highlight-end\n  }\n}\n'})})}),(0,a.jsx)(o.Z,{value:"toml",label:"TOML",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[scheduled-flag.variations]\nvariationA = "A"\nvariationB = "B"\n\n[scheduled-flag.defaultRule]\nname = "legacyDefaultRule"\n\n[scheduled-flag.defaultRule.percentage]\nvariationA = 100\nvariationB = 0\n\n# highlight-start\n[[scheduled-flag.scheduledRollout]]\ndate = 2020-04-09T22:00:00.100Z\n\n[[scheduled-flag.scheduledRollout.targeting]]\nname = "legacyRuleV0"\nquery = \'beta eq "true"\'\n\n[scheduled-flag.scheduledRollout.targeting.percentage]\nvariationA = 0\nvariationB = 100\n\n[[scheduled-flag.scheduledRollout]]\ndate = 2022-05-12T13:36:00.100Z\n\n[[scheduled-flag.scheduledRollout.targeting]]\nname = "legacyRuleV0"\nquery = \'beta eq "false"\'\n# highlight-end\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"You can change any fields that are available on your flag.\nSince your configuration has not been changed manually, it does not trigger any notifier."})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Field"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"steps"})})}),(0,a.jsxs)(n.td,{children:["The only mandatory field in a ",(0,a.jsx)(n.strong,{children:"step"})," is the ",(0,a.jsx)(n.code,{children:"date"}),".",(0,a.jsx)("br",{}),(0,a.jsx)(n.strong,{children:"If no date is provided the step will be skipped."}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"The other attributes of your ",(0,a.jsx)(n.code,{children:"step"})," are what you want to update your flag, so every field available in the ",(0,a.jsx)(n.a,{href:"../flag_format",children:"flag format"})," can be updated.",(0,a.jsx)("br",{}),"The new value in a field will override the existing one."]})]})})]})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var l=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(36905),l=t(12466),o=t(16550),i=t(20469),s=t(91980),u=t(67392),c=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=h(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,d]=g({queryString:t,groupId:r}),[p,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),b=(()=>{const e=u??p;return f({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),r=i[t].value;r!==a&&(u(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=p(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function w(e){const n=(0,m.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var a=t(67294);const r={},l=a.createContext(r);function o(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);