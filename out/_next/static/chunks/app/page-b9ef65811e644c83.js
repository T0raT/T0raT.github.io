(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7543:function(e,t,n){Promise.resolve().then(n.bind(n,3118))},3118:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var l=n(7437),r=n(290),a=n.n(r),s=n(2265);n(1052),n(7205);var i=n(4839),c=n(6164);function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,c.m6)((0,i.W)(t))}let u=e=>{let{starDensity:t=15e-5,allStarsTwinkle:n=!0,twinkleProbability:r=.7,minTwinkleSpeed:a=.5,maxTwinkleSpeed:i=1,className:c}=e,[u,f]=(0,s.useState)([]),x=(0,s.useRef)(null),d=(0,s.useCallback)((e,l)=>Array.from({length:Math.floor(e*l*t)},()=>({x:Math.random()*e,y:Math.random()*l,radius:.05*Math.random()+.5,opacity:.5*Math.random()+.5,twinkleSpeed:n||Math.random()<r?a+Math.random()*(i-a):null})),[t,n,r,a,i]);return(0,s.useEffect)(()=>{let e=()=>{if(x.current){let e=x.current;if(!e.getContext("2d"))return;let{width:t,height:n}=e.getBoundingClientRect();e.width=t,e.height=n,f(d(t,n))}};e();let t=new ResizeObserver(e);return x.current&&t.observe(x.current),()=>{x.current&&t.unobserve(x.current)}},[t,n,r,a,i,d]),(0,s.useEffect)(()=>{let e;let t=x.current;if(!t)return;let n=t.getContext("2d");if(!n)return;let l=()=>{n.clearRect(0,0,t.width,t.height),u.forEach(e=>{n.beginPath(),n.arc(e.x,e.y,e.radius,0,2*Math.PI),n.fillStyle="rgba(255, 255, 255, ".concat(e.opacity,")"),n.fill(),null!==e.twinkleSpeed&&(e.opacity=.5+Math.abs(.5*Math.sin(.001*Date.now()/e.twinkleSpeed)))}),e=requestAnimationFrame(l)};return l(),()=>{cancelAnimationFrame(e)}},[u]),(0,l.jsx)("canvas",{ref:x,className:o("h-full w-full absolute inset-0",c)})},f=()=>{let e=Math.random()*window.innerWidth;switch(Math.floor(4*Math.random())){case 0:return{x:e,y:0,angle:45};case 1:return{x:window.innerWidth,y:e,angle:135};case 2:return{x:e,y:window.innerHeight,angle:225};case 3:return{x:0,y:e,angle:315};default:return{x:0,y:0,angle:45}}},x=e=>{let{minSpeed:t=10,maxSpeed:n=30,minDelay:r=1200,maxDelay:a=4200,starColor:i="#9E00FF",trailColor:c="#2EB9DF",starWidth:u=10,starHeight:x=1,className:d}=e,[h,m]=(0,s.useState)(null),g=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=()=>{let{x:l,y:s,angle:i}=f();m({id:Date.now(),x:l,y:s,angle:i,scale:1,speed:Math.random()*(n-t)+t,distance:0}),setTimeout(e,Math.random()*(a-r)+r)};return e(),()=>{}},[t,n,r,a]),(0,s.useEffect)(()=>{let e=requestAnimationFrame(()=>{h&&m(e=>{if(!e)return null;let t=e.x+e.speed*Math.cos(e.angle*Math.PI/180),n=e.y+e.speed*Math.sin(e.angle*Math.PI/180),l=e.distance+e.speed;return t<-20||t>window.innerWidth+20||n<-20||n>window.innerHeight+20?null:{...e,x:t,y:n,distance:l,scale:1+l/100}})});return()=>cancelAnimationFrame(e)},[h]),(0,l.jsxs)("svg",{ref:g,className:o("w-full h-full absolute inset-0",d),children:[h&&(0,l.jsx)("rect",{x:h.x,y:h.y,width:u*h.scale,height:x,fill:"url(#gradient)",transform:"rotate(".concat(h.angle,", ").concat(h.x+u*h.scale/2,", ").concat(h.y+x/2,")")},h.id),(0,l.jsx)("defs",{children:(0,l.jsxs)("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,l.jsx)("stop",{offset:"0%",style:{stopColor:c,stopOpacity:0}}),(0,l.jsx)("stop",{offset:"100%",style:{stopColor:i,stopOpacity:1}})]})})]})};function d(e){let{navHover:t,hoveredItem:n,fontClass:r}=e;return(0,l.jsxs)("main",{className:"font-futura bg-gruv-bg0-h z-50 overflow-clip relative h-full flex flex-col justify-center",children:[t&&(0,l.jsx)("div",{className:"absolute flex flex-col justify-center items-center w-full h-full z-30 backdrop-blur-lg text-5xl font-bold text-gruv-fg0",children:(0,l.jsx)("h1",{className:"tracking-in-expand",children:n})}),(0,l.jsx)("h1",{className:" z-10 m-auto my-0 gap-10 text-8xl font-bold text-gruv-fg0 ",children:"tiger liu"}),(0,l.jsxs)("ul",{className:" my-0 mt-10 text-xl self-center text-gruv-fg0 text-flicker-in-glow",children:[(0,l.jsx)("li",{className:"inline-block",children:"React"}),(0,l.jsx)("li",{className:"inline-block ml-5",children:"NextJS"}),(0,l.jsx)("li",{className:"inline-block ml-5",children:"CSS"}),(0,l.jsx)("li",{className:"inline-block ml-5",children:"Tailwind CSS"}),(0,l.jsx)("li",{className:"inline-block ml-5",children:"ThreeJS"})]}),(0,l.jsx)(x,{}),(0,l.jsx)(u,{})]})}function h(){let[e,t]=(0,s.useState)(null),[n,r]=(0,s.useState)(!1),i=e=>{t(e)};return(0,l.jsxs)("div",{className:"font-futura w-screen h-screen flex flex-col relative",children:[(0,l.jsx)("header",{className:"flex z-100 animate-intro-shrink bg-[#3c3836]"}),(0,l.jsxs)("nav",{onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),className:"rounded-xl absolute z-[60] bg-[#3c3836] top-10 left-5 flex justify-center py-4 tracking-in-expand-slow",children:[(0,l.jsx)("button",{className:"text-gruv-fg0 text-xl mx-3",onMouseEnter:()=>i("About Me"),children:"About Me"}),(0,l.jsx)("button",{className:"text-gruv-fg0 text-xl mx-3 ",onMouseEnter:()=>i("Projects"),children:"Projects"}),(0,l.jsx)("button",{className:"text-gruv-fg0 text-xl mx-3 ",onMouseEnter:()=>i("Assignments"),children:"Assignments"}),(0,l.jsx)("button",{className:"text-gruv-fg0 text-xl mx-3",onMouseEnter:()=>i("Contact Me"),children:"Contact Me"})]}),(0,l.jsx)(d,{navHover:n,hoveredItem:e,fontClass:a().className}),(0,l.jsx)("footer",{className:"z-100 animate-intro-shrink bg-[#3c3836]"})]})}},1052:function(){},7205:function(){}},function(e){e.O(0,[590,819,971,23,744],function(){return e(e.s=7543)}),_N_E=e.O()}]);