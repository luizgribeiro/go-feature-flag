"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[81379],{76129:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(85893),r=t(11151);const i={sidebar_position:5},s="Google Cloud Storage",l={id:"go_module/store_file/google_cloud_storage",title:"Google Cloud Storage",description:"The Google Cloud Storage Retriever",source:"@site/versioned_docs/version-v1.8.2/go_module/store_file/google_cloud_storage.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/google_cloud_storage",permalink:"/docs/v1.8.2/go_module/store_file/google_cloud_storage",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.8.2/go_module/store_file/google_cloud_storage.md",tags:[],version:"v1.8.2",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Kubernetes configmaps",permalink:"/docs/v1.8.2/go_module/store_file/kubernetes_configmaps"},next:{title:"Github",permalink:"/docs/v1.8.2/go_module/store_file/github"}},d={},c=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function a(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"google-cloud-storage",children:"Google Cloud Storage"}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/gcstorageretriever/#Retriever",children:(0,n.jsx)(o.strong,{children:"Google Cloud Storage Retriever"})}),"\nwill use the ",(0,n.jsx)(o.a,{href:"https://pkg.go.dev/cloud.google.com/go/storage",children:"google-cloud-storage package"}),"\nand ",(0,n.jsx)(o.a,{href:"https://pkg.go.dev/google.golang.org/api/option",children:"google-api-options package"})," to access your flag in Google Cloud\nStorage."]}),"\n",(0,n.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-go",children:'err := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &gcstorageretriever.Retriever{\n\t    Options: []option.ClientOption{option.WithoutAuthentication()},\n\t\tBucket: "2093u4pkasjc3",\n\t\tObject: "flags.yaml",\n\t}\n})\ndefer ffclient.Close()\n'})}),"\n",(0,n.jsx)(o.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,n.jsx)(o.p,{children:"To configure your Google Cloud Storage file location:"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Field"}),(0,n.jsx)(o.th,{children:"Description"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.code,{children:"Bucket"})})}),(0,n.jsx)(o.td,{children:"The name of your bucket."})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.code,{children:"Object"})})}),(0,n.jsx)(o.td,{children:"The name of your object in your bucket."})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:(0,n.jsx)(o.strong,{children:(0,n.jsx)(o.code,{children:"Option"})})}),(0,n.jsxs)(o.td,{children:["An instance of ",(0,n.jsx)(o.code,{children:"option.ClientOption"})," that configures your access to Google Cloud. ",(0,n.jsx)("br",{})," Check ",(0,n.jsx)(o.a,{href:"https://cloud.google.com/docs/authentication",children:"this documentation for more info"}),"."]})]})]})]})]})}function g(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>l,a:()=>s});var n=t(67294);const r={},i=n.createContext(r);function s(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);