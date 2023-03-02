"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Frequently Asked Questions",sidebar_position:7},i=void 0,s={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"This page needs your contribution! Please contribute new questions (or answers) using the edit link at the bottom.",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/OpenLineage/docs/tree/main/docs/faq.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Frequently Asked Questions",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Understanding and Using Facets",permalink:"/docs/guides/facets"},next:{title:"Developing With OpenLineage",permalink:"/docs/development/developing/"}},l={},c=[{value:"Is OpenLineage a metadata server?",id:"is-openlineage-a-metadata-server",level:3},{value:"Is there room for another question on this page?",id:"is-there-room-for-another-question-on-this-page",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This page needs your contribution! Please contribute new questions (or answers) using the edit link at the bottom.")),(0,o.kt)("h3",{id:"is-openlineage-a-metadata-server"},"Is OpenLineage a metadata server?"),(0,o.kt)("p",null,"No. OpenLineage is, at its core, a specification for lineage metadata. But it also contains a collection of integrations, examples, and tools."),(0,o.kt)("p",null,"If you are looking for a metadata server that can receive and analyze OpenLineage events, check out ",(0,o.kt)("a",{parentName:"p",href:"https://marquezproject.ai"},"Marquez"),"."),(0,o.kt)("h3",{id:"is-there-room-for-another-question-on-this-page"},"Is there room for another question on this page?"),(0,o.kt)("p",null,"You bet! There's always room. Submit an issue or pull request using the edit button at the bottom."))}p.isMDXComponent=!0}}]);