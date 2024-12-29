(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{27:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(3),i=n(1),a=n(0),r=Object(i.createContext)(),l=function(e){var t=e.children,n=Object(i.useState)("light"),c=Object(s.a)(n,2),l=c[0],o=c[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://smruthi-sreenivas.github.io/",j="SS.",h="Smruthi S",u="Computer Vision Engineer",m="I am a Dynamic Computer Vision Engineer with a strong background in developing advanced Deep Learning models and image processing techniques. I specialize in using PyTorch and OpenCV, with a proven track record of achieving high accuracy in competitive settings.",b="https://drive.google.com/file/d/1Pjc-0jiF77eDDWaEAghg2bO5naTqeKz3/view?usp=sharing",d={linkedin:"https://www.linkedin.com/in/smruthisreenivas",github:"https://github.com/smruthi-sreenivas"},O=[{name:"Kenyan Food Classifier",description:"Classify image into any one of the 13 Kenyan food classes.",stack:["Image Classification","Deep Learning","PyTorch","OpenCV"],sourceCode:"https://github.com/smruthi-sreenivas/Kenyan_food_classifier"},{name:"Aerial Drone Segmentation",description:"Aerial Drone Segmentation for Precise Landscape Analysis",stack:["Image Segmentation","Deep Learning","PyTorch","OpenCV"],sourceCode:"https://github.com/smruthi-sreenivas/Kenyan_food_classifier"},{name:"Vehicle Registration Plate Detection",description:"Detects and extracts license plates from images/videos using YOLO object detection",stack:["Object Detection","Deep Learning","PyTorch","OpenCV"],sourceCode:"https://github.com/smruthi-sreenivas/Vehicle_Registration_Plate_Detection"},{name:"Object Detection and Tracking",description:"Detect and track a sports ball in a video",stack:["Object Detection","Object Tracking","OpenCV","Python"],sourceCode:"https://github.com/smruthi-sreenivas/Detection-and-Tracking"},{name:"Sunglass Filter",description:"Virtual sunglass effect to real-time webcam footage using OpenCV and Python.",stack:["Image Processing","Python","OpenCV"],sourceCode:"https://github.com/smruthi-sreenivas/Sunglasses-Filter"},{name:"Document Scanner",description:"Transforms images into scanned documents using OpenCV.",stack:["Image Processing","Python","OpenCV"],sourceCode:"https://github.com/smruthi-sreenivas/Document-Scanner"}],g=["Computer Vision","Deep Learning","Image Classification","Object Detection","Image Segmentation","Object Tracking","Image Processing","OpenCV","PyTorch","Python"],p="smruthi.kukku.s@mail.com",f=n(16),x=n.n(f),k=n(14),v=n.n(k),_=n(18),N=n.n(_),C=n(17),y=n.n(C),D=(n(27),function(){var e=Object(i.useContext)(r),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(i.useState)(!1),o=Object(s.a)(l,2),j=o[0],h=o[1],u=function(){return h(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projects"})}):null,g.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,p?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(v.a,{}):Object(a.jsx)(x.a,{})}),Object(a.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(y.a,{}):Object(a.jsx)(N.a,{})})]})}),S=(n(31),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(D,{})]})}),P=n(11),w=n.n(P),V=n(19),T=n.n(V),I=(n(32),function(){var e=h,t=u,n=m,c=b,s=d;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(a.jsxs)(a.Fragment,{children:[s.github&&Object(a.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(w.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(T.a,{})})]})]})]})}),E=n(7),L=n.n(E),A=(n(34),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},L()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(w.a,{})})]})}),F=(n(35),function(){return O.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(a.jsx)(A,{project:e},L()())}))})]}):null}),K=(n(36),function(){return g.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:g.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},L()())}))})]}):null}),z=n(20),R=n.n(z),q=(n(37),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top","aria-label":"top",children:Object(a.jsx)(R.a,{fontSize:"large"})})}):null}),B=(n(38),function(){return p?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(p),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),J=(n(39),function(){return Object(a.jsx)("footer",{className:"footer",children:"Created By Smruthi S"})}),Y=(n(40),function(){var e=Object(i.useContext)(r),t=Object(s.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(S,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(I,{}),Object(a.jsx)(F,{}),Object(a.jsx)(K,{}),Object(a.jsx)(B,{})]}),Object(a.jsx)(q,{}),Object(a.jsx)(J,{})]})});n(41);Object(c.render)(Object(a.jsx)(l,{children:Object(a.jsx)(Y,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.5e8d8be1.chunk.js.map