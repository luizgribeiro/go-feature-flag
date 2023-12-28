"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[28242],{89002:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var o=r(85893),i=r(11151);const n={sidebar_position:30},s="Custom Retriever",a={id:"go_module/store_file/custom",title:"Custom Retriever",description:"To create a custom retriever you must have a struct that implements the Retriever interface.",source:"@site/versioned_docs/version-v1.20.1/go_module/store_file/custom.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/custom",permalink:"/docs/go_module/store_file/custom",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.20.1/go_module/store_file/custom.md",tags:[],version:"v1.20.1",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"File",permalink:"/docs/go_module/store_file/file"},next:{title:"Export data",permalink:"/docs/go_module/data_collection/"}},c={},l=[];function u(e){const t={a:"a",code:"code",em:"em",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"custom-retriever",children:"Custom Retriever"}),"\n",(0,o.jsxs)(t.p,{children:["To create a custom retriever you must have a ",(0,o.jsx)(t.code,{children:"struct"})," that implements the ",(0,o.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/#Retriever",children:(0,o.jsx)(t.code,{children:"Retriever"})})," interface."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",metastring:'linenums="1"',children:"type Retriever interface {\n\tRetrieve(ctx context.Context) ([]byte, error)\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Retrieve"})," \tfunction is supposed to load the file and to return a ",(0,o.jsx)(t.code,{children:"[]byte"})," of your flag configuration file."]}),"\n",(0,o.jsxs)(t.p,{children:["You can check existing ",(0,o.jsx)(t.code,{children:"Retriever"})," ",(0,o.jsxs)(t.em,{children:["(",(0,o.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/retriever/fileretriever/retriever.go",children:"file"}),",\n",(0,o.jsx)(t.a,{href:"https://github.com/thomaspoignant/go-feature-flag/blob/main/retriever/s3retriever/retriever.go",children:"s3"}),", ...)"]})," to have an idea on how to do build your own."]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>s});var o=r(67294);const i={},n=o.createContext(i);function s(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);