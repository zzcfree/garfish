"use strict";(self.webpackChunkgarfish_docs=self.webpackChunkgarfish_docs||[]).push([[269],{4635:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7711);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},540:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=n(8538),r=n(7765),i=(n(7711),n(4635)),o=["components"],p={title:"Sub-application error report",slug:"/issues",order:1},c=void 0,l={unversionedId:"issues/childApp",id:"issues/childApp",isDocsHomePage:!1,title:"Sub-application error report",description:"Recommended Configuration",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/issues/childApp.md",sourceDirName:"issues",slug:"/issues",permalink:"/en/issues",editUrl:"https://github.com/bytedance/garfish/tree/master/website/docs/issues/childApp.md",tags:[],version:"current",lastUpdatedBy:"zhouxiao.shaw",lastUpdatedAt:1638436870,formattedLastUpdatedAt:"12/2/2021",frontMatter:{title:"Sub-application error report",slug:"/issues",order:1}},s=[{value:"Recommended Configuration",id:"recommended-configuration",children:[]},{value:"webpack 5",id:"webpack-5",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"recommended-configuration"},"Recommended Configuration"),(0,i.kt)("p",null,"If you have a problem with accessing a sub-application and cannot get the sub-application export. You can first check yourself by following these steps."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Check if the sub-application has ",(0,i.kt)("inlineCode",{parentName:"li"},"provider")," correctly ",(0,i.kt)("inlineCode",{parentName:"li"},"exported"),"."),(0,i.kt)("li",{parentName:"ol"},"Check if the child application is configured with the ",(0,i.kt)("inlineCode",{parentName:"li"},"output")," configuration of ",(0,i.kt)("inlineCode",{parentName:"li"},"webpack"),". 3."),(0,i.kt)("li",{parentName:"ol"},"If it is a ",(0,i.kt)("inlineCode",{parentName:"li"},"js")," entry, you need to make sure that the resources of the child application are packaged as a ",(0,i.kt)("inlineCode",{parentName:"li"},"bundle"),", if some of the dependencies are not packaged as a ",(0,i.kt)("inlineCode",{parentName:"li"},"bundle"),", it will not load properly")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// webpack.config.js\n{\n  output: {\n    libraryTarget: 'umd',\n  },\n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Since ",(0,i.kt)("inlineCode",{parentName:"li"},"webpackjsonp")," may conflict, it is possible to configure different ",(0,i.kt)("inlineCode",{parentName:"li"},"webpackjsonp")," functions for the child application and the main application.",(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/blog/2020-10-10-webpack-5-release/#automatic-unique-naming"},"webpack5 doesn't need this configuration")))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// main application webpack.config.js\n{\n  output: {\n    jsonpFunction: 'masterWebpackJsonp',\n  },\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Sub-application A webpack.config.js\n{\n  output: {\n    globalObject: 'window',\n    jsonpFunction: 'appAWebpackJsonp',\n  },\n}\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Sub-application B webpack.config.js\n{\n  output: {\n    globalObject: 'window',\n    jsonpFunction: 'appBAWebpackJsonp',\n  },\n}\n")),(0,i.kt)("p",null,"This is a problem that we will subsequently work to circumvent at the framework level to make it non-perceptible to the user."),(0,i.kt)("h2",{id:"webpack-5"},"webpack 5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure ",(0,i.kt)("inlineCode",{parentName:"li"},"injectClient"),", otherwise webpack 5 defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"exports")," of this ",(0,i.kt)("inlineCode",{parentName:"li"},"client"),"."),(0,i.kt)("li",{parentName:"ul"},"webpack-dev-server needs to be upgraded to ",(0,i.kt)("inlineCode",{parentName:"li"},"4.0.0-beta.1")," or higher")),(0,i.kt)("p",null,"! ","[image.png]","(",(0,i.kt)("a",{parentName:"p",href:"https://p-vcloud.byteimg.com/tos-cn-i-em5hxbkur4/170af76e7e7f41199b610d0ff252585a~tplv-em5hxbkur4-noop.image?width="},"https://p-vcloud.byteimg.com/tos-cn-i-em5hxbkur4/170af76e7e7f41199b610d0ff252585a~tplv-em5hxbkur4-noop.image?width=")," 1316&height=574)"),(0,i.kt)("p",null,"! ","[image.png]","(",(0,i.kt)("a",{parentName:"p",href:"https://p-vcloud.byteimg.com/tos-cn-i-em5hxbkur4/08ccaa4185114155bc423ac64795c3c7~tplv-em5hxbkur4-noop.image?width="},"https://p-vcloud.byteimg.com/tos-cn-i-em5hxbkur4/08ccaa4185114155bc423ac64795c3c7~tplv-em5hxbkur4-noop.image?width=")," 2186&height=882)"))}d.isMDXComponent=!0}}]);