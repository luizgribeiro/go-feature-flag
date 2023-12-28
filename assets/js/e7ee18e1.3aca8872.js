"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[51607],{45391:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=a(85893),n=a(11151);a(74866),a(85162);const o={title:"Limiting Access to the relay proxy with API Keys",description:"New API Key feature in GO Feature Flag Relay Proxy 1.7.0 allows you to restrict access to the relay proxy to only known clients.",authors:["thomaspoignant"],tags:["feature flag","relay-proxy"],image:"http://gofeatureflag.org/assets/images/20945235-ede9f141540af91fe5fa5fdc4f3d7fe6.png"},l=void 0,s={permalink:"/blog/2023/04/12/relay_proxy_api_keys",editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/blog/2023-04-12-relay_proxy_api_keys/index.mdx",source:"@site/blog/2023-04-12-relay_proxy_api_keys/index.mdx",title:"Limiting Access to the relay proxy with API Keys",description:"New API Key feature in GO Feature Flag Relay Proxy 1.7.0 allows you to restrict access to the relay proxy to only known clients.",date:"2023-04-12T00:00:00.000Z",formattedDate:"April 12, 2023",tags:[{label:"feature flag",permalink:"/blog/tags/feature-flag"},{label:"relay-proxy",permalink:"/blog/tags/relay-proxy"}],readingTime:2.54,hasTruncateMarker:!0,authors:[{name:"Thomas Poignant",title:"Creator of GO Feature Flag",url:"https://github.com/thomaspoignant",imageURL:"https://github.com/thomaspoignant.png",key:"thomaspoignant"}],frontMatter:{title:"Limiting Access to the relay proxy with API Keys",description:"New API Key feature in GO Feature Flag Relay Proxy 1.7.0 allows you to restrict access to the relay proxy to only known clients.",authors:["thomaspoignant"],tags:["feature flag","relay-proxy"],image:"http://gofeatureflag.org/assets/images/20945235-ede9f141540af91fe5fa5fdc4f3d7fe6.png"},unlisted:!1,prevItem:{title:"Enhancing Flag Configuration with Flag Metadata",permalink:"/blog/2023/06/09/flag-metadata"},nextItem:{title:"Feature Flag best practice",permalink:"/blog/feature-flag-best-practice"}},u={authorsImageUrls:[void 0]},i=[];function c(e){const t={code:"code",img:"img",p:"p",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"security",src:a(25914).Z+"",width:"1000",height:"682"})}),"\n",(0,r.jsx)(t.p,{children:"GO Feature Flag Relay Proxy is a powerful tool that enables you to evaluate your feature flags without deploying code changes.\nIt allows you to test and roll out new features to your users gradually, and to monitor the performance of your code in real-time."}),"\n",(0,r.jsxs)(t.p,{children:["With the recent release of version ",(0,r.jsx)(t.code,{children:"v1.7.0"}),", GO Feature Flag Relay Proxy introduces a new feature that enhances the\nsecurity of your feature flag evaluations.\nThis new feature allows you to control who can access your relay proxy by configuring API Keys."]})]})}function f(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>l});a(67294);var r=a(36905);const n={tabItem:"tabItem_Ymn6"};var o=a(85893);function l(e){let{children:t,hidden:a,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,l),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(67294),n=a(36905),o=a(12466),l=a(16550),s=a(20469),u=a(91980),i=a(67392),c=a(50012);function f(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return f(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,f]=g({queryString:a,groupId:n}),[h,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),y=(()=>{const e=i??h;return p({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{y&&u(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),f(e),m(e)}),[f,m,o]),tabValues:o}}var m=a(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(85893);function v(e){let{className:t,block:a,selectedValue:r,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=s[a].value;n!==r&&(i(t),l(n))},f=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:f,onClick:c,...o,className:(0,n.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=h(e);return(0,b.jsxs)("div",{className:(0,n.Z)("tabs-container",y.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(x,{...e,...t})]})}function k(e){const t=(0,m.Z)();return(0,b.jsx)(w,{...e,children:f(e.children)},String(t))}},25914:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/20945235-e99155028d107342da6c9cac92235b61.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>l});var r=a(67294);const n={},o=r.createContext(n);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);