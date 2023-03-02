"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Airflow",sidebar_position:2},i=void 0,s={unversionedId:"development/developing/python/tests/airflow",id:"development/developing/python/tests/airflow",title:"Airflow",description:"OpenLineage provides an integration with Apache Airflow. As Airflow is actively developed and major changes happen quite often it is advised to test OpenLineage integration against multiple Airflow versions. In the current CI process OpenLineage is tested against following versions:",source:"@site/docs/development/developing/python/tests/airflow.md",sourceDirName:"development/developing/python/tests",slug:"/development/developing/python/tests/airflow",permalink:"/docs/development/developing/python/tests/airflow",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/development/developing/python/tests/airflow.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Airflow",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Client",permalink:"/docs/development/developing/python/tests/client"},next:{title:"Common",permalink:"/docs/development/developing/python/tests/common"}},l={},p=[{value:"Unit tests",id:"unit-tests",level:3},{value:"Integration tests",id:"integration-tests",level:3},{value:"How to run",id:"how-to-run",level:4},{value:"What tests are ran",id:"what-tests-are-ran",level:4},{value:"View stored OpenLineage events",id:"view-stored-openlineage-events",level:4},{value:"Example how to add new integration test",id:"example-how-to-add-new-integration-test",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OpenLineage provides an integration with Apache Airflow. As Airflow is actively developed and major changes happen quite often it is advised to test OpenLineage integration against multiple Airflow versions. In the current CI process OpenLineage is tested against following versions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2.1.4 (2.0+ upgrade)"),(0,r.kt)("li",{parentName:"ul"},"2.2.4"),(0,r.kt)("li",{parentName:"ul"},"2.3.4 (TaskListener API introduced)"),(0,r.kt)("li",{parentName:"ul"},"2.4.3"),(0,r.kt)("li",{parentName:"ul"},"2.5.0")),(0,r.kt)("h3",{id:"unit-tests"},"Unit tests"),(0,r.kt)("p",null,"In order to make running unit tests against multiple Airflow versions easier there is possibility to use ",(0,r.kt)("a",{parentName:"p",href:"https://tox.wiki/"},"tox"),".\nTo run unit tests against all configured Airflow versions just run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tox\n")),(0,r.kt)("p",null,"You can also list existing environments with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tox -l\n")),(0,r.kt)("p",null,"that should list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"py3-airflow-2.1.4\npy3-airflow-2.2.4\npy3-airflow-2.3.4\npy3-airflow-2.4.3\npy3-airflow.2.5.0\n")),(0,r.kt)("p",null,"Then you can run tests in chosen environment, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tox -e py3-airflow-2.3.4\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setup.cfg")," contains tox-related configuration. By default ",(0,r.kt)("inlineCode",{parentName:"p"},"tox")," command runs:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"flake8")," linting"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pytest")," command")),(0,r.kt)("p",null,"Additionally, outside of ",(0,r.kt)("inlineCode",{parentName:"p"},"tox")," you should run ",(0,r.kt)("inlineCode",{parentName:"p"},"mypy")," static code analysis. You can do that with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python -m mypy openlineage\n")),(0,r.kt)("h3",{id:"integration-tests"},"Integration tests"),(0,r.kt)("p",null,"Integration tests are located in ",(0,r.kt)("inlineCode",{parentName:"p"},"tests/integration/tests")," directory. They require running Docker containers to provision local test environment: Airflow components (worker, scheduler), databases (PostgreSQL, MySQL) and OpenLineage events consumer."),(0,r.kt)("h4",{id:"how-to-run"},"How to run"),(0,r.kt)("p",null,"Integration tests require usage of ",(0,r.kt)("em",{parentName:"p"},"docker compose"),". There are scripts prepared to make build images and run tests easier."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"AIRFLOW_IMAGE=<name-of-airflow-image> ./tests/integration/docker/up.sh\n")),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"AIRFLOW_IMAGE=apache/airflow:2.3.4-python3.7 ./tests/integration/docker/up.sh\n")),(0,r.kt)("h4",{id:"what-tests-are-ran"},"What tests are ran"),(0,r.kt)("p",null,"The actual setup is to run all defined Airflow DAGs, collect OpenLineage events and check if they meet requirements.\nThe test you should pay most attention to is ",(0,r.kt)("inlineCode",{parentName:"p"},"test_integration"),". It compares produced events to expected JSON structures recursively, with a respect if fields are not missing."),(0,r.kt)("p",null,"Some of the tests are skipped if database connection specific environment variables are not set. The example is set of ",(0,r.kt)("inlineCode",{parentName:"p"},"SNOWFLAKE_PASSWORD")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SNOWFLAKE_ACCOUNT_ID")," variables."),(0,r.kt)("h4",{id:"view-stored-openlineage-events"},"View stored OpenLineage events"),(0,r.kt)("p",null,"OpenLineage events produced from Airflow runs are stored locally in ",(0,r.kt)("inlineCode",{parentName:"p"},"./tests/integration/tests/events")," directory. The files are not overwritten, rather new events are appended to existing files."),(0,r.kt)("h4",{id:"example-how-to-add-new-integration-test"},"Example how to add new integration test"),(0,r.kt)("p",null,"Let's take following ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomOperator")," for which we should add ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomExtractor")," and test it. First we create DAG in integration tests DAGs folder: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/airflow/tests/integration/tests/airflow/dags"},"airflow/tests/integration/tests/airflow/dags"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from airflow.models import BaseOperator\nfrom airflow.utils.dates import days_ago\nfrom airflow import DAG\n\n\ndefault_args = {\n    'depends_on_past': False,\n    'start_date': days_ago(7)\n}\n\n\ndag = DAG(\n    'custom_extractor',\n    schedule_interval='@once',\n    default_args=default_args\n)\n\nclass CustomOperator(BaseOperator):\n    def execute(self, context: Any):\n        for i in range(10):\n            print(i)\n\nt1 = CustomOperator(\n    task_id='custom_extractor',\n    dag=dag\n)\n")),(0,r.kt)("p",null,"In the same folder we create ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_extractor.py"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from typing import Union, Optional, List\n\nfrom openlineage.client.run import Dataset\nfrom openlineage.airflow.extractors import TaskMetadata\nfrom openlineage.airflow.extractors.base import BaseExtractor\n\n\nclass CustomExtractor(BaseExtractor):\n    @classmethod\n    def get_operator_classnames(cls) -> List[str]:\n        return [\'CustomOperator\']\n\n    def extract(self) -> Union[Optional[TaskMetadata], List[TaskMetadata]]:\n        return TaskMetadata(\n            "test",\n            inputs=[\n                Dataset(\n                    namespace="test",\n                    name="dataset",\n                    facets={}\n                )\n            ]\n        )\n')),(0,r.kt)("p",null,"Typically we want to compare produced metadata against expected. In order to do that we create JSON file ",(0,r.kt)("inlineCode",{parentName:"p"},"custom_extractor.json")," in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/tree/main/integration/airflow/tests/integration/requests"},"airflow/tests/integration/requests"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' [{\n        "eventType": "START",\n        "inputs": [{\n            "facets": {},\n            "name": "dataset",\n            "namespace": "test"\n        }],\n        "job": {\n            "facets": {\n                "documentation": {\n                    "description": "Test dag."\n                }\n            },\n            "name": "custom_extractor.custom_extractor",\n            "namespace": "food_delivery"\n        },\n        "run": {\n            "facets": {\n                "airflow_runArgs": {\n                    "externalTrigger": false\n                },\n                "parent": {\n                    "job": {\n                        "name": "custom_extractor",\n                        "namespace": "food_delivery"\n                    }\n                }\n            }\n        }\n    },\n    {\n        "eventType": "COMPLETE",\n        "inputs": [{\n            "facets": {},\n            "name": "dataset",\n            "namespace": "test"\n        }],\n        "job": {\n            "facets": {},\n            "name": "custom_extractor.custom_extractor",\n            "namespace": "food_delivery"\n        }\n    }\n ]\n')),(0,r.kt)("p",null," and add parameter for ",(0,r.kt)("inlineCode",{parentName:"p"},"test_integration")," in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/integration/airflow/tests/integration/test_integration.py"},"airflow/tests/integration/test_integration.py"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'("source_code_dag", "requests/source_code.json"),\n+ ("custom_extractor", "requests/custom_extractor.json"),\n("unknown_operator_dag", "requests/unknown_operator.json"),\n')),(0,r.kt)("p",null,"That should setup a check for existence of both ",(0,r.kt)("inlineCode",{parentName:"p"},"START")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"COMPLETE")," events, custom input facet and correct job facet."),(0,r.kt)("p",null,"Full example can be found in source code available in integration tests ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenLineage/OpenLineage/blob/main/integration/airflow/tests/integration/"},"directory"),"."))}c.isMDXComponent=!0}}]);