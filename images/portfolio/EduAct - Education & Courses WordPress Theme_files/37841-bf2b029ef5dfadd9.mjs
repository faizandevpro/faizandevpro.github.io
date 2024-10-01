"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[37841],{705895:(e,t,n)=>{function r(e,t,n){var r;return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>o});let a=new class{constructor(){r(this,"onResumeListeners",[]),r(this,"onPauseListeners",[]),r(this,"inExp",!1),r(this,"windowInFocus",!0)}setExperiment(e=!1){this.inExp=e}onSessionResume(e){return this.onResumeListeners.push(e),this}onSessionPause(e){return this.onPauseListeners.push(e),this}removeResumeListener(e){this.onResumeListeners.filter(t=>t!==e)}removePauseListener(e){this.onPauseListeners=this.onPauseListeners.filter(t=>t!==e)}getAppState(){return this.windowInFocus?0:void 0}},i=e=>{if(e.isHidden){let{reason:t}=e;a.windowInFocus=!1,a.onPauseListeners.forEach(e=>e(t))}else a.windowInFocus=!0,a.onResumeListeners.forEach(e=>e())};setTimeout(()=>{window.addEventListener("beforeunload",()=>i({isHidden:!0,reason:"beforeunload"})),window.addEventListener("focus",()=>i({isHidden:!1})),window.addEventListener("blur",()=>i({isHidden:!0,reason:"blur"})),window.addEventListener("pageshow",()=>i({isHidden:!1})),window.addEventListener("pagehide",()=>i({isHidden:!0,reason:"pagehide"})),void 0!==document.hidden?document.addEventListener("visibilitychange",()=>i(document.hidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1):void 0!==document.webkitHidden&&document.addEventListener("webkitvisibilitychange",()=>i(document.webkitHidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1)},0);let o=a},107981:(e,t,n)=>{n.d(t,{Z:()=>r});let r=(0,n(667294).createContext)(null)},603642:(e,t,n)=>{n.d(t,{Z:()=>et});var r=n(667294),a=n(705895),i=n(685679),o=n(608029),s=n(297329),l=n(107860),d=n(906623),c=n(521525),p=n(819281),u=n(793250),m=n(309300);let y=({constraintMap:e,initialNavTiming:t,annotations:n})=>({...n,...(0,m.jh)("constraint_",e),...(0,m.jh)("mark_",(0,l.gQ)()),...(0,m.jh)("browser_",{...t?(0,m.D3)(t):{},...(0,m.rX)()})});var f=n(840387);let g=(e,t)=>[...e.map(e=>(0,f.Z)(e,t)).filter(Boolean)];var S=n(302234),h=n(663678),T=n(953565);let v=e=>e<=2500?"Good":e>2500&&e<=4e3?"Needs Improvement":"Poor",w=({eventPrefix:e,endTime:t,tags:n,resourceArr:r,resourceType:a="allResources"})=>{let i=r.length;if(i>0&&"object"==typeof r[0]&&!Array.isArray(r[0])){let o=[...r].sort((e,t)=>e.fetchStart-t.fetchStart),s=[...r].sort((e,t)=>e.responseEnd-t.responseEnd),l=1,d=t/5,c=0;for(;l<=5;){let t=0;for(;c<=i-1&&o[c].fetchStart<=d*l;)c+=1,t+=1;(0,T.S0)(`${e}.tags.${a}.fetchStartInterval${l}of5`,t,{sampleRate:.2,tags:n}),(0,T.S0)(`${e}.${a}.fetchStartInterval${l}of5`,t,{sampleRate:.2}),l+=1}let p={zeroPercentInFlight:o[0].fetchStart,twentyFivePercentInFlight:o[Math.floor(i/4)].fetchStart,fiftyPercentInFlight:o[2*Math.floor(i/4)].fetchStart,seventyFivePercentInFlight:o[3*Math.floor(i/4)].fetchStart,hundredPercentInFlight:o[i-1].fetchStart,twentyFivePercentComplete:s[Math.floor(i/4)].responseEnd,fiftyPercentComplete:s[2*Math.floor(i/4)].responseEnd,seventyFivePercentComplete:s[3*Math.floor(i/4)].responseEnd,hundredPercentComplete:s[i-1].responseEnd};for(let t in p)p[t]&&((0,T.LY)(`${e}.tags.${a}.${t}`,p[t],{sampleRate:.2,tags:n}),(0,T.LY)(`${e}.${a}.${t}`,p[t],{sampleRate:.2}))}},_=({annotateExperiments:e,endTime:t,entries:n,metricId:r,pwtStaticContext:a})=>{let i=`${(0,h.Z)(a)}.${r.surface}`,o=[i];e&&e.forEach(e=>{let t=a.getExperimentGroup(e)||"null";o.push(`${i}.${e}.${t}`)});let s={lcpTimingBucket:v((0,S.Bn)())||"unknown",isAuthenticated:a.isAuthenticated,navigationType:r.navigationType},l=Array.from(n.filter(e=>"number"==typeof e.encodedBodySize&&e.encodedBodySize>=1e4&&e.responseEnd<=t)),d=[],c=[],p=[],u=[],m=[];l.forEach(e=>{"img"===e.initiatorType?d.push(e):"css"===e.initiatorType?c.push(e):"script"===e.initiatorType?p.push(e):"xmlhttprequest"===e.initiatorType?u.push(e):"link"===e.initiatorType&&e.name.includes("i.pinimg.com")&&m.push(e)}),o.forEach(e=>{w({eventPrefix:e,endTime:t,tags:s,resourceArr:l}),w({eventPrefix:e,endTime:t,tags:s,resourceArr:d,resourceType:"image"}),w({eventPrefix:e,endTime:t,tags:s,resourceArr:c,resourceType:"css"}),w({eventPrefix:e,endTime:t,tags:s,resourceArr:p,resourceType:"scripts"}),w({eventPrefix:e,endTime:t,tags:s,resourceArr:u,resourceType:"xhr"}),w({eventPrefix:e,endTime:t,tags:s,resourceArr:m,resourceType:"preloadedImage"})})};var E=n(279600);let A=({startTime:e,responseEnd:t},n)=>e>n.endTime||!!t&&t<n.startTime,C=({annotateExperiments:e,annotations:t,binaryAnnotations:n,constraintMap:r,endTime:a,imageTimings:i,metricId:o,pwtStaticContext:s,startTime:l,traceId:d,spans:m})=>{let f;let S=(0,E.Cg)();"initial_app_load"===o.navigationType&&(f=(0,p.Z)());let h=i.map(({name:e})=>e),T=S.map(e=>(0,u.p)(e,h)).filter(({timing:e})=>!A(e,{startTime:l,endTime:a}));return("board"===o.surface||"pin_closeup"===o.surface)&&_({annotateExperiments:e,endTime:a,entries:S,metricId:o,pwtStaticContext:s}),{type:"COMPLETE",traceId:d,startTime:l,endTime:a,spans:g(T,d).concat(m),annotationMap:y({constraintMap:r,initialNavTiming:f,annotations:t}),binaryAnnotationMap:(0,c.rA)({annotateExperiments:e,binaryAnnotations:n,entries:S,metricId:o,performanceResources:T,pwtEndTime:a,pwtStaticContext:s})}};var b=n(404373);let I=!1,k=(e,t)=>{if(e&&t){if(!I)return I=!0,t;(0,s.H)("duplicated_initial_app_load_surface_pwt")}return(0,b.Z)()};var M=n(363404),L=n(991323),P=n(438555),N=n(367180);let R=e=>{let t=performance.getEntriesByType("resource").filter(e=>e.name.includes("i.pinimg")).reduce((e,t)=>{let n=t.name.replace(".jpg","").split("/");return{[n[n.length-1]]:{downloadSize:t.name.split("/")[3].split("x")[0]},...e}},{});[...Array.from(document.getElementsByTagName("img")).map(e=>{let n=e.src.replace(".jpg","").split("/"),r=n[n.length-1];if(t[r]){let n=N.rZ(e)?.width||1,a=t[r].downloadSize;return{fileName:r,renderedSize:n,downloadedSize:a,ratio:a/n}}return{fileName:r,renderedSize:1,downloadedSize:1,ratio:1}}),...Array.from(document.querySelectorAll('div[role="img"]')).map(e=>{let n=e.style.backgroundImage.split('"')[1].replace(".jpg","").split("/"),r=n[n.length-1];if(t[r]&&e instanceof HTMLDivElement){let n=N.rZ(e)?.width||1,a=t[r].downloadSize;return{fileName:r,renderedSize:n,downloadedSize:a,ratio:a/n}}return{fileName:r,renderedSize:1,downloadedSize:1,ratio:1}})].forEach(t=>{let{ratio:n,fileName:r,downloadedSize:a}=t;t.ratio>1.05&&(0,s.A9)(`checkImageRatio.${e}`,{count:Math.round(10*n)/10,tags:{fileName:`${a}_${r}`}})})};var $=n(970126),Z=n(5859);let O=(e,t)=>{let n=(0,r.useRef)(t);return{getState:()=>n.current,dispatch:t=>{n.current=e(n.current,t)}}};var H=n(184960),x=n(785893);let B=["initial_app_load","client_route_push"],D=(0,o.XV)("PwtSurface"),j="NavigationComplete",z="VisuallyComplete",q=(e,t)=>{e.isSampled&&(0,M.Z)({metricId:e.metricConfig.metricId,pwtStaticContext:e.metricConfig.pwtStaticContext,result:{type:"ABORT",reason:t}})},U=(e,t,n)=>{let{metricConfig:{metricId:r,pwtStaticContext:a,annotateExperiments:o},annotations:d,binaryAnnotations:c,constraintMap:p,startTime:u,imageTimings:m,isSampled:y,spans:f}=e;(0,l.L8)(`PWT_Complete_${(0,i.KJ)(r)}`);let g=k("initial_app_load"===r.navigationType,a.serverData?.trace_id),S=C({annotateExperiments:o,annotations:d,binaryAnnotations:c,constraintMap:p,endTime:t,imageTimings:m,metricId:r,pwtStaticContext:a,startTime:u,traceId:g,spans:f});y&&!n&&(0,M.Z)({metricId:r,pwtStaticContext:a,result:S});try{R(String(S.binaryAnnotationMap["metricId.surface"].value))}catch(e){(0,s.H)("image_ratio_check_error",{error:e})}return{...e,result:S,status:"DONE"}},G=(e,t)=>{if(e.metricConfig.constraints.every(t=>e.constraintMap[t])){let n=Math.max(...e.metricConfig.constraints.map(t=>e.constraintMap[t]));return U(e,n,t)}return D(`Remaining constraints: ${e.metricConfig.constraints.filter(t=>!e.constraintMap[t]).join(", ")}`),e},F=(e,t)=>{let{constraint:n,time:r,disablePWTLogging:a}=t,o=(0,i.KJ)(e.metricConfig.metricId);return $.Z?e.metricConfig.constraints.find(e=>e===n)?e.constraintMap[n]?(D(`constraint "${n}" is already complete.`),(0,s.H)("duplicated_constraint_complete",{constraint:n,action:o}),e):(D(`marking constraint "${n}" as complete`),(0,l.ZP)(`constraint_${n}_is_complete`),G({...e,constraintMap:{...e.constraintMap,[n]:r||$.Z.now()}},a)):(D(`marked constraint "${n}" is not a required constraint.`),e):((0,s.H)("missing_window_performance",{action:o}),e)},J=(e,t)=>{if(!$.Z){let t=(0,i.KJ)(e.metricConfig.metricId);(0,s.H)("missing_window_performance",{action:t})}D(`removing constraint "${t}"`);let n=e.metricConfig.constraints.filter(e=>e!==t),{[t]:r,...a}=e.constraintMap;return G({...e,constraintMap:a,metricConfig:{...e.metricConfig,constraints:n}})},K=(e,t)=>{if(!$.Z){let t=(0,i.KJ)(e.metricConfig.metricId);(0,s.H)("missing_window_performance",{action:t})}D(`updating pwt segment to "${t}"`);let n={...e.metricConfig.metricId,segment:t};return{...e,metricConfig:{...e.metricConfig,metricId:n}}},V=(e,t)=>{let{metricConfig:n,startTime:r,isSampled:a,disablePWTLogging:o}=t;if(o||"TIMING"!==e.status||r===e.startTime||q(e,"routeUpdatedOnSameSurface"),!n)return{status:"DISABLED",metricConfig:null};let l=(0,i.KJ)(n.metricId);return"TIMING"===e.status&&e.startTime===r&&e.constraintMap[j]?((0,s.H)("duplicated_init_route_action",{action:l}),e):(o||("Other"===n.pwtStaticContext.browserName&&!1===n.metricId.isAuthenticated&&"initial_app_load"===n.metricId.navigationType?((0,s.A9)(`TIMING.${l}`,{tags:{userAgent:window?.navigator?.userAgent}}),(0,s.A9)(`TIMING.sampled.${l}`,{tags:{userAgent:window?.navigator?.userAgent},sampleRate:.5})):((0,s.A9)(`TIMING.${l}`),(0,s.A9)(`TIMING.sampled.${l}`,{sampleRate:.5}))),F({status:"TIMING",metricConfig:n,startTime:r,constraintMap:{},annotations:{},binaryAnnotations:{},imageTimings:[],isSampled:a,spans:[]},{constraint:j,disablePWTLogging:o}))},W=(e,t)=>{if(D("dispatch action",t),"INIT_ROUTE"===t.type)return V(e,t.payload);if("TIMING"!==e.status)return D(`ignoring action due to invalid state ${e.status}`,t),e;switch(t.type){case"ABORT":q(e,t.reason);let n={type:"ABORT",reason:t.reason};return{...e,status:"DONE",result:n};case"ANNOTATE":let{name:r}=t.payload;if(!$.Z)return e;let a=$.Z.now();return D(`adding annotation {${r}: ${a}}`),{...e,annotations:{...e.annotations,[r]:a}};case"BINARY_ANNOTATE":let{name:o,value:l,annotationType:d}=t.payload;return D(`adding binary annotation {${o}: ${l}}`),{...e,binaryAnnotations:{...e.binaryAnnotations,[o]:{value:l,type:d}}};case"MARK_CONSTRAINT_COMPLETE":return F(e,t.payload);case"REMOVE_CONSTRAINT":return J(e,t.payload);case"SET_SEGMENT":return K(e,t.payload);case"SET_VISUALLY_COMPLETE_RESULT":{let{payload:{imageTimings:n}}=t;if(0===n.length)return q(e,"visuallyComplete_noImages"),{...e,status:"DONE",result:{type:"ABORT",reason:"visuallyComplete_noImages"}};let r=Math.max(...n.map(e=>e.responseEnd||0));return F({...e,imageTimings:n},{constraint:z,time:r})}case"ADD_SUBSPAN":let{startTime:c}=e,{payload:{name:p,startTime:u,endTime:m,annotations:y,binaryAnnotations:f,parentId:g}}=t;return{...e,spans:[...e.spans,{name:p,id:(0,b.Z)(),startTime:u||c,endTime:m,annotationMap:{...y},binaryAnnotationMap:{...f},parentId:g}]};case"START_SUBSPAN":return{...e,spans:[...e.spans,{name:t.payload.name,id:(0,b.Z)(),startTime:$.Z?$.Z.now():0,endTime:1/0,annotationMap:{...t.payload.annotations},binaryAnnotationMap:{...t.payload.binaryAnnotations},parentId:t.payload.parentId}]};case"STOP_SUBSPAN":let S=e.spans.findIndex(e=>e.name===t.payload.name);return S>-1?(e.spans[S].endTime=$.Z?$.Z.now():0,t.payload.annotations&&(e.spans[S].annotationMap={...e.spans[S].annotationMap,...t.payload.annotations}),t.payload.binaryAnnotations&&(e.spans[S].binaryAnnotationMap={...e.spans[S].binaryAnnotationMap,...t.payload.binaryAnnotations})):(0,s.H)("invalid_subspan_stop_name",{name:t.payload.name}),e;default:let h=(0,i.KJ)(e.metricConfig.metricId);return(0,s.H)("invalid_pwt_surface_action",{action:h}),e}},Y=e=>{if(!e)return"initial_app_load";switch(e.action){case"PUSH":return"client_route_push";case"REPLACE":return"client_route_replace";default:return null}},X=new Set,Q=({surface:e,constraints:t,segment:n,measureGridVisuallyComplete:i,annotateExperiments:o,customEnabledNavigationTypes:s,navigationInfo:{clientNavigation:l,navigationType:d},sampleRate:c})=>{let p=(0,r.useRef)("NOT_SET"),u=(0,P.Z)(),{getState:m,dispatch:y}=O(W,{status:"DISABLED",metricConfig:null}),f=(0,Z.B)();if(p.current!==l&&(p.current=l,u)){let{isAuthenticated:r}=u,a=e&&d&&(s||B).includes(d)?{metricId:{type:"surface",surface:e,navigationType:d,isAuthenticated:r,segment:n},annotateExperiments:o,constraints:[j,...t||[],...i?[z]:[]],pwtStaticContext:u}:null;(0,T.nP)("webapp.pwt_surface.init_route",{tags:{surface:e,navigationType:d,isAuthenticated:r}});let p=!X.has(l);y({type:"INIT_ROUTE",payload:{metricConfig:a,startTime:l?l.time:0,isSampled:!c||Math.random()<c,disablePWTLogging:!p}}),p&&X.add(l)}let g=m();if((0,r.useEffect)(()=>()=>{X.delete(l)},[l]),(0,r.useEffect)(()=>{let e=e=>{y({type:"ABORT",reason:e})};a.Z.onSessionPause(e);let t=window.innerHeight,n=window.innerWidth,r=()=>{let e=Math.abs(window.innerHeight-t),a=Math.abs(window.innerWidth-n),i=window.innerHeight!==t,o=window.innerWidth!==n,s={handler:(0,H.H)(),deviceType:u?.deviceType??"unknown",isAuthenticated:u?.isAuthenticated??"unknown",platform:f.userAgent.platform??"unknown"};if((0,T.nP)("webapp.PwtLogger.handleResize",{sampleRate:1,tags:{...s,heightChanged:i,widthChanged:o}}),i&&(0,T.S0)("webapp.PwtLogger.resizeHeightDelta",e,{sampleRate:1,tags:s}),o&&(0,T.S0)("webapp.PwtLogger.resizeWidthDelta",a,{sampleRate:1,tags:s}),window.removeEventListener("resize",r),u?.deviceType==="phone"&&(!o&&i&&e<=150||!i&&!o)||u?.deviceType==="desktop"&&!i&&!o){(0,T.nP)("webapp.PwtLogger.skipResizeAbort",{sampleRate:1,tags:{...s,heightChanged:i,widthChanged:o}});return}y({type:"ABORT",reason:"windowResized"})};return window.addEventListener("resize",r),()=>{let t=m();D("handling unmount",t),"TIMING"===t.status&&q(t,"unmount"),a.Z.removePauseListener(e),window.removeEventListener("resize",r)}},[]),"TIMING"!==g.status||!g.constraintMap[j])return{state:g,context:null};let{startTime:S,metricConfig:h}=g;return{state:g,context:{abort:e=>y({type:"ABORT",reason:e}),addAnnotation:e=>y({type:"ANNOTATE",payload:{name:e}}),addBinaryAnnotation:(e,t,n)=>y({type:"BINARY_ANNOTATE",payload:{name:e,value:t,annotationType:n}}),addSubspan:(e,t,n,r={},a={},i=null)=>y({type:"ADD_SUBSPAN",payload:{name:e,startTime:t,endTime:n,annotations:r,binaryAnnotations:a,parentId:i}}),getId:()=>S,getMetricId:()=>h.metricId,markConstraintComplete:e=>y({type:"MARK_CONSTRAINT_COMPLETE",payload:{constraint:e,time:$.Z?$.Z.now():0}}),removeConstraint:e=>y({type:"REMOVE_CONSTRAINT",payload:e}),setSegment:e=>y({type:"SET_SEGMENT",payload:e}),setVisuallyCompleteResult:h.constraints.includes(z)?e=>y({type:"SET_VISUALLY_COMPLETE_RESULT",payload:e}):null,startSubspan:(e,t={},n={},r=null)=>y({type:"START_SUBSPAN",payload:{name:e,annotations:t,binaryAnnotations:n,parentId:r}}),stopSubspan:(e,t={},n={},r=null)=>y({type:"STOP_SUBSPAN",payload:{name:e,annotations:t,binaryAnnotations:n,parentId:r}})}}},ee=()=>{let e=(0,d.E)(),t=!!e;(0,r.useEffect)(()=>{if(t){let t=e?.getMetricId(),n=t?(0,i.KJ)(t):null;(0,s.H)("nested_pwt_surface",{action:n})}},[t])};function et({children:e,...t}){let n=(0,L.Z)(),r=Y(n),a=t.measureGridVisuallyComplete?["web_masonry_v2_auth","web_masonry_v2_unauth"]:[],i=[...t.annotateExperiments??[],...a],{context:o}=Q({...t,annotateExperiments:i,navigationInfo:{navigationType:r,clientNavigation:n}});return ee(),(0,x.jsx)(d.S,{value:o,children:e})}},253926:(e,t,n)=>{n.d(t,{cC:()=>i,jy:()=>a,qr:()=>s,sk:()=>o});let r=e=>"number"==typeof e?Math.round(e):e,a=e=>({type:"I16",value:r(e)}),i=e=>({type:"I32",value:r(e)}),o=e=>({type:"STRING",value:e}),s=e=>({type:"BOOL",value:e})},309300:(e,t,n)=>{n.d(t,{D3:()=>i,Hd:()=>l,jh:()=>s,rX:()=>o});var r=n(383340),a=n(302234);let i=e=>({...(0,r.Z)(e),domComplete:e.domComplete||0,domContentLoadedEventEnd:e.domContentLoadedEventEnd||0,domContentLoadedEventStart:e.domContentLoadedEventStart||0,domInteractive:e.domInteractive||0,loadEventEnd:e.loadEventEnd||0,loadEventStart:e.loadEventStart||0}),o=()=>{let{largestContentfulPaint:e}=(0,a.v2)();return{largestContentfulPaint:e||0}},s=(e,t)=>Object.keys(t).reduce((n,r)=>({...n,[`${e}${r}`]:t[r]}),{}),l=(e,t)=>Object.keys(e).reduce((n,r)=>t.includes(r)?{...n,[r]:e[r]}:n,Object.freeze({}))},521525:(e,t,n)=>{n.d(t,{ng:()=>h,rA:()=>v});var r=n(685679),a=n(107860),i=n(253926),o=n(302234),s=n(279600),l=n(788389);let d=(e,t)=>(e||[]).reduce((e,n)=>({...e,[`experiment.${n}`]:(0,i.sk)(t(n))}),{}),c=(e,t)=>"number"==typeof t?e(t):null,p=e=>Number(Number(e/1024).toFixed(3)),u=e=>e.reduce((e,t)=>e+t,0),m=(e,t)=>Object.keys(t).reduce((n,r)=>({...n,[`${e}${r}`]:t[r]}),{}),y=e=>{if(!e.length)return{};let t=e.map(({startTime:e,requestStart:t,responseStart:n,responseEnd:r})=>{let a=t||e;return{startTime:e,requestStart:a,responseStart:n||a,responseEnd:r}}),n=u(t.map(e=>e.requestStart-e.startTime)),r=u(t.map(e=>e.responseStart-e.requestStart)),a=u(t.map(e=>e.responseEnd-e.responseStart)),o=u(e.map(e=>e.decodedBodySize||0));return{decodedBodySize:(0,i.cC)(p(o)),"duration.all":(0,i.cC)(n+r+a),"duration.requestStartToResponseStart":(0,i.cC)(r),"duration.responseStartToResponseEnd":(0,i.cC)(a),"duration.startToRequestStart":(0,i.cC)(n)}},f=e=>{let t=e.filter(e=>!!e.responseEnd);return{...e.length?{...y(t),"count.completed":(0,i.cC)(t.length)}:{},"count.all":(0,i.cC)(e.length)}},g=e=>{let t=["timeSecond1","timeSecond2","timeSecond3"],n={timeSecond1:{start:0,end:0,count:0},timeSecond2:{start:0,end:0,count:0},timeSecond3:{start:0,end:0,count:0}},r={script_deferred:[],external:[],visually_complete:[],script:[],css:[],video:[],image:[],xmlhttprequest:[],other:[]};if(e.length){let{requestStart:a,startTime:i}=e[0].timing,o=a||i;n.timeSecond1.start=o,n.timeSecond1.end=o+1e3,n.timeSecond2.start=o+1e3,n.timeSecond2.end=o+2e3,n.timeSecond3.start=o+2e3,n.timeSecond3.end=o+3e3,e.forEach(e=>{let{timing:a}=e;r[e.category]=r[e.category].concat([a]),e.isDeferred&&(r.script_deferred=r.script_deferred.concat([a])),e.isExternal&&(r.external=r.external.concat([a])),e.isVisuallyCompleteRequired&&(r.visually_complete=r.visually_complete.concat([a]));let{requestStart:i,startTime:o,responseEnd:s}=a,l=i||o;t.forEach(e=>{let{start:t,end:r}=n[e];l>=t&&l<r?n[e].count+=1:l<t&&s>t&&(n[e].count+=1)})})}let a={...m("concurrentRequests.",Object.keys(n).reduce((e,t)=>e={...e,[t]:(0,i.cC)(n[t].count)},{}))};return{...Object.keys(r).reduce((e,t)=>({...e,...m(`resource.${t}.`,f(r[t]))}),a)}},S=(e,t,n)=>{let a;let{devicePixelRatio:o,navigator:d,innerWidth:p,innerHeight:u,performance:m}=window,{deviceMemory:y,hardwareConcurrency:f,platform:g,userAgent:S,connection:h}=d,{memory:T}=m,{appType:v,appVersion:w,browserName:_,browserVersion:E,deviceType:A,isAppShell:C,isAuthenticated:b,isBot:I,isForcedReload:k,isSocialBot:M,locale:L,osName:P,stageName:N,unauthId:R}=t,{navigationType:$}=e,Z=null;if("initial_app_load"===$){a=1;let e=l.Z("navigation")[0]?.transferSize;Z=e?parseFloat((.001*e).toFixed(1)):null}else a=4;let O={"app.type":(0,i.jy)("desktop"===A?v||5:v||6),"app.version":(0,i.sk)(w),"browser.name":(0,i.sk)(_),"browser.version":(0,i.sk)(E),"cpu.speed":(0,i.jy)(f),"device.memory":(0,i.jy)(y),"device.type":(0,i.jy)(0),"device.typeName":(0,i.sk)(A),"device.version":(0,i.sk)("unknown"),"pwt.cause":(0,i.jy)(a),"net.effectiveType":(0,i.sk)(h?.effectiveType||null),"net.downlink":(0,i.cC)(c(e=>10*Math.round(e/10),h?.downlink)),"net.downlinkMax":(0,i.cC)(c(e=>10*Math.round(e/10),h?.downlinkMax)),"net.rtt":(0,i.cC)(c(e=>10*Math.round(e/10),h?.rtt)),"net.speed":(0,i.cC)((0,s.Hv)(n,!1)),"pwt.result":(0,i.jy)(1),"view.type":(0,i.cC)(0),"viewport.height":(0,i.cC)(u||0),"viewport.width":(0,i.cC)(p||0),devicePixelRatio:(0,i.cC)(o||0),isAppShell:(0,i.qr)(C),isAuthenticated:(0,i.qr)(b),isBot:(0,i.qr)(I),isForcedReload:(0,i.qr)(k),isSocialBot:(0,i.qr)(M),locale:(0,i.sk)(L),osName:(0,i.sk)(P),...null!==Z&&{htmlResponseSize:(0,i.cC)(Z)},nextHopProtocol:(0,i.sk)(l.Z("navigation")[0]?.nextHopProtocol||null),platform:(0,i.sk)(g||null),profilerVersion:(0,i.sk)("3"),pwtActionName:(0,i.jy)((0,r.Rp)(e)),stageName:(0,i.sk)(N),userAgent:(0,i.sk)(S),usedJSHeapSize:(0,i.cC)(T?.usedJSHeapSize||0),totalJSHeapSize:(0,i.cC)(T?.totalJSHeapSize||0),jsHeapSizeLimit:(0,i.cC)(T?.jsHeapSizeLimit||0)};return b?O:{...O,unauthId:(0,i.sk)(R)}},h=({annotateExperiments:e,metricId:t,pwtStaticContext:n,binaryAnnotations:r={},performanceResourceTimings:a=[]})=>({...d(e,n.getExperimentGroup),...S(t,n,a),...r,stopwatchVersion:(0,i.jy)(1)}),T=(e,t)=>{let{navigator:n}=window,{serviceWorker:r}=n,{surface:s,navigationType:l,isAuthenticated:d}=e,{cumulativeLayoutShiftScore:c,longTaskDurations:p}=(0,o.v2)();return{...p.length?{"longTask.count":(0,i.cC)(p.length),"longTask.maxDuration":(0,i.cC)(Math.max(...p)),"longTask.totalDuration":(0,i.cC)(u(p))}:{},cumulativeLayoutShiftScore:(0,i.cC)(100*c),"masonry.paginationMarkCount":(0,i.cC)((0,a.Ao)(a.at,t)),"metricId.isAuthenticated":(0,i.qr)(d),"metricId.navigationType":(0,i.sk)(l),"metricId.surface":(0,i.sk)(s),resourceBufferClearedCount:(0,i.jy)((0,a.Ao)("resourceBufferCleared",t)),scrollDuringLayout:(0,i.qr)((0,a.BA)("scrollDuringLayout",t)),serviceWorker:(0,i.qr)(r?!!r.controller:null),serviceWorkerState:(0,i.sk)(r?.controller?.state||null)}},v=({annotateExperiments:e,binaryAnnotations:t={},entries:n,metricId:r,performanceResources:a,pwtEndTime:i,pwtStaticContext:o})=>({...t,...g(a),...d(e,o.getExperimentGroup),...S(r,o,n),...T(r,i)})},819281:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(970126);let a=()=>{let[e]=r.Z?r.Z.getEntriesByType("navigation"):[];return e}},363404:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(120889),a=n(194087),i=n(685679),o=n(608029),s=n(297329);let l=null,d=(e,t)=>((l=l||{results:[],context:t}).results.push(e),l);var c=n(253926),p=n(819281),u=n(404373),m=n(788389);let y=(e,t)=>Object.keys(e).reduce((n,r)=>{let a=e[r];return a?{...n,[r]:{timestamp:t+a}}:n},{}),f=e=>Object.keys(e).reduce((t,n)=>{let r=e[n];if(!r)return t;let{value:a,type:i}=r;return null==a?t:t.concat({name:n,value:a,annotation_type:i})},[]),g=({span:e,timeOrigin:t})=>({id:e.id,parent_id:e.parentId||null,result:1,name:e.name,timestamp:t+e.startTime,duration:e.endTime-e.startTime,annotations:y(e.annotationMap,t),binary_annotations:f(e.binaryAnnotationMap)}),S=(e,{startTime:t,endTime:n,annotationMap:r,binaryAnnotationMap:a,parentId:i,traceId:o})=>({name:`pwt/${e}`,startTime:t,endTime:n,annotationMap:r,binaryAnnotationMap:a,parentId:i,id:o}),h=({annotations:e})=>e.reduce((e,{key:t,timestamp:n})=>({...e,[`server_${t}`]:{timestamp:n}}),{}),T=(e,t)=>({...e,annotations:{...h(t),...e.annotations},binary_annotations:[...t.binary_annotations,...e.binary_annotations]}),v=(e,t,n)=>{let r=(0,p.Z)();return r?.responseEnd?T(g({span:{name:"html",startTime:0,endTime:r?.responseEnd||1,annotationMap:{},binaryAnnotationMap:{nextHopProtocol:(0,c.sk)(m.Z("navigation")[0]?.nextHopProtocol||null)},id:e.server_span_id||(0,u.Z)(),parentId:t},timeOrigin:n}),e):null},w=({traceId:e,actionName:t,result:n,timeOrigin:r,serverDataToJoin:a})=>{let i=g({span:S(t,n),timeOrigin:r}),o=null;return a&&(i=T(i,a),o=v(a,e,r)),{trace_id:e,spans:[i,...o?[o]:[],...n.spans.map(e=>g({span:e,timeOrigin:r}))]}},_=e=>({debugTrace:a.eD,locale:e.locale,stageName:e.stageName}),E=(0,o.XV)("reportResult"),A=()=>window.performance?.now?Date.now()-window.performance.now():"unknown";function C({metricId:e,pwtStaticContext:t,result:n,isAuth:o}){let{serverData:l}=t,c=(0,i.KJ)(e),p=`${n.type}.${c}`,u=`${n.type}.sampled.${c}`,m=void 0!==o&&{tags:{isAuth:o}}||void 0;if((0,s.A9)(n.reason?p.concat(`.${n.reason}`):p,m),(0,s.A9)(n.reason?u.concat(`.${n.reason}`):u,{...m,sampleRate:.5}),"COMPLETE"!==n.type){E(`Abort metric ${c}`,n);return}let y=A();if("unknown"===y){E(`Unable to convert to absolute times for ${c} due to missing time origin`),(0,s.A9)(`missingTimeOrigin.${c}`,m);return}if(a.is&&(window.PWT_LAB_DATA=d(n,t)),n.spans.length&&(n.spans=n.spans.map(e=>(e.parentId||e.id===n.traceId||"network_resources"===e.name||(e.parentId=n.traceId),e))),!a.is){let a=e.navigationType&&"initial_app_load"===e.navigationType,{traceId:i}=n,o=w({traceId:i,actionName:c,result:n,timeOrigin:y,serverDataToJoin:a&&l||null});(0,r.Z)({type:"POST",url:"/_/_/trace/trace/",data:{report_data:JSON.stringify(o),report_context:JSON.stringify(_(t))}}),E(`PinTrace ${c} will be available shortly: https://pintrace.pinadmin.com/zipkin/traces/${i.toString(16)}`,{duration:n.endTime-n.startTime,result:n,pwtStaticContext:t})}}},383340:(e,t,n)=>{n.d(t,{Z:()=>r});let r=e=>({connectEnd:e.connectEnd||0,connectStart:e.connectStart||0,domainLookupEnd:e.domainLookupEnd||0,domainLookupStart:e.domainLookupStart||0,fetchStart:e.fetchStart||0,requestStart:e.requestStart||0,redirectEnd:e.redirectEnd||0,redirectStart:e.redirectStart||0,responseEnd:e.responseEnd||0,responseStart:e.responseStart||0,secureConnectionStart:e.secureConnectionStart||0,startTime:e.startTime||0,workerStart:e.workerStart||0,unloadEventStart:e.unloadEventStart||0,unloadEventEnd:e.unloadEventEnd||0})},840387:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(253926),a=n(383340),i=n(404373);let o=({category:e,isDeferred:t,isExternal:n})=>[e].concat(t?["deferred"]:[]).concat(n?["external"]:[]).join("_");function s(e,t){let{category:n,timing:s,isDeferred:l,isExternal:d,isVisuallyCompleteRequired:c}=e;return s.responseEnd&&("image"!==n||c)?{name:o(e),id:(0,i.Z)(),parentId:t,startTime:s.startTime,endTime:s.responseEnd,annotationMap:(0,a.Z)(s),binaryAnnotationMap:{category:(0,r.sk)(n),decodedBodySize:(0,r.cC)(s.decodedBodySize||0),initiatorType:(0,r.sk)(s.initiatorType),isDeferred:(0,r.qr)(l),isExternal:(0,r.qr)(d),name:(0,r.sk)(s.name),nextHopProtocol:(0,r.sk)(s.nextHopProtocol),transferSize:(0,r.cC)(s.transferSize||0)}}:null}},991323:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(667294),a=n(107981);function i(){return(0,r.useContext)(a.Z)}},302234:(e,t,n)=>{let r;n.d(t,{Bn:()=>y,Kj:()=>m,PJ:()=>d,UQ:()=>g,Ux:()=>c,on:()=>s,v2:()=>p});var a=n(987313),i=n(59648);let o={cumulativeLayoutShiftScore:0,longTaskDurations:[],largestContentfulPaint:null,elementTimings:[]},s=()=>{o.longTaskDurations=[]},l=(0,a.Z)(()=>o.elementTimings),d=()=>l.get(),c=e=>{e&&l.save(),o.elementTimings=[]},p=()=>o,u=0,m=()=>u,y=()=>r,f=e=>e.reduce((e,{identifier:t,loadTime:n,renderTime:r})=>e.concat("string"==typeof t&&"number"==typeof n&&"number"==typeof r?[{identifier:t,loadTime:n,renderTime:r}]:[]),[]),g=()=>{(0,i.Z)({type:"element",buffered:!0},e=>{o.elementTimings=o.elementTimings.concat(f(e.getEntries()))}),(0,i.Z)({entryTypes:["longtask"]},e=>{e.getEntries().map(e=>o.longTaskDurations.push(e.duration))},()=>s()),(0,i.Z)({type:"largest-contentful-paint",buffered:!0},e=>{let t=e.getEntries(),n=t.length,a=t[n-1];a&&(u=n,o.largestContentfulPaint=a.renderTime||a.loadTime||null,r=a.renderTime||a.loadTime||null)}),(0,i.Z)({type:"layout-shift",buffered:!0},e=>{e.getEntries().forEach(e=>{e.hadRecentInput||(o.cumulativeLayoutShiftScore+=e.value)})})}},663678:(e,t,n)=>{n.d(t,{Z:()=>r});let r=e=>{let{deviceType:t,isBot:n,isSocialBot:r}=e;return`coreWebVitalsLite.v1.${r&&"socialBot"||n&&"bot"||"nonbot"}.${t}`}},404373:(e,t,n)=>{n.d(t,{Z:()=>r});function r(){let e="";for(let t=0;t<15;t+=1)e+="0123456789"[Math.floor(10*Math.random())];return Number(e)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/37841-bf2b029ef5dfadd9.mjs.map