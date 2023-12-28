"use strict";(self.webpackChunkgo_feature_flag_website=self.webpackChunkgo_feature_flag_website||[]).push([[85631],{4552:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=i(85893),r=i(11151);const o={sidebar_position:10,description:"How to configure the GO module to use it directly in your code."},l="Configuration",s={id:"go_module/configuration",title:"Configuration",description:"How to configure the GO module to use it directly in your code.",source:"@site/versioned_docs/version-v1.20.1/go_module/configuration.md",sourceDirName:"go_module",slug:"/go_module/configuration",permalink:"/docs/go_module/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/thomaspoignant/go-feature-flag/tree/main/website/versioned_docs/version-v1.20.1/go_module/configuration.md",tags:[],version:"v1.20.1",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"How to configure the GO module to use it directly in your code."},sidebar:"tutorialSidebar",previous:{title:"Use as a GO module",permalink:"/docs/category/use-as-a-go-module"},next:{title:"Performing flag evaluations",permalink:"/docs/go_module/target_user"}},a={},d=[{value:"Configuration fields",id:"configuration-fields",level:2},{value:"Example",id:"example",level:2},{value:"Multiple configuration flag files",id:"multiple-configuration-flag-files",level:2},{value:"Working with multiple go-feature-flag",id:"working-with-multiple-go-feature-flag",level:3},{value:"Example",id:"example-1",level:4},{value:"Offline mode",id:"offline-mode",level:2},{value:"Advanced configuration",id:"advanced-configuration",level:2}];function c(e){const t={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"go-feature-flag"})," needs to be initialized to be used.",(0,n.jsx)(t.br,{}),"\n","During the initialization you must give a ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#Config",children:(0,n.jsx)(t.code,{children:"ffclient.Config{}"})})," configuration object."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#Config",children:(0,n.jsx)(t.code,{children:"ffclient.Config{}"})})," is the only location where you can put the configuration."]}),"\n",(0,n.jsx)(t.h2,{id:"configuration-fields",children:"Configuration fields"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Retriever"})}),(0,n.jsxs)(t.td,{children:["The configuration retriever you want to use to get your flag file",(0,n.jsx)("br",{})," ",(0,n.jsxs)(t.em,{children:["See ",(0,n.jsx)(t.a,{href:"/docs/go_module/store_file/",children:"Store your flag file"})," for the configuration details"]}),".",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," ",(0,n.jsxs)(t.em,{children:["This field is optional if ",(0,n.jsx)(t.code,{children:"Retrievers"})]})," is configured."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Retrievers"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"Retrievers"})," is exactly the same thing as ",(0,n.jsx)(t.code,{children:"Retriever"})," but you can configure more than 1 source for your flags.",(0,n.jsx)("br",{}),"All flags are retrieved in parallel, but we are applying them in the order you provided them ",(0,n.jsx)(t.em,{children:"(it means that a flag can be overridden by another flag)"}),". ",(0,n.jsx)("br",{}),(0,n.jsxs)(t.em,{children:["See ",(0,n.jsx)(t.a,{href:"/docs/go_module/store_file/",children:"Store your flag file"})," for the configuration details"]}),". ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," ",(0,n.jsxs)(t.em,{children:["This field is optional if ",(0,n.jsx)(t.code,{children:"Retrievers"})]})," is configured."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Context"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"The context used by the retriever.",(0,n.jsx)("br",{}),"Default: ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"context.Background()"})})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Environment"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)("a",{name:"option_environment"}),(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"The environment the app is running under, can be checked in feature flag rules.",(0,n.jsx)("br",{}),"Default: ",(0,n.jsx)(t.code,{children:'""'}),(0,n.jsx)("br",{}),(0,n.jsxs)(t.em,{children:["Check ",(0,n.jsxs)(t.a,{href:"../configure_flag/flag_format/#environments",children:[(0,n.jsx)(t.strong,{children:'"environments"'})," section"]})," to understand how to use this parameter."]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"DataExporter"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"DataExporter defines how to export data on how your flags are used.",(0,n.jsx)("br",{})," ",(0,n.jsxs)(t.em,{children:["see ",(0,n.jsx)(t.a,{href:"/docs/go_module/data_collection/",children:"export data section"})," for more details"]}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"FileFormat"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"Format of your configuration file. Available formats are ",(0,n.jsx)(t.code,{children:"yaml"}),", ",(0,n.jsx)(t.code,{children:"toml"})," and ",(0,n.jsx)(t.code,{children:"json"}),", if you omit the field it will try to unmarshal the file as a ",(0,n.jsx)(t.code,{children:"yaml"})," file.",(0,n.jsx)("br",{}),"Default: ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"YAML"})})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Logger"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"Logger used to log what ",(0,n.jsx)(t.code,{children:"go-feature-flag"})," is doing.",(0,n.jsx)("br",{}),"If no logger is provided the module will not log anything.",(0,n.jsx)("br",{}),"Default: ",(0,n.jsx)(t.strong,{children:"No log"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Notifiers"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(optional)"}),(0,n.jsx)("br",{}),"List of notifiers to call when your flag file has been changed.",(0,n.jsx)("br",{})," ",(0,n.jsxs)(t.em,{children:["See ",(0,n.jsx)(t.a,{href:"/docs/go_module/notifier/",children:"notifiers section"})," for more details"]}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"PollingInterval"})}),(0,n.jsxs)(t.td,{children:["(optional) Duration to wait before refreshing the flags.",(0,n.jsx)("br",{}),"The minimum polling interval is 1 second.",(0,n.jsx)("br",{}),"Default: ",(0,n.jsx)(t.strong,{children:"60 * time.Second"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EnablePollingJitter"})}),(0,n.jsxs)(t.td,{children:["(optional) set to true if you want to avoid having true periodicity when retrieving your flags. It is useful to avoid having spike on your flag configuration storage in case your application is starting multiple instance at the same time.",(0,n.jsx)("br",{}),"We ensure a deviation that is maximum + or - 10% of your polling interval.",(0,n.jsx)("br",{}),"Default: ",(0,n.jsx)(t.strong,{children:"false"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"StartWithRetrieverError"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(optional)"})," If ",(0,n.jsx)(t.strong,{children:"true"}),", the SDK will start even if we did not get any flags from the retriever. It will serve only default values until the retriever returns the flags.",(0,n.jsx)("br",{}),"The init method will not return any error if the flag file is unreachable.",(0,n.jsx)("br",{}),"Default: ",(0,n.jsx)(t.strong,{children:"false"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Offline"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(optional)"})," If ",(0,n.jsx)(t.strong,{children:"true"}),", the SDK will not try to retrieve the flag file and will not export any data. No notification will be send neither.",(0,n.jsx)("br",{}),"Default: ",(0,n.jsx)(t.strong,{children:"false"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"EvaluationContextEnrichment"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(optional)"})," It is a free ",(0,n.jsx)(t.code,{children:"map[string]interface{}"})," field that will be merged with the evaluation context sent during the evaluations. It is useful to add common attributes to all the evaluation, such as a server version, environment, ...",(0,n.jsx)("br",{}),"All those fields will be included in the custom attributes of the evaluation context.",(0,n.jsx)("br",{}),"If in the evaluation context you have a field with the same name, it will be overriden by the ",(0,n.jsx)(t.code,{children:"evaluationContextEnrichment"}),".",(0,n.jsx)("br",{})," Default: ",(0,n.jsx)(t.strong,{children:"nil"})]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'ffclient.Init(ffclient.Config{ \n    PollingInterval:   3 * time.Second,\n    Logger:         log.New(file, "/tmp/log", 0),\n    Context:        context.Background(),\n    Environment:    os.Getenv("MYAPP_ENV"),\n    Retriever:      &fileretriever.Retriever{Path: "testdata/flag-config.goff.yaml"},\n    FileFormat:     "yaml",\n    Notifiers: []notifier.Notifier{\n        &webhooknotifier.Notifier{\n            EndpointURL: " https://example.com/hook",\n            Secret:     "Secret",\n            Meta: map[string]string{\n                "app.name": "my app",\n            },\n        },\n    },\n    DataExporter: ffclient.DataExporter{\n        FlushInterval:   10 * time.Second,\n        MaxEventInMemory: 1000,\n        Exporter: &file.Exporter{\n            OutputDir: "/output-data/",\n        },\n    },\n    StartWithRetrieverError: false,\n})\n'})}),"\n",(0,n.jsx)(t.h2,{id:"multiple-configuration-flag-files",children:"Multiple configuration flag files"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"go-feature-flag"})," comes ready to use out of the box by calling the ",(0,n.jsx)(t.code,{children:"Init"})," function and, it will be available everywhere.",(0,n.jsx)(t.br,{}),"\n","Since most applications will want to use a single central flag configuration, the package provides this. It is similar to a singleton."]}),"\n",(0,n.jsxs)(t.p,{children:["In all the examples above, they demonstrate using ",(0,n.jsx)(t.code,{children:"go-feature-flag"})," in its singleton style approach."]}),"\n",(0,n.jsx)(t.h3,{id:"working-with-multiple-go-feature-flag",children:"Working with multiple go-feature-flag"}),"\n",(0,n.jsxs)(t.p,{children:["You can also create many ",(0,n.jsx)(t.code,{children:"go-feature-flag"})," clients to use in your application."]}),"\n",(0,n.jsxs)(t.p,{children:["Each will have its own unique set of configurations and flags. Each can read from a different config file and from different places.",(0,n.jsx)(t.br,{}),"\n","All the functions that ",(0,n.jsx)(t.code,{children:"go-feature-flag"})," package supports are mirrored as methods on a ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#GoFeatureFlag",children:(0,n.jsx)(t.code,{children:"GoFeatureFlag"})}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"example-1",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",metastring:'linenums="1"',children:'x, err := ffclient.New(Config{ Retriever: &httpretriever.Retriever{{URL: "http://example.com/flag-config.goff.yaml",}})\ndefer x.Close()\n\ny, err := ffclient.New(Config{ Retriever: &httpretriever.Retriever{{URL: "http://example.com/test2.goff.yaml",}})\ndefer y.Close()\n\nuser := ffcontext.NewEvaluationContext("user-key")\nx.BoolVariation("test-flag", user, false)\ny.BoolVariation("test-flag", user, false)\n\n// ...\n'})}),"\n",(0,n.jsxs)(t.p,{children:["When working with multiple ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#GoFeatureFlag",children:(0,n.jsx)(t.code,{children:"GoFeatureFlag"})}),", it is up to the user to keep track of the different ",(0,n.jsx)(t.a,{href:"https://pkg.go.dev/github.com/thomaspoignant/go-feature-flag#GoFeatureFlag",children:(0,n.jsx)(t.code,{children:"GoFeatureFlag"})})," instances."]}),"\n",(0,n.jsx)(t.h2,{id:"offline-mode",children:"Offline mode"}),"\n",(0,n.jsxs)(t.p,{children:["In some situations, you might want to stop making remote calls and fall back to default values for your feature flags.",(0,n.jsx)(t.br,{}),"\n","For example, if your software is both cloud-hosted and distributed to customers to run on-premise, it might make sense\nto fall back to defaults when running on-premise."]}),"\n",(0,n.jsxs)(t.p,{children:["You can do this by setting ",(0,n.jsx)(t.code,{children:"Offline"})," mode in the client's Config."]}),"\n",(0,n.jsx)(t.h2,{id:"advanced-configuration",children:"Advanced configuration"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/go_module/data_collection/",children:"Export data from your flag variations"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/go_module/notifier/",children:"Be notified when your flags change"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>l});var n=i(67294);const r={},o=n.createContext(r);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);