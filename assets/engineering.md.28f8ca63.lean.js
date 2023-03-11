/**
 * name: learning-vue3
 * version: v2.0.0
 * description: A starting learning tutorial on Vue 3.0 + TypeScript, suitable for complete Vue novices and Vue 2.0 veterans, incorporating some of my own practical experience on the basis of official documents.
 * author: chengpeiquan <chengpeiquan@chengpeiquan.com>
 * homepage: https://vue3.chengpeiquan.com
 */
import{r as t,o as y,c as i,b as s,w as n,d as e,e as o,t as D,a as p}from"./app.e63a6c91.js";const F=p("",73),d=p("",7),C=p("",51),A=e("p",null,[o("右键查看该网页的源代码，可以看到网页内容对应的 HTML 结构也是包含在 "),e("code",null,".html"),o(" 文件里。")],-1),h=p("",33),u=p("",71),g=p("",9),E=p("",58),b=e("p",null,"Vite 是基于浏览器原生的 ES Module ，所以不需要预先打包，而是直接启动开发服务器，请求到对应的模块的时候再进行编译，下面是 Vite 使用的 ESM 机制的工作流程。",-1),f=p("",15),m=p("",3),T=JSON.parse('{"title":"了解前端工程化","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"传统开发的弊端","slug":"传统开发的弊端","link":"#传统开发的弊端","children":[{"level":3,"title":"一个常见的案例","slug":"一个常见的案例","link":"#一个常见的案例","children":[]},{"level":3,"title":"更多问题","slug":"更多问题","link":"#更多问题","children":[]}]},{"level":2,"title":"工程化带来的优势","slug":"工程化带来的优势","link":"#工程化带来的优势","children":[{"level":3,"title":"开发层面的优势","slug":"开发层面的优势","link":"#开发层面的优势","children":[]},{"level":3,"title":"团队协作的优势","slug":"团队协作的优势","link":"#团队协作的优势","children":[]},{"level":3,"title":"求职竞争上的优势","slug":"求职竞争上的优势","link":"#求职竞争上的优势","children":[]}]},{"level":2,"title":"Vue.js 与工程化","slug":"vue-js-与工程化","link":"#vue-js-与工程化","children":[{"level":3,"title":"了解 Vue.js 与全新的 3.0 版本","slug":"了解-vue-js-与全新的-3-0-版本","link":"#了解-vue-js-与全新的-3-0-版本","children":[]},{"level":3,"title":"Vue 与工程化之间的关联","slug":"vue-与工程化之间的关联","link":"#vue-与工程化之间的关联","children":[]},{"level":3,"title":"选择 Vue 入门工程化的理由","slug":"选择-vue-入门工程化的理由","link":"#选择-vue-入门工程化的理由","children":[]}]},{"level":2,"title":"现代化的开发概念","slug":"现代化的开发概念","link":"#现代化的开发概念","children":[{"level":3,"title":"MPA 与 SPA","slug":"mpa-与-spa","link":"#mpa-与-spa","children":[]},{"level":3,"title":"CSR 与 SSR","slug":"csr-与-ssr","link":"#csr-与-ssr","children":[]},{"level":3,"title":"Pre-Rendering 与 SSG","slug":"pre-rendering-与-ssg","link":"#pre-rendering-与-ssg","children":[]},{"level":3,"title":"ISR 与 DPR","slug":"isr-与-dpr","link":"#isr-与-dpr","children":[]}]},{"level":2,"title":"工程化不止于前端","slug":"工程化不止于前端","link":"#工程化不止于前端","children":[{"level":3,"title":"服务端开发","slug":"服务端开发","link":"#服务端开发","children":[]},{"level":3,"title":"App 开发","slug":"app-开发","link":"#app-开发","children":[]},{"level":3,"title":"桌面程序开发","slug":"桌面程序开发","link":"#桌面程序开发","children":[]},{"level":3,"title":"应用脚本开发","slug":"应用脚本开发","link":"#应用脚本开发","children":[]}]},{"level":2,"title":"实践工程化的流程","slug":"实践工程化的流程","link":"#实践工程化的流程","children":[]},{"level":2,"title":"工程化神器 Node.js","slug":"工程化神器-node-js","link":"#工程化神器-node-js","children":[{"level":3,"title":"什么是 Node.js","slug":"什么是-node-js","link":"#什么是-node-js","children":[]},{"level":3,"title":"什么是 Runtime","slug":"什么是-runtime","link":"#什么是-runtime","children":[]},{"level":3,"title":"Node 和浏览器的区别","slug":"node-和浏览器的区别","link":"#node-和浏览器的区别","children":[]}]},{"level":2,"title":"工程化的构建工具","slug":"工程化的构建工具","link":"#工程化的构建工具","children":[{"level":3,"title":"为什么要使用构建工具","slug":"为什么要使用构建工具","link":"#为什么要使用构建工具","children":[]},{"level":3,"title":"Webpack","slug":"webpack","link":"#webpack","children":[]},{"level":3,"title":"Vite","slug":"vite","link":"#vite","children":[]},{"level":3,"title":"两者的区别","slug":"两者的区别","link":"#两者的区别","children":[]},{"level":3,"title":"开发环境和生产环境","slug":"开发环境和生产环境","link":"#开发环境和生产环境","children":[]}]}],"relativePath":"engineering.md"}'),S={name:"engineering.md"},P=Object.assign(S,{setup(v){const c="process.env.NODE_ENV";return(k,_)=>{const l=t("ImgWrap"),a=t("ClientOnly"),r=t("GitalkComment");return y(),i("div",null,[F,s(a,null,{default:n(()=>[s(l,{src:"/assets/img/job-details.png",dark:"/assets/img/job-details-dark.png",alt:"知名企业对 1-3 年经验的前端工程师招聘要求"})]),_:1}),d,s(a,null,{default:n(()=>[s(l,{src:"/logo.png",alt:"Vue.js Logo",maxWidth:240})]),_:1}),C,s(a,null,{default:n(()=>[s(l,{src:"/assets/img/seo-page.jpg",dark:"/assets/img/seo-page-dark.jpg",alt:"网页呈现的内容"})]),_:1}),A,s(a,null,{default:n(()=>[s(l,{src:"/assets/img/seo-page-code.jpg",dark:"/assets/img/seo-page-code-dark.jpg",alt:"网页内容对应的 HTML 源码"})]),_:1}),h,s(a,null,{default:n(()=>[s(l,{src:"/assets/img/seo-spa-page-code.jpg",dark:"/assets/img/seo-spa-page-code-dark.jpg",alt:"单页面应用的网页内容只有一个空的 HTML 结构"})]),_:1}),u,s(a,null,{default:n(()=>[s(l,{src:"/assets/img/screenshot-vscode.jpg",dark:"/assets/img/screenshot-vscode-dark.jpg",alt:"Visual Studio Code 界面截图"})]),_:1}),s(a,null,{default:n(()=>[s(l,{src:"/assets/img/screenshot-postman.jpg",dark:"/assets/img/screenshot-postman-dark.jpg",alt:"Postman 界面截图"})]),_:1}),g,s(a,null,{default:n(()=>[s(l,{src:"/assets/img/screenshot-pkg.jpg",dark:"/assets/img/screenshot-pkg-dark.jpg",alt:"使用 Pkg 构建后的程序运行截图"})]),_:1}),E,s(a,null,{default:n(()=>[s(l,{src:"/assets/img/bundler.png",alt:"Webpack 的工作原理（摘自 Vite 官网）"})]),_:1}),b,s(a,null,{default:n(()=>[s(l,{src:"/assets/img/esm.png",alt:"Vite 的工作原理（摘自 Vite 官网）"})]),_:1}),f,e("p",null,[o("在 Webpack ，可以使用 "),e("code",null,D(c)),o(" 来区分开发环境（ development ）还是生产环境（ production ），它会返回当前所处环境的名称。")]),m,s(a,null,{default:n(()=>[s(r,{issueId:194})]),_:1})])}}});export{T as __pageData,P as default};
