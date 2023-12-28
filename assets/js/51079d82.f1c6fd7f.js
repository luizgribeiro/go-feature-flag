"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[54661],{52804:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=t(85893),a=t(11151),l=t(74866),i=t(85162);const s={sidebar_position:91,description:"Lint your config"},o="Lint your config",u={id:"linter",title:"Lint your config",description:"Lint your config",source:"@site/versioned_docs/version-v1.8.2/linter.mdx",sourceDirName:".",slug:"/linter",permalink:"/docs/v1.8.2/linter",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.8.2/linter.mdx",tags:[],version:"v1.8.2",sidebarPosition:91,frontMatter:{sidebar_position:91,description:"Lint your config"},sidebar:"tutorialSidebar",previous:{title:"Migrate from v0.x.x to v1.x.x",permalink:"/docs/v1.8.2/migrate_v0_v1"},next:{title:"Frequently Asked Questions",permalink:"/docs/v1.8.2/faq"}},c={},d=[{value:"Install the linter",id:"install-the-linter",level:2},{value:"Install using Homebrew (mac and linux)",id:"install-using-homebrew-mac-and-linux",level:3},{value:"Install using Scoop (windows)",id:"install-using-scoop-windows",level:3},{value:"Install using Docker",id:"install-using-docker",level:3},{value:"Use the linter",id:"use-the-linter",level:2},{value:"Use the linter in your CI (continuous integration)",id:"use-the-linter-in-your-ci-continuous-integration",level:2}];function h(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"lint-your-config",children:"Lint your config"}),"\n",(0,r.jsxs)(n.p,{children:["A faulty configuration could make ",(0,r.jsx)(n.strong,{children:"GO Feature Flag"})," not the way you expect.",(0,r.jsx)(n.br,{}),"\n","This is why we have introduced the ",(0,r.jsx)(n.code,{children:"go-feature-flag-lint"})," a command line tool validates that a flags file can be parsed by ",(0,r.jsx)(n.strong,{children:"GO Feature Flag"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"We recommend you to use this command line in your CI/CD pipelines to avoid any disappointment."})}),"\n",(0,r.jsx)(n.h2,{id:"install-the-linter",children:"Install the linter"}),"\n",(0,r.jsx)(n.h3,{id:"install-using-homebrew-mac-and-linux",children:"Install using Homebrew (mac and linux)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"brew tap thomaspoignant/homebrew-tap\nbrew install go-feature-flag-lint\n"})}),"\n",(0,r.jsx)(n.h3,{id:"install-using-scoop-windows",children:"Install using Scoop (windows)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"scoop bucket add org https://github.com/thomaspoignant/scoop.git\nscoop install go-feature-flag-lint\n"})}),"\n",(0,r.jsx)(n.h3,{id:"install-using-docker",children:"Install using Docker"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker pull thomaspoignant/go-feature-flag-lint:latest\n"})}),"\n",(0,r.jsx)(n.h2,{id:"use-the-linter",children:"Use the linter"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"./go-feature-flag-lint \\\n  --input-format=yaml \\\n  --input-file=/input/my-go-feature-flag-config.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"The command line has 2 arguments you should specify."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--input-file"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"(mandatory)"})," The location of your configuration file."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"--input-format"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"(mandatory)"})," The format of your current configuration file. ",(0,r.jsx)("br",{}),"Available formats are ",(0,r.jsx)(n.code,{children:"yaml"}),", ",(0,r.jsx)(n.code,{children:"json"}),", ",(0,r.jsx)(n.code,{children:"toml"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"use-the-linter-in-your-ci-continuous-integration",children:"Use the linter in your CI (continuous integration)"}),"\n",(0,r.jsxs)(n.p,{children:["You can run ",(0,r.jsx)(n.code,{children:"go-feature-flag-lint"})," using GitHub actions:"]}),"\n",(0,r.jsxs)(l.Z,{groupId:"code",children:[(0,r.jsx)(i.Z,{value:"githubaction",label:"Github Action",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'name: "Build"\non:\n  push:\n    branches:\n      - main\n  pull_request:\n    types: [ opened, synchronize, reopened ]\n\njobs:\n  lint:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: docker://thomaspoignant/go-feature-flag-lint:latest\n        with:\n          args: --input-file=/github/workspace/path/to/your/config.yaml --input-format=yaml\n'})})}),(0,r.jsx)(i.Z,{value:"circleci",label:"CircleCi",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"version: 2.1\njobs:\n  build:\n    docker:\n     - image: cimg/base:2022.05\n\n    steps:\n      - checkout\n      - run: curl -L $(curl -s https://api.github.com/repos/thomaspoignant/go-feature-flag/releases/latest | jq -r '.assets[] | select(.name|match(\"Linux_x86_64.tar.gz$\")) | .browser_download_url' | grep 'go-feature-flag-lint') --output release.tar.gz && tar -zxvf release.tar.gz\n      - run: ./go-feature-flag-lint --input-format=yaml --input-file=flag-config.yaml # please put the right file name\n"})})}),(0,r.jsx)(i.Z,{value:"gitlab",label:"Gitlab",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"image: ubuntu\nlint-job:\n  stage: build\n\n  before_script:\n    - apt-get -qq update\n    - apt-get install -y jq curl\n\n  script:\n    - curl -L $(curl -s https://api.github.com/repos/thomaspoignant/go-feature-flag/releases/latest | jq -r '.assets[] | select(.name|match(\"Linux_x86_64.tar.gz$\")) | .browser_download_url' | grep 'go-feature-flag-lint') --output release.tar.gz && tar -zxvf release.tar.gz\n    - ./go-feature-flag-lint --input-format=yaml --input-file=flag-config.yaml # please put the right file name\n"})})})]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var l=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(36905),l=t(12466),i=t(16550),s=t(20469),o=t(91980),u=t(67392),c=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[u,d]=p({queryString:t,groupId:a}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),b=(()=>{const e=u??f;return g({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=s[t].value;a!==r&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function w(e){const n=(0,m.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(67294);const a={},l=r.createContext(a);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);