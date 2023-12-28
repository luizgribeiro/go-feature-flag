"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[15314],{95444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(85893),s=n(11151);const i={sidebar_position:3},r="S3 Bucket",c={id:"go_module/store_file/s3",title:"S3 Bucket",description:"The S3Retriever will use the aws-sdk to access your flag in an S3 bucket.",source:"@site/versioned_docs/version-v1.18.2/go_module/store_file/s3.md",sourceDirName:"go_module/store_file",slug:"/go_module/store_file/s3",permalink:"/docs/v1.18.2/go_module/store_file/s3",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.18.2/go_module/store_file/s3.md",tags:[],version:"v1.18.2",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"HTTP endpoint",permalink:"/docs/v1.18.2/go_module/store_file/http"},next:{title:"Kubernetes configmaps",permalink:"/docs/v1.18.2/go_module/store_file/kubernetes_configmaps"}},l={},d=[{value:"Example",id:"example",level:2},{value:"Configuration fields",id:"configuration-fields",level:2}];function a(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"s3-bucket",children:"S3 Bucket"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag/retriever/s3retriever/#Retriever",children:(0,o.jsx)(t.strong,{children:"S3Retriever"})})," will use the ",(0,o.jsx)(t.a,{href:"https://github.com/aws/aws-sdk-go",children:"aws-sdk"})," to access your flag in an S3 bucket."]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-go",metastring:'linenums="1"',children:'awsConfig, _ := config.LoadDefaultConfig(context.Background())\nerr := ffclient.Init(ffclient.Config{\n    PollingInterval: 3 * time.Second,\n    Retriever: &s3retrieverv2.Retriever{\n        Bucket: "tpoi-test",\n        Item:   "flag-config.goff.yaml",\n        AwsConfig: &awsCOnfig,\n    },\n})\ndefer ffclient.Close()\n'})}),"\n",(0,o.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,o.jsx)(t.p,{children:"To configure your S3 file location:"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Field"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"Bucket"})})}),(0,o.jsx)(t.td,{children:"The name of your bucket."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"Item"})})}),(0,o.jsx)(t.td,{children:"The location of your file in the bucket."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.code,{children:"AwsConfig"})})}),(0,o.jsxs)(t.td,{children:["An instance of ",(0,o.jsx)(t.code,{children:"aws.Config"})," that configure your access to AWS ",(0,o.jsx)("br",{}),(0,o.jsxs)(t.em,{children:["check ",(0,o.jsx)(t.a,{href:"https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html",children:"this documentation for more info"})]}),"."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var o=n(67294);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);