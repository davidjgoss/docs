"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3338],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5465:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1},o=void 0,s={unversionedId:"integrations/spark/spark",id:"integrations/spark/spark",title:"spark",description:"This integation is known to work with Apache Spark 2.4 and later.",source:"@site/docs/integrations/spark/spark.md",sourceDirName:"integrations/spark",slug:"/integrations/spark/",permalink:"/docs/integrations/spark/",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/integrations/spark/spark.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"OpenLineage Integrations",permalink:"/docs/integrations/about"},next:{title:"Quickstart with Jupyter",permalink:"/docs/integrations/spark/quickstart_local"}},p={},l=[{value:"Collecting Lineage in Spark",id:"collecting-lineage-in-spark",level:2},{value:"How to Use the Integration",id:"how-to-use-the-integration",level:2},{value:"SparkListener",id:"sparklistener",level:3},{value:"spark-submit",id:"spark-submit",level:4},{value:"Scheduling from Airflow",id:"scheduling-from-airflow",level:3}],d={toc:l};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This integation is known to work with Apache Spark 2.4 and later.")),(0,r.kt)("h1",{id:"apache-spark"},"Apache Spark"),(0,r.kt)("p",null,"Spark jobs typically run on clusters of machines. A single machine hosts the \"driver\" application,\nwhich constructs a graph of jobs - e.g., reading data from a source, filtering, transforming, and\njoining records, and writing results to some sink- and manages execution of those jobs. Spark's\nfundamental abstraction is the Resilient Distributed Dataset (RDD), which encapsulates distributed\nreads and modifications of records. While RDDs can be used directly, it is far more common to work\nwith Spark Datasets or Dataframes, which is an API that adds explicit schemas for better performance\nand the ability to interact with datasets using SQL. The Dataframe's declarative API enables Spark\nto optimize jobs by analyzing and manipulating an abstract query plan prior to execution."),(0,r.kt)("h2",{id:"collecting-lineage-in-spark"},"Collecting Lineage in Spark"),(0,r.kt)("p",null,"Collecting lineage requires hooking into Spark's ",(0,r.kt)("inlineCode",{parentName:"p"},"ListenerBus")," in the driver application and\ncollecting and analyzing execution events as they happen. Both raw RDD and Dataframe jobs post events\nto the listener bus during execution. These events expose the structure of the job, including the\noptimized query plan, allowing the Spark integration to analyze the job for datasets consumed and\nproduced, including attributes about the storage, such as location in GCS or S3, table names in a\nrelational database or warehouse, such as Redshift or Bigquery, and schemas. In addition to dataset\nand job lineage, Spark SQL jobs also report logical plans, which can be compared across job runs to\ntrack important changes in query plans, which may affect the correctness or speed of a job."),(0,r.kt)("p",null,"A single Spark application may execute multiple jobs. The Spark OpenLineage integration maps one\nSpark job to a single OpenLineage Job. The application will be assigned a Run id at startup and each\njob that executes will report the application's Run id as its parent job run. Thus, an application\nthat reads one or more source datasets, writes an intermediate dataset, then transforms that\nintermediate dataset and writes a final output dataset will report three jobs- the parent application\njob, the initial job that reads the sources and creates the intermediate dataset, and the final job\nthat consumes the intermediate dataset and produces the final output. As an image:\n",(0,r.kt)("img",{alt:"image",src:a(3189).Z,width:"1289",height:"204"})),(0,r.kt)("h2",{id:"how-to-use-the-integration"},"How to Use the Integration"),(0,r.kt)("p",null,"Adding OpenLineage metadata collection to existing Spark jobs was designed to be straightforward\nand unobtrusive to the application. "),(0,r.kt)("h3",{id:"sparklistener"},"SparkListener"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SparkListener")," approach is very simple and covers most cases. The listener simply analyzes\nevents, as they are posted by the SparkContext, and extracts job and dataset metadata that are\nexposed by the RDD and Dataframe dependency graphs. Most data sources, such as filesystem sources\n(including S3 and GCS), JDBC backends, and warehouses such as Redshift and Bigquery can be analyzed\nand reported in this way."),(0,r.kt)("p",null,"Installation requires adding a following package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>io.openlineage</groupId>\n    <artifactId>openlineage-spark</artifactId>\n    <version>{spark-openlineage-version}</version>\n</dependency>\n")),(0,r.kt)("p",null,"or gradle:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"implementation 'io.openlineage:openlineage-spark:{spark-openlineage-version}'\n")),(0,r.kt)("h4",{id:"spark-submit"},"spark-submit"),(0,r.kt)("p",null,"The listener can be enabled by adding the following configuration to a ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-submit")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'spark-submit --conf "spark.extraListeners=io.openlineage.spark.agent.OpenLineageSparkListener" \\\n    --packages "io.openlineage:openlineage-spark:<spark-openlineage-version>" \\\n    --conf "spark.openlineage.url=http://{openlineage.client.host}/api/v1/namespaces/spark_integration/" \\\n    --class com.mycompany.MySparkApp my_application.jar\n')),(0,r.kt)("p",null,"The SparkListener reads its configuration from SparkConf parameters. These can be specified on the command line (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'--conf "spark.openlineage.url=http://{openlineage.client.host}/api/v1/namespaces/my_namespace/job/the_job"'),") or from the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/spark-defaults.conf")," file."),(0,r.kt)("p",null,"The following parameters can be specified"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.openlineage.host"),(0,r.kt)("td",{parentName:"tr",align:null},"The hostname of the OpenLineage API server where events should be reported"),(0,r.kt)("td",{parentName:"tr",align:null},"http://localhost:5000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.openlineage.version"),(0,r.kt)("td",{parentName:"tr",align:null},"The API version of the OpenLineage API server"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.openlineage.namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"The default namespace to be applied for any jobs submitted"),(0,r.kt)("td",{parentName:"tr",align:null},"MyNamespace")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.openlineage.parentJobName"),(0,r.kt)("td",{parentName:"tr",align:null},"The job name to be used for the parent job facet"),(0,r.kt)("td",{parentName:"tr",align:null},"ParentJobName")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.openlineage.parentRunId"),(0,r.kt)("td",{parentName:"tr",align:null},"The RunId of the parent job that initiated this Spark job"),(0,r.kt)("td",{parentName:"tr",align:null},"xxxx-xxxx-xxxx-xxxx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.openlineage.apiKey"),(0,r.kt)("td",{parentName:"tr",align:null},"An API key to be used when sending events to the OpenLineage server"),(0,r.kt)("td",{parentName:"tr",align:null},"abcdefghijk")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.openlineage.url.param.xyz"),(0,r.kt)("td",{parentName:"tr",align:null},"A url parameter (replace xyz) and value to be included in requests to the OpenLineage API server"),(0,r.kt)("td",{parentName:"tr",align:null},"abcdefghijk")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"spark.openlineage.consoleTransport"),(0,r.kt)("td",{parentName:"tr",align:null},"Events will be emitted to a console, no additional backend is required"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h3",{id:"scheduling-from-airflow"},"Scheduling from Airflow"),(0,r.kt)("p",null,"The same parameters passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"spark-submit")," can be supplied from Airflow and other schedulers. If\nusing the ",(0,r.kt)("a",{parentName:"p",href:"/docs/integrations/airflow/"},"marquez-airflow")," integration, each task in the DAG has its own Run id\nwhich can be connected to the Spark job run via the ",(0,r.kt)("inlineCode",{parentName:"p"},"openlineage.parentRunId")," parameter. For example,\nhere is an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"DataProcPySparkOperator")," that submits a Pyspark application on Dataproc:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'t1 = DataProcPySparkOperator(\n    task_id=job_name,\n    gcp_conn_id=\'google_cloud_default\',\n    project_id=\'project_id\',\n    cluster_name=\'cluster-name\',\n    region=\'us-west1\',\n    main=\'gs://bucket/your-prog.py\',\n    job_name=job_name,\n    dataproc_pyspark_properties={\n      "spark.extraListeners": "marquez.spark.agent.SparkListener",\n      "spark.jars.packages": "io.github.marquezproject:marquez-spark:0.15.+",\n      "openlineage.url": f"{marquez_url}/api/v1/namespaces/{marquez_namespace}/jobs/dump_orders_to_gcs/runs/{{{{task_run_id(run_id, task)}}}}?api_key={api_key}"\n    },\n    dag=dag)\n')))}c.isMDXComponent=!0},3189:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/spark-job-creation.dot-d3fd1094587dcacc0c8a1566dac60ed5.png"}}]);