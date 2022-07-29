"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="Manually annotated lineage",l={unversionedId:"integrations/airflow/manual",id:"integrations/airflow/manual",title:"Manually annotated lineage",description:"This feature is only supported with Airflow versions greater than 2.1.0)",source:"@site/docs/integrations/airflow/manual.md",sourceDirName:"integrations/airflow",slug:"/integrations/airflow/manual",permalink:"/docs/integrations/airflow/manual",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/integrations/airflow/manual.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Apache Airflow",permalink:"/docs/integrations/airflow/"},next:{title:"Using OpenLineage with older versions of Airflow",permalink:"/docs/integrations/airflow/older"}},s={},p=[{value:"Example",id:"example",level:2},{value:"Conversion from Airflow Table entity to Openlineage Dataset",id:"conversion-from-airflow-table-entity-to-openlineage-dataset",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manually-annotated-lineage"},"Manually annotated lineage"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This feature is only supported with Airflow versions greater than 2.1.0)")),(0,r.kt)("p",null,"Airflow allows operators to track lineage by specifying the input and outputs of the operators via inlets and outlets. OpenLineage tries to find the input and output datasets of the Airflow job via provided extractors or custom extractors. As fallback, if it fails to find any input or output datasets, then OpenLineage defaults to inlets and outlets of Airflow jobs. "),(0,r.kt)("p",null,"OpenLineage supports automated lineage extraction only for selective operators. For other operators and custom-defined ones, users need to write their own custome extractors (by implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"extract")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"extract_on_complete")," method) for Airflow operators that indicate the input and output dataset of the corresponding task.\nThis can be circumvented by specifying the input and output datasets using operator's inlets and outlets. OpenLineage will default to use inlets and outlets as input/output datasets if it cannot find any successful extraction from the extractors. "),(0,r.kt)("p",null,"While specifying the DAG, inlets and outlets can be provided as lists of Tables for every operator. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Airflow supports inlets and outlets to be either a Table, Column, File or User entity. However, currently OpenLineage only extracts lineage via Table entity*")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"An operator insider the Airflow DAG can be annotated with inlets and outlets like - "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"""Example DAG demonstrating the usage of the extraction via Inlets and Outlets."""\n\nimport pendulum\nimport datetime\n\nfrom airflow import DAG\nfrom airflow.operators.bash import BashOperator\nfrom airflow.lineage.entities import Table, File\n\ndef create_table(cluster, database, name):\n    return Table(\n        database=database,\n        cluster=cluster,\n        name=name,\n    )\n\nt1 = create_table("c1", "d1", "t1")\nt2 = create_table("c1", "d1", "t2")\nt3 = create_table("c1", "d1", "t3")\nt4 = create_table("c1", "d1", "t4")\nf1 = File(url = "http://randomfile")\n\nwith DAG(\n    dag_id=\'example_operator\',\n    schedule_interval=\'0 0 * * *\',\n    start_date=pendulum.datetime(2021, 1, 1, tz="UTC"),\n    dagrun_timeout=datetime.timedelta(minutes=60),\n    params={"example_key": "example_value"},\n) as dag:\n    task1 = BashOperator(\n        task_id=\'task_with_inlet_outlet\',\n        bash_command=\'echo "{{ task_instance_key_str }}" && sleep 1\',\n        inlets=[t1, t2],\n        outlets=[t3],\n    )\n\n    task2 = BashOperator(\n        task_id=\'task_with_inlet_outlet\',\n        bash_command=\'echo "{{ task_instance_key_str }}" && sleep 1\',\n        inlets=[t3, f1],\n        outlets=[t4],\n    )\n\n    task1 >> task2\n    \nif __name__ == "__main__":\n    dag.cli()\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The corresponding lineage graph will be - "),(0,r.kt)("img",{width:"1792",alt:"marquez_lineage",src:"https://user-images.githubusercontent.com/32615205/181394536-ad6d516d-a894-4bac-9b57-353c1092492f.png"}),(0,r.kt)("p",null,"(The image is shown with the ",(0,r.kt)("strong",{parentName:"p"},"Marquez")," UI (metadata collector of OpenLineage events). More info can be found ",(0,r.kt)("a",{parentName:"p",href:"https://marquezproject.github.io/marquez/"},"here"),"."),(0,r.kt)("p",null,"Also note that the ",(0,r.kt)("em",{parentName:"p"},"File")," entity is not captured by the lineage event currently. "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"conversion-from-airflow-table-entity-to-openlineage-dataset"},"Conversion from Airflow Table entity to Openlineage Dataset"),(0,r.kt)("p",null,"The naming convention followed here is: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"CLUSTER")," of the table entity becomes the namespace of OpenLineage's Dataset"),(0,r.kt)("li",{parentName:"ol"},"The name of the dataset is formed by ",(0,r.kt)("inlineCode",{parentName:"li"},"{{DATABASE}}.{{NAME}}")," where ",(0,r.kt)("inlineCode",{parentName:"li"},"DATABASE")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"NAME")," are attributes specified by Airflow's Table entity.")))}c.isMDXComponent=!0}}]);