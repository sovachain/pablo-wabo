(this["webpackJsonppablo-wabo"]=this["webpackJsonppablo-wabo"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},,,,,,,,,function(e,t,a){e.exports=a(44)},,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},function(e,t,a){e.exports=a.p+"static/media/avalanche.dde9be13.svg"},function(e,t,a){e.exports=a.p+"static/media/video-placeholder.5c3c6a18.jpg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.d9cb99ce.png"},function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.3c569239.png"},function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.87e4d053.png"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),n=a(21),r=a.n(n),s=a(8),c=a(7),o=a(5),m=a(2),d=["component","layout"],u=function(e){var t=e.component,a=e.layout,i=Object(m.a)(e,d);return a=void 0===a?function(e){return l.a.createElement(l.a.Fragment,null,e.children)}:a,l.a.createElement(o.a,Object.assign({},i,{render:function(e){return l.a.createElement(a,null,l.a.createElement(t,e))}}))},v=a(11),h=a(3),p=a.n(h),b=a(17),f=l.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),n=Object(v.a)(a,2),r=n[0],s=n[1],c=Object(i.useState)([]),o=Object(v.a)(c,2),m=o[0],d=o[1],u=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},h=function(){if(!u())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=r-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){d(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(u()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),h())}),[m]);var p=function(){u()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(b.throttle)((function(){p(),h()}),30),E=Object(b.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){p(),h()}),[r]),l.a.createElement(l.a.Fragment,null,e.children())}));f.propTypes={children:p.a.func.isRequired};var E=f,g=a(13),N=a(1),w=a.n(N),O=["className","src","width","height","alt"],x=function(e){var t=e.className,a=e.src,n=e.width,r=e.height,s=e.alt,c=Object(m.a)(e,O),o=Object(i.useState)(!1),d=Object(v.a)(o,2),u=d[0],h=d[1],p=Object(i.useRef)(null);Object(i.useEffect)((function(){b(p.current)}),[]);var b=function(e){var t,a,i=document.createElement("img");u||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return l.a.createElement("img",Object.assign({},c,{ref:p,className:t,src:a,width:n,height:r,alt:s,onLoad:function(){h(!0)}}))};x.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var D=x,j=["className"],y=function(e){var t=e.className,i=Object(m.a)(e,j),n=w()("brand",t);return l.a.createElement("div",Object.assign({},i,{className:n}),l.a.createElement("h1",{className:"m-0"},l.a.createElement(s.b,{to:"/"},l.a.createElement(D,{src:a(34),alt:"Open",width:32,height:32}))))},k=["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"],C=function(e){var t=e.className,a=e.navPosition,n=e.hideNav,r=e.hideSignin,c=e.bottomOuterDivider,o=e.bottomDivider,d=Object(m.a)(e,k),u=Object(i.useState)(!1),h=Object(v.a)(u,2),p=h[0],b=h[1],f=Object(i.useRef)(null),E=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&g(),document.addEventListener("keydown",O),document.addEventListener("click",x),function(){document.removeEventListener("keydown",O),document.removeEventListener("click",x),N()}}));var g=function(){document.body.classList.add("off-nav-is-active"),f.current.style.maxHeight=f.current.scrollHeight+"px",b(!0)},N=function(){document.body.classList.remove("off-nav-is-active"),f.current&&(f.current.style.maxHeight=null),b(!1)},O=function(e){p&&27===e.keyCode&&N()},x=function(e){f.current&&p&&!f.current.contains(e.target)&&e.target!==E.current&&N()},D=w()("site-header",c&&"has-bottom-divider",t);return l.a.createElement("header",Object.assign({},d,{className:D}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:w()("site-header-inner",o&&"has-bottom-divider")},l.a.createElement(y,null),!n&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{ref:E,className:"header-nav-toggle",onClick:p?N:g},l.a.createElement("span",{className:"screen-reader"},"Menu"),l.a.createElement("span",{className:"hamburger"},l.a.createElement("span",{className:"hamburger-inner"}))),l.a.createElement("nav",{ref:f,className:w()("header-nav",p&&"is-active")},l.a.createElement("div",{className:"header-nav-inner"},l.a.createElement("ul",{className:w()("list-reset text-xs",a&&"header-nav-".concat(a))},l.a.createElement("li",null,l.a.createElement(s.b,{to:"#0",onClick:N},"White Paper"))),!r&&l.a.createElement("ul",{className:"list-reset header-nav-right"},l.a.createElement("li",null,l.a.createElement(s.b,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:N},"Stake")))))))))};C.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var A=C,L=["className"],P=function(e){var t=e.className,i=Object(m.a)(e,L),n=w()("brand",t);return l.a.createElement("div",Object.assign({},i,{className:n}),l.a.createElement("h1",{className:"m-0"},l.a.createElement(s.b,{to:"https://www.avax.network/"},l.a.createElement(D,{src:a(35),alt:"Open",width:250,height:85}))))},S=["className"],H=function(e){var t=e.className,a=Object(m.a)(e,S),i=w()("footer-nav",t);return l.a.createElement("nav",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement(s.b,{to:"#0"},"Contact")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"#0"},"Support"))))},B=["className"],F=function(e){var t=e.className,a=Object(m.a)(e,B),i=w()("footer-social",t);return l.a.createElement("div",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://facebook.com/"},l.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Facebook"),l.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/"},l.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Twitter"),l.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://google.com/"},l.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("title",null,"Instagram"),l.a.createElement("g",null,l.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),l.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),l.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},T=["className","topOuterDivider","topDivider"],z=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,n=Object(m.a)(e,T),r=w()("site-footer center-content-mobile",a&&"has-top-divider",t);return l.a.createElement("footer",Object.assign({},n,{className:r}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:w()("site-footer-inner",i&&"has-top-divider")},l.a.createElement("div",{className:"footer-top space-between text-xxs"},l.a.createElement(P,null),l.a.createElement(F,null)),l.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},l.a.createElement(H,null),l.a.createElement("div",{className:"footer-copyright"},"Created by ",l.a.createElement("a",{href:"https://github.com/sovachain"},"SovaChain Labs"),".")))))};z.defaultProps={topOuterDivider:!1,topDivider:!1};var M=z,R=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(A,{navPosition:"right",className:"reveal-from-bottom"}),l.a.createElement("main",{className:"site-content"},t),l.a.createElement(M,null))},q=a(4),I={types:{topOuterDivider:p.a.bool,bottomOuterDivider:p.a.bool,topDivider:p.a.bool,bottomDivider:p.a.bool,hasBgColor:p.a.bool,invertColor:p.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},W={types:Object(q.a)({},I.types),defaults:Object(q.a)({},I.defaults)},V={types:Object(q.a)(Object(q.a)({},I.types),{},{invertMobile:p.a.bool,invertDesktop:p.a.bool,alignTop:p.a.bool,imageFill:p.a.bool}),defaults:Object(q.a)(Object(q.a)({},I.defaults),{},{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},_={types:Object(q.a)(Object(q.a)({},I.types),{},{pushLeft:p.a.bool}),defaults:Object(q.a)(Object(q.a)({},I.defaults),{},{pushLeft:!1})},G=["className"],U=function(e){var t=e.className,a=Object(m.a)(e,G),i=w()("button-group",t);return l.a.createElement("div",Object.assign({},a,{className:i}))},K=["className","tag","color","size","loading","wide","wideMobile","disabled"],J=function(e){var t=e.className,a=e.tag,i=e.color,n=e.size,r=e.loading,s=e.wide,c=e.wideMobile,o=e.disabled,d=Object(m.a)(e,K),u=w()("button",i&&"button-".concat(i),n&&"button-".concat(n),r&&"is-loading",s&&"button-block",c&&"button-wide-mobile",t),v=a;return l.a.createElement(v,Object.assign({},d,{className:u,disabled:o}))};J.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var Q=J,Z=["className","children","handleClose","show","closeHidden","video","videoTag"],$=function(e){var t=e.className,a=e.children,n=e.handleClose,r=e.show,s=e.closeHidden,c=e.video,o=e.videoTag,d=Object(m.a)(e,Z);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",h),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",h)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&n(e)},h=function(e){e.stopPropagation()},p=w()("modal",r&&"is-active",c&&"modal-video",t);return l.a.createElement(l.a.Fragment,null,r&&l.a.createElement("div",Object.assign({},d,{className:p,onClick:n}),l.a.createElement("div",{className:"modal-inner",onClick:h},c?l.a.createElement("div",{className:"responsive-video"},"iframe"===o?l.a.createElement("iframe",{title:"video",src:c,frameBorder:"0",allowFullScreen:!0}):l.a.createElement("video",{"v-else":!0,controls:!0,src:c})):l.a.createElement(l.a.Fragment,null,!s&&l.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:n}),l.a.createElement("div",{className:"modal-content"},a)))))};$.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var X=$,Y=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"],ee=Object(q.a)({},W.defaults),te=function(e){var t=e.className,n=e.topOuterDivider,r=e.bottomOuterDivider,s=e.topDivider,c=e.bottomDivider,o=e.hasBgColor,d=e.invertColor,u=Object(m.a)(e,Y),h=Object(i.useState)(!1),p=Object(v.a)(h,2),b=p[0],f=p[1],E=w()("hero section center-content",n&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",d&&"invert-color",t),g=w()("hero-inner section-inner",s&&"has-top-divider",c&&"has-bottom-divider");return l.a.createElement("section",Object.assign({},u,{className:E}),l.a.createElement("div",{className:"container-sm"},l.a.createElement("div",{className:g},l.a.createElement("div",{className:"hero-content"},l.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"PABLO ",l.a.createElement("span",{className:"text-color-primary"},"WABO")),l.a.createElement("div",{className:"container-xs"},l.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"One of the most abundant Meme tokens ever to be created. Starting with an Initial supply of 1 Quadrillion, a total of 1 Quintillion tokens will be minted and distributed as the final total supply."),l.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},l.a.createElement(U,null,l.a.createElement(Q,{tag:"a",color:"primary",wideMobile:!0,href:"https://cruip.com/"},"Get WABO"),l.a.createElement(Q,{tag:"a",color:"dark",wideMobile:!0,href:"https://github.com/sovachain/pablo-wabo-contracts"},"View on Github"))))),l.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},l.a.createElement("a",{"data-video":"https://www.tiktok.com/t/ZTRUNK8qp/?k=1",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),f(!0)}},l.a.createElement(D,{className:"has-shadow",src:a(36),alt:"Hero",width:896,height:504}))),l.a.createElement(X,{id:"video-modal",show:b,handleClose:function(e){e.preventDefault(),f(!1)},video:"https://www.tiktok.com/t/ZTRUNK8qp/?k=1",videoTag:"iframe"}))))};te.defaultProps=ee;var ae=te,ie=["className","data","children","tag"],le=function(e){var t=e.className,a=e.data,i=e.children,n=e.tag,r=Object(m.a)(e,ie),s=w()("section-header",t),c=n;return l.a.createElement(l.a.Fragment,null,(a.title||a.paragraph)&&l.a.createElement("div",Object.assign({},r,{className:s}),l.a.createElement("div",{className:"container-xs"},i,a.title&&l.a.createElement(c,{className:w()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&l.a.createElement("p",{className:"m-0"},a.paragraph))))};le.defaultProps={children:null,tag:"h2"};var ne=le,re=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],se=Object(q.a)({},_.defaults),ce=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,r=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,o=e.invertColor,d=e.pushLeft,u=Object(m.a)(e,re),v=w()("features-tiles section",i&&"has-top-divider",n&&"has-bottom-divider",c&&"has-bg-color",o&&"invert-color",t),h=w()("features-tiles-inner section-inner pt-0",r&&"has-top-divider",s&&"has-bottom-divider"),p=w()("tiles-wrap center-content",d&&"push-left");return l.a.createElement("section",Object.assign({},u,{className:v}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:h},l.a.createElement(ne,{data:{title:"An amazing journey",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),l.a.createElement("div",{className:p},l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(D,{src:a(37),alt:"Features tile icon 01",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Token Created"),l.a.createElement("p",{className:"m-0 text-sm"},"On July 25, 2022 the Pablo Wabo contracts were ",l.a.createElement("a",{href:"https://snowtrace.io/tx/0x1ea379b9a24aa81aa94a2c6c4d4266c8f8a50e2f8da2b6244ead2f04b3a84189"},"deployed")," to Avalanche C Chain.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(D,{src:a(38),alt:"Features tile icon 02",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Auditing and Verification"),l.a.createElement("p",{className:"m-0 text-sm"},"Submitted for verification at ",l.a.createElement("a",{href:"https://snowtrace.io/address/0xdbb18c0a2b8a41e40587923bd1abed37c11c22fc#code"},"snowtrace")," on 2022-07-27. Successfully ",l.a.createElement("a",{href:"https://snowtrace.io/address/0xdbb18c0a2b8a41e40587923bd1abed37c11c22fc#code"},"verified"),".")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(D,{src:a(39),alt:"Features tile icon 03",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Distribution Strategy"),l.a.createElement("p",{className:"m-0 text-sm"},"Q3 2022. - Distribution plan and whitepaper are currently under development.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(D,{src:a(15),alt:"Features tile icon 04",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Trading begins"),l.a.createElement("p",{className:"m-0 text-sm"},"TBA - Allocation determined by distribution plan used to create liquidity pools on major Avalanche exchanges.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(D,{src:a(15),alt:"Features tile icon 05",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Staking for Governance"),l.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.")))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(D,{src:a(15),alt:"Complete Decentralization",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"Complete Decentralization"),l.a.createElement("p",{className:"m-0 text-sm"},"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."))))))))};ce.defaultProps=se;var oe=ce,me=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"],de=Object(q.a)({},V.defaults),ue=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,r=e.topDivider,s=e.bottomDivider,c=e.hasBgColor,o=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,h=e.imageFill,p=Object(m.a)(e,me),b=w()("features-split section",i&&"has-top-divider",n&&"has-bottom-divider",c&&"has-bg-color",o&&"invert-color",t),f=w()("features-split-inner section-inner",r&&"has-top-divider",s&&"has-bottom-divider"),E=w()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return l.a.createElement("section",Object.assign({},p,{className:b}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:f},l.a.createElement(ne,{data:{title:"All about the fun",paragraph:"Light hearted and forever fun! Unlike Shibu Inu and Doge, Pablo Wabo does not have dreams of reaching $1, This token intends to remain abundant and plentiful."},className:"center-content"}),l.a.createElement("div",{className:E},l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Native to Avalanche"),l.a.createElement("h3",{className:"mt-0 mb-12"},"A Meme token on the right network"),l.a.createElement("p",{className:"m-0"},"Pablo Wabo, while inspired by Doge and Shibi Inu has a mandate to only be native to the Avalanche network. Blazing fast and low cost transactions combined with an eco friendly proof of stake mechanism makes Avalanche the obvious choice for a Meme coin to remain light hearted and fun. Paying expensive gas fees to trade inexpensive Meme tokens is no fun at all.")),l.a.createElement("div",{className:w()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(D,{src:a(40),alt:"Features split 01",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Voting and Governance built  in"),l.a.createElement("h3",{className:"mt-0 mb-12"},"A Community DAO"),l.a.createElement("p",{className:"m-0"},"An ERC20 token built with advanced features such as voting via the ERC20Votes OpenZeppelin contract. In the future, token holders will be able to stake their tokens in exchange for the ability to vote and create proposals on the DAO. In the beginning a centralized approach will be taken to prove out and battle test the governance system. Ultimately, the desire is that this DAO will become completely decentralized.")),l.a.createElement("div",{className:w()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(D,{src:a(41),alt:"Features split 02",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"A desire to Help animals"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Rescue Mission"),l.a.createElement("p",{className:"m-0"},"Pablo himself, as well as the creators of this project have a mandate to help animals. One of the requirements that is being built into the future staking plan will involve an allocation of tokens to be distributed to non profits. The selection of which non profits to donate to and the amount will be decided via governance that takes place within the DAO.")),l.a.createElement("div",{className:w()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(D,{src:a(42),alt:"Features split 03",width:528,height:396})))))))};ue.defaultProps=de;var ve=ue,he=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"],pe=Object(q.a)({},_.defaults),be=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,r=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,o=e.pushLeft,d=Object(m.a)(e,he),u=w()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),v=w()("testimonial-inner section-inner",n&&"has-top-divider",r&&"has-bottom-divider"),h=w()("tiles-wrap",o&&"push-left");return l.a.createElement("section",Object.assign({},d,{className:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement(ne,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),l.a.createElement("div",{className:h},l.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName")))))))))};be.defaultProps=pe;var fe=be,Ee=["className","children","labelHidden","id"],ge=function(e){var t=e.className,a=e.children,i=e.labelHidden,n=e.id,r=Object(m.a)(e,Ee),s=w()("form-label",i&&"screen-reader",t);return l.a.createElement("label",Object.assign({},r,{className:s,htmlFor:n}),a)};ge.defaultProps={children:null,labelHidden:!1,id:null};var Ne=ge,we=["children","className","status"],Oe=function(e){var t=e.children,a=e.className,i=e.status,n=Object(m.a)(e,we),r=w()("form-hint",i&&"text-color-".concat(i),a);return l.a.createElement("div",Object.assign({},n,{className:r}),t)};Oe.defaultProps={children:null,status:!1};var xe=Oe,De=["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"],je=function(e){var t=e.className,a=e.children,i=e.label,n=e.labelHidden,r=e.type,s=e.name,c=e.status,o=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,h=e.size,p=e.placeholder,b=e.rows,f=e.hint,E=Object(m.a)(e,De),g=w()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),N=w()("form-input",h&&"form-input-".concat(h),c&&"form-".concat(c),t),O="textarea"===r?"textarea":"input";return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement(Ne,{labelHidden:n,id:E.id},i),l.a.createElement("div",{className:g},l.a.createElement(O,Object.assign({},E,{type:"textarea"!==r?r:null,className:N,name:s,disabled:o,value:d,placeholder:p,rows:"textarea"===r?b:null})),a),f&&l.a.createElement(xe,{status:c},f))};je.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ye=je,ke=["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"],Ce=Object(q.a)(Object(q.a)({},W.defaults),{},{split:!1}),Ae=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,r=e.bottomDivider,s=e.hasBgColor,c=e.invertColor,o=e.split,d=Object(m.a)(e,ke),u=w()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",c&&"invert-color",t),v=w()("cta-inner section-inner",n&&"has-top-divider",r&&"has-bottom-divider",o&&"cta-split");return l.a.createElement("section",Object.assign({},d,{className:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement("div",{className:"cta-slogan"},l.a.createElement("h3",{className:"m-0"},"Participate in the Air Drop")),l.a.createElement("div",{className:"cta-action"},l.a.createElement(ye,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Web3 Address"},l.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};Ae.defaultProps=Ce;var Le=Ae,Pe=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(ae,{className:"illustration-section-01"}),l.a.createElement(oe,null),l.a.createElement(ve,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),l.a.createElement(fe,{topDivider:!0}),l.a.createElement(Le,{split:!0}))};g.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/pablo-wabo",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var Se=function(){var e=Object(i.useRef)(),t=Object(o.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){g.a.set({page:e}),g.a.pageview(e)}(a)}),[t]),l.a.createElement(E,{ref:e,children:function(){return l.a.createElement(o.c,null,l.a.createElement(u,{exact:!0,path:"/",component:Pe,layout:R}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(43);var He=Object(c.a)();r.a.render(l.a.createElement(s.a,{history:He},l.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[24,1,2]]]);
//# sourceMappingURL=main.9372bc9a.chunk.js.map