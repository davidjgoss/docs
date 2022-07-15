"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2},i="Using Marquez with dbt",s={unversionedId:"guides/dbt",id:"guides/dbt",title:"Using Marquez with dbt",description:"Adapted from a blog post by Ross Turk",source:"@site/docs/guides/dbt.md",sourceDirName:"guides",slug:"/guides/dbt",permalink:"/docs/guides/dbt",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/guides/dbt.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Backfilling Airflow DAGs Using Marquez",permalink:"/docs/guides/airflow"}},l={},d=[{value:"Adapted from a blog post by Ross Turk",id:"adapted-from-a-blog-post-by-ross-turk",level:4},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Instructions",id:"instructions",level:3},{value:"Important Details",id:"important-details",level:3}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-marquez-with-dbt"},"Using Marquez with dbt"),(0,r.kt)("h4",{id:"adapted-from-a-blog-post-by-ross-turk"},"Adapted from a ",(0,r.kt)("a",{parentName:"h4",href:"https://openlineage.io/blog/dbt-with-marquez/"},"blog post")," by Ross Turk"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This guide was developed using an ",(0,r.kt)("strong",{parentName:"p"},"earlier version")," of this integration and may require modification.")),(0,r.kt)("p",null,"Each time it runs, dbt generates a trove of metadata about datasets and the work it performs with them. This tutorial covers the harvesting and effective use of this metadata. For data, the tutorial makes use of the Stackoverflow public data set in BigQuery. The end-product will be two tables of data about trends in Stackoverflow discussions of ELT."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dbt"),(0,r.kt)("li",{parentName:"ul"},"Docker Desktop"),(0,r.kt)("li",{parentName:"ul"},"git"),(0,r.kt)("li",{parentName:"ul"},"Google Cloud Service account  "),(0,r.kt)("li",{parentName:"ul"},"Google Cloud Service account JSON key file")),(0,r.kt)("p",null,"Note: your Google Cloud account should have access to BigQuery and read/write access to your GCS bucket. Giving your key file an easy-to-remember name (bq-dbt-demo.json) is recommended. Finally, if using macOS Monterey (macOS 12), you will need to release port 5000 by ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/forums/thread/682332"},"disabling the AirPlay Receiver"),"."),(0,r.kt)("h3",{id:"instructions"},"Instructions"),(0,r.kt)("p",null,"First, run through this excellent ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/tutorial/setting-up"},"dbt tutorial"),". It explains how to create a BigQuery project, provision a service account, download a JSON key, and set up a local dbt environment. The rest of this example assumes the existence of a BigQuery project where models can be run, as well as proper configuration of dbt to connect to the project."),(0,r.kt)("p",null,"Next, start a local Marquez instance to store lineage metadata. Make sure Docker is running, and then clone the Marquez repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/MarquezProject/marquez.git && cd marquez\n./docker/up.sh\n")),(0,r.kt)("p",null,"Check to make sure Marquez is up by visiting http://localhost:3000. The page should display an empty Marquez instance and a message saying there is no data. Also, it should be possible to see the server output from requests in the terminal window where Marquez is running. This window should remain open."),(0,r.kt)("p",null,"Now, in a new terminal window/pane, clone the following GitHub project, which contains some database models:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/rossturk/stackostudy.git && cd stackostudy\n")),(0,r.kt)("p",null,"Now it is time to install dbt and its integration with OpenLineage. Doing this in a Python virtual environment is recommended. To create one and install necessary packages, run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python -m venv virtualenv\nsource virtualenv/bin/activate\npip install dbt dbt-openlineage\n")),(0,r.kt)("p",null,"Keep in mind that dbt learns how to connect to a BigQuery project by looking for a matching profile in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.dbt/profiles.yml"),". Create or edit this file so it contains a section with the project's BigQuery connection details. Also, point to the location of the JSON key for the service account. Consult ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/tutorial/create-a-project-dbt-cli#connect-to-bigquery"},"this section")," in the dbt documentation for more help with dbt profiles. At this point, profiles.yml should look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"stackostudy:\n  target: dev\n  outputs:\n    dev:\n      type: bigquery\n      method: service-account\n      keyfile: /Users/rturk/.dbt/dbt-example.json\n      project: dbt-example\n      dataset: stackostudy\n      threads: 1\n      timeout_seconds: 300\n      location: US\n      priority: interactive\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dbt debug")," command checks to see that everything has been configured correctly. Running it now should produce output like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"% dbt debug\nRunning with dbt=0.20.1\ndbt version: 0.20.1\npython version: 3.8.12\npython path: /opt/homebrew/Cellar/dbt/0.20.1_1/libexec/bin/python3\nos info: macOS-11.5.2-arm64-arm-64bit\nUsing profiles.yml file at /Users/rturk/.dbt/profiles.yml\nUsing dbt_project.yml file at /Users/rturk/projects/stackostudy/dbt_project.yml\n\u200b\nConfiguration:\n  profiles.yml file [OK found and valid]\n  dbt_project.yml file [OK found and valid]\n\u200b\nRequired dependencies:\n - git [OK found]\n\u200b\nConnection:\n  method: service-account\n  database: stacko-study\n  schema: stackostudy\n  location: US\n  priority: interactive\n  timeout_seconds: 300\n  maximum_bytes_billed: None\n  Connection test: OK connection ok\n")),(0,r.kt)("h3",{id:"important-details"},"Important Details"),(0,r.kt)("p",null,"Some important conventions should be followed when designing dbt models for use with OpenLineage. Following these conventions will help ensure that OpenLineage collects the most complete metadata possible."),(0,r.kt)("p",null,"First, any datasets existing outside the dbt project should be defined in a schema YAML file inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"models/")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"version: 2\n\u200b\nsources:\n  - name: stackoverflow\n    database: bigquery-public-data\n    schema: stackoverflow\n    tables:\n      - name: posts_questions\n      - name: posts_answers\n      - name: users\n      - name: votes\n")),(0,r.kt)("p",null,"This contains the name of the external dataset - in this case, bigquery-public-datasets - and lists the tables that are used by the models in this project. The name of the file does not matter, as long as it ends with .yml and is inside ",(0,r.kt)("inlineCode",{parentName:"p"},"models/"),". Hardcoding dataset and table names into queries can result in incomplete data."),(0,r.kt)("p",null,"When writing queries, be sure to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ ref() }}")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ source() }}")," jinja functions when referring to data sources. The ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ ref() }}")," function can be used to refer to tables within the same model, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ source() }}")," function refers to tables we have defined in schema.yml. That way, dbt will properly keep track of the relationships between datasets. For example, to select from both an external dataset and one in this model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"select * from {{ source('stackoverflow', 'posts_answers') }}\nwhere parent_id in (select id from {{ ref('filtered_questions') }} )\n")))}u.isMDXComponent=!0}}]);