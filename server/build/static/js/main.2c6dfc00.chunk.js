(this["webpackJsonpteltrium-spetrum-dashboard"]=this["webpackJsonpteltrium-spetrum-dashboard"]||[]).push([[0],{109:function(e,t,a){"use strict";var n=a(12),r=a(0);t.a=function(){var e=Object(r.useState)({width:void 0,height:void 0}),t=Object(n.a)(e,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){var e=function(){c({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}},33:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n=function(e,t,a){if(!e)return"";var n=86400*Math.floor(e-25569),r=new Date(1e3*n),c=r.getDate(),o=c<10?"0"+c:c,i=r.getFullYear(),l=r.getMonth()+1,s=l<10?"0"+l:l;return"table"===a?s+"-"+o+"-"+i:i+t+"-"+s+"-"+o},r=function(e,t){if(!e)return"";var a=86400*Math.floor(e-25569),n=86400*Math.floor(t-25569),r=new Date((a+n)/2*1e3),c=r.getDate(),o=c<10?"0"+c:c,i=r.getFullYear(),l=r.getMonth()+1;return i+"-"+(l<10?"0"+l:l)+"-"+o}},39:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return o}));var n="static/excel/systems_dataset_v3.xlsx",r="static/excel/lunar_systems_dataset_v4.xlsx",c="static/excel/users_dataset_v2.xlsx",o="static/excel/dataset_v3.xlsx"},411:function(e,t){},437:function(e,t,a){e.exports=a(680)},667:function(e,t){},668:function(e,t){},680:function(e,t,a){"use strict";a.r(t);a(438),a(450),a(635),a(636);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),i=a(413),l=a(424),s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function u(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var m=a(425),d=a(240),f=a(36),p=a(426),b=a(738),h=a(741),g=a(30),E=a(12),y=a(707),j=a(15),v=a(732),O=a(726),w=a(715),S=a(733),x=a(100),k=a(716),C=a(737),_=a(740),F=a(719),z=a(734),N=a(735),D=a(412),H=a.n(D),T=a(110),q=a(62),G=a(714),M=a(180),A=a.n(M),I=a(26),B=a(95),L=a(717),R=a(427),U=["children","value","index"],W=function(e){var t=e.children,a=e.value,n=e.index,c=Object(R.a)(e,U);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n},c),a===n&&r.a.createElement(C.a,{p:3},t))},V=["#808000","#FFFF00","#00FF00","#00FFFF","#FF00FF","#0000FF","#FF0000","#000080","#008080","#008000","#800080","#800000","#808080","#FEC433","#C0C0C0"],P=a(33),Y=a(39),X=a(108),J=a.n(X),Z=a(109),$=function(e){var t=e.traces,a=e.startDate,n=e.axis,c=Object(Z.a)();return r.a.createElement(J.a,{data:t,layout:{width:.7*c.width,xaxis:{title:"",titlefont:{size:10,color:"#212529"},tickfont:{size:12},range:[Object(P.a)(a,-1),Object(P.a)(a,7)],dtick:"M12",showgrid:!0,zerolinecolor:"#969696",zerolinewidth:1},yaxis:{title:"Frequency (GHZ)",titlefont:{size:12,color:"#212529"},tickfont:{size:12},range:[n.start,n.stop],dtick:n.step,showgrid:!0,zerolinecolor:"#969696",zerolinewidth:1},legend:{orientation:"h",xanchor:"left",traceorder:"normal",font:{family:"sans-serif",size:12,color:"#000"},bordercolor:"#212529",borderwidth:1,tracegroupgap:100},margin:{l:60,b:80,r:30,t:30,pad:5},showlegend:!0},config:{displayModeBar:!1}})},K=a(708),Q=a(709),ee=a(710),te=a(711),ae=a(712),ne=a(713),re=function(e){var t=e.rows,a=e.columns;return r.a.createElement(K.a,{style:{maxHeight:440}},r.a.createElement(Q.a,{stickyHeader:!0,"aria-label":"sticky table",className:"customized-gantt-chart-table"},r.a.createElement(ee.a,null,r.a.createElement(te.a,null,a.map((function(e){return r.a.createElement(ae.a,{key:e.id,align:"center"},e.name.toUpperCase())})))),r.a.createElement(ne.a,null,t.map((function(e,t){return r.a.createElement(te.a,{hover:!0,key:"".concat(e.Chart_Type.split(" ").join("_"),"_").concat(t)},a.map((function(a,n){return r.a.createElement(ae.a,{key:a.id,align:"center"},function(e,t,a,n){if(0===a)return n+1;switch(e){case"SFreq_GHz":case"EFreq_GHz":return t[e].toFixed(7);case"SDate":case"EDate":return Object(P.a)(t[e],0);default:return t[e]}}(a.id,e,n,t))})))})))))},ce=[{id:"no",name:"no"},{id:"System",name:"system"},{id:"Chart_Type",name:"band"},{id:"Link_Type",name:"link type"},{id:"SFreq_GHz",name:"min freq (ghz)"},{id:"EFreq_GHz",name:"max freq (ghz)"},{id:"SDate",name:"start date"},{id:"EDate",name:"end date"}],oe={start:0,stop:0,step:0},ie=Object(y.a)((function(e){return{root:{},appBar:{boxShadow:e.shadows[1]},title:{marginBottom:e.spacing(2)}}})),le=function(e){var t=e.status,a=Object(n.useState)(0),c=Object(E.a)(a,2),o=c[0],i=c[1],l=Object(n.useState)([]),s=Object(E.a)(l,2),u=s[0],m=s[1],d=Object(n.useState)([]),f=Object(E.a)(d,2),p=f[0],b=f[1],h=Object(n.useState)(0),g=Object(E.a)(h,2),y=g[0],j=g[1],v=Object(n.useState)(oe),O=Object(E.a)(v,2),S=O[0],C=O[1],z=Object(n.useState)([]),N=Object(E.a)(z,2),D=N[0],H=N[1],T=ie();Object(n.useEffect)((function(){var e={},a=new XMLHttpRequest;a.open("GET",Y.b,!0),a.responseType="arraybuffer",a.onload=function(n){var r=new Uint8Array(a.response),c=I.read(r,{type:"array"});c.SheetNames.forEach((function(t){var a=[],n=I.utils.sheet_to_json(c.Sheets[t],{header:1});e[t]=[],n.forEach((function(e,t){t>0&&a.push(B.a.object(n[0],e))})),e[t]=a})),e[Object.keys(e)[0]].forEach((function(a){a.data=e[Object.keys(e)[1]].filter((function(e){return e.Chart_Type===t.band&&e.Item_No===t.scope}))})),m(e[Object.keys(e)[0]])},a.send()}),[t.scope,t.band]),Object(n.useEffect)((function(){var e=0,a=0,n=0,r=0,c=[];u.forEach((function(o){var i=o;if(o.Chart_Type===t.band){if(Object.keys(o).includes("data")&&o.data.length>0){var l=o.data.map((function(e){return e.System})).indexOf(t.system);o.data.splice(o.data.length-1,0,o.data.splice(l,1)[0]),e=o.data[0].SDate}else e=o.X_Axis_Start;if(n=o.Y_Axis_Step_Size,a=o.Y_Axis_Start,r=o.Y_Axis_Stop,Object.keys(i).includes("data")&&i.data.length>0)o.data.forEach((function(t,a){var r=new Date(t.SDate),i=new Date(e),l=t.SFreq_GHz+Math.abs(t.SFreq_GHz-t.EFreq_GHz)/2,s=!0;r<i&&(e=t.SDate),o.data.forEach((function(e,n){n<a&&e.System===t.System&&(a=n,s=!1)}));var u={name:t.System,x:[Object(P.a)(t.SDate,0),Object(P.a)(t.EDate,0)],y:[l,l],mode:"lines",line:{width:Math.abs(t.SFreq_GHz-t.EFreq_GHz)/(10*n)*340,color:V[a%V.length]},showlegend:s};c.push(u)}));else{var s={name:"",x:[e,e+10],y:[a,a],mode:"lines",line:{width:Math.abs(a-r)/(10*n)*340,color:"transparent"},showlegend:!1,marker:{size:12,shape:["line-ew","diamond-open","line-ew","line-ew","diamond-open","line-ew"]}};c.push(s)}H(o.data)}})),b(c),j(e),C({start:a,stop:r,step:n})}),[t.band,t.system,u]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{container:!0,alignItems:"center",justify:"center",spacing:3},r.a.createElement(G.a,{item:!0,md:12,className:T.title},r.a.createElement(x.a,{variant:"h6",component:"strong"},"Band Overview \u2013 Commercial Relay Systems"))),r.a.createElement(G.a,{container:!0,alignItems:"center",justify:"center",spacing:3},r.a.createElement(G.a,{item:!0,md:12},r.a.createElement(w.a,null,r.a.createElement(k.a,null,r.a.createElement(L.a,{position:"static",color:"default",className:T.appBar},r.a.createElement(_.a,{value:o,onChange:function(e,t){i(t)},indicatorColor:"primary",textColor:"primary","aria-label":"Gantt and Data View"},r.a.createElement(F.a,{label:"Gantt View"}),r.a.createElement(F.a,{label:"Data View"}))),r.a.createElement(A.a,{index:o},r.a.createElement(W,{value:o,index:0},r.a.createElement($,{traces:p,startDate:y,axis:S})),r.a.createElement(W,{value:o,index:1},r.a.createElement(re,{rows:D,columns:ce}))))))))},se=function(e){var t=e.rows,a=e.columns;return r.a.createElement(K.a,{style:{maxHeight:440}},r.a.createElement(Q.a,{stickyHeader:!0,"aria-label":"sticky table",className:"customized-gantt-chart-table"},r.a.createElement(ee.a,null,r.a.createElement(te.a,null,a.map((function(e){return r.a.createElement(ae.a,{key:e.id,align:"center"},e.name.toUpperCase())})))),r.a.createElement(ne.a,null,t.map((function(e,t){return r.a.createElement(te.a,{hover:!0,key:"user-row-".concat(t)},a.map((function(a,n){return r.a.createElement(ae.a,{key:a.id,align:"center"},function(e,t,a,n){return 0===a?n+1:t[e]}(a.id,e,n,t))})))})))))},ue=function(e){var t=e.traces,a=e.axis,n=Object(Z.a)();return r.a.createElement(J.a,{data:t,layout:{width:.7*n.width,xaxis:{title:"",titlefont:{size:10,color:"#212529"},tickfont:{size:12},dtick:"M12",showgrid:!0,zerolinecolor:"#969696",zerolinewidth:1},yaxis:{titlefont:{size:12,color:"#212529"},tickfont:{size:12},range:[a.start,a.stop],dtick:1,showgrid:!0,zerolinecolor:"#969696",zerolinewidth:1},margin:{l:60,b:80,r:30,t:30,pad:5},showlegend:!1},config:{displayModeBar:!1}})},me=[{id:"no",name:"no"},{id:"User",name:"user"},{id:"System",name:"system"},{id:"SDate",name:"start date"},{id:"EDate",name:"end date"}],de={start:0,stop:0},fe=Object(y.a)((function(e){return{root:{},appBar:{boxShadow:e.shadows[1]},title:{marginBottom:e.spacing(2)}}})),pe=function(e){var t=e.scope,a=e.system,c=Object(n.useState)(0),o=Object(E.a)(c,2),i=o[0],l=o[1],s=Object(n.useState)([]),u=Object(E.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)([]),p=Object(E.a)(f,2),b=p[0],h=p[1],g=Object(n.useState)(de),y=Object(E.a)(g,2),j=y[0],v=y[1],O=fe();Object(n.useEffect)((function(){var e=[],t=new XMLHttpRequest;t.open("GET",Y.d,!0),t.responseType="arraybuffer",t.onload=function(n){var r=new Uint8Array(t.response),c=I.read(r,{type:"array"});I.utils.sheet_to_json(c.Sheets[c.SheetNames[0]],{header:1}).forEach((function(t,n){n>0&&a===t[1]&&e.push({User:t[0],System:t[1],SDate:Object(P.a)(t[2],0),EDate:Object(P.a)(t[3],0)})})),d(e)},t.send()}),[t,a]),Object(n.useEffect)((function(){var e=m.length/5*3,t=[];m.forEach((function(e,a){var n={x:[e.SDate,e.EDate],y:[e.User,e.User],name:e.User,mode:"lines",line:{width:20,color:V[a%V.length]}};t.push(n)})),h(t),v({start:e,stop:0})}),[m]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{container:!0,alignItems:"center",justify:"center",spacing:3},r.a.createElement(G.a,{item:!0,md:12},r.a.createElement(x.a,{variant:"h6",component:"strong"},"Space Missions Using Commercial Systems"))),r.a.createElement(G.a,{container:!0,alignItems:"center",justify:"center",spacing:3},r.a.createElement(G.a,{item:!0,md:12},r.a.createElement(w.a,null,r.a.createElement(k.a,null,r.a.createElement(L.a,{position:"static",color:"default",className:O.appBar},r.a.createElement(_.a,{value:i,onChange:function(e,t){l(t)},indicatorColor:"primary",textColor:"primary","aria-label":"Gantt and Data View"},r.a.createElement(F.a,{label:"Gantt View"}),r.a.createElement(F.a,{label:"Data View"}))),r.a.createElement(A.a,{index:i},r.a.createElement(W,{value:i,index:0},r.a.createElement(ue,{axis:j,traces:b})),r.a.createElement(W,{value:i,index:1},r.a.createElement(se,{rows:m,columns:me}))))))))},be=a(3),he=a(742),ge=a(722),Ee=Object(y.a)((function(e){return{root:{textAlignLast:"center"},default:{color:j.a.grey[500],opacity:.9}}})),ye=function(e){var t=e.className,a=e.system,c=e.onChange,o=Object(n.useState)([]),i=Object(E.a)(o,2),l=i[0],s=i[1],u=Ee();Object(n.useEffect)((function(){var e=[],t=new XMLHttpRequest;t.open("GET",Y.b,!0),t.responseType="arraybuffer",t.onload=function(a){var n=new Uint8Array(t.response),r=I.read(n,{type:"array"}),c=r.Sheets[r.SheetNames[1]];I.utils.sheet_to_json(c,{header:1}).forEach((function(t,a){a>0&&!e.includes(t[0])&&e.push(t[0])})),s(e)},t.send()}),[]),Object(n.useEffect)((function(){l.length>0&&c("system",l[0])}),[l]);return r.a.createElement(he.a,{name:"system",value:a,onChange:function(e){var t=e.target,a=t.name,n=t.value;c(a,n)},className:Object(be.a)(u.root,t),defaultValue:"none",fullWidth:!0},r.a.createElement(ge.a,{value:"none",className:u.default,disabled:!0},"Select System"),l.map((function(e){return r.a.createElement(ge.a,{value:e,key:e},e)})))},je=Object(y.a)((function(e){return{root:{textAlignLast:"center"},default:{color:j.a.grey[500],opacity:.9}}})),ve=function(e){var t=e.className,a=e.status,c=e.onUids,o=e.onChange,i=Object(n.useState)([]),l=Object(E.a)(i,2),s=l[0],u=l[1],m=je();Object(n.useEffect)((function(){var e=[],t=[],n=new XMLHttpRequest;n.open("GET",Y.b,!0),n.responseType="arraybuffer",n.onload=function(r){var o=new Uint8Array(n.response),i=I.read(o,{type:"array"}),l=i.Sheets[i.SheetNames[1]];I.utils.sheet_to_json(l,{header:1}).forEach((function(n){n[0]===a.system&&(n[2]&&t.push(n[2]),!e.includes(n[1])&&e.push(n[1]))})),u(e),c(t)},n.send()}),[a.system]),Object(n.useEffect)((function(){s.length>0&&o("band",s[0])}),[s]);return r.a.createElement(he.a,{name:"band",value:a.band,onChange:function(e){var t=e.target,a=t.name,n=t.value;o(a,n)},className:Object(be.a)(m.root,t),defaultValue:"none",fullWidth:!0},r.a.createElement(ge.a,{value:"none",className:m.default,disabled:!0},"Select Frequency Band"),s.map((function(e){return r.a.createElement(ge.a,{value:e,key:e},e)})))},Oe=a(723),we=a(739),Se=function(e,t,a){return{width:Math.abs(e-t)/a*95+"%"}},xe=function(e,t){var a=40/t+"vh";return e.vertical?{writingMode:"vertical-rl",backgroundColor:e.hex,minHeight:a,maxHeight:a,transform:"rotate(-180deg)"}:{backgroundColor:e.hex,minHeight:a,maxHeight:a,textAlign:"center"}},ke=Object(y.a)((function(e){return{root:{position:"relative"},grid:{minHeight:e.spacing(2),"&:before":{content:"attr(data-start)"},"&:after":{content:"attr(data-end)",position:"absolute",right:e.spacing(3),top:0}},block:{display:"flex",flexDirection:"column",textAlign:"center",justifyContent:"center",alignItems:"center",border:"1px solid #000",cursor:"pointer"},scoped:{border:"3px dashed ".concat(j.a.red[700])},service:{fontSize:e.typography.pxToRem(12)},remark:{fontSize:e.typography.pxToRem(10)},announce:{marginTop:e.spacing(1)},box:{width:"100%",minHeight:e.spacing(30),justifyContent:"center",alignItems:"center",display:"flex"},clicked:{boxShadow:e.shadows[15],border:"4px dashed ".concat(j.a.red[700]),zIndex:1e3}}})),Ce=function(e){var t=e.className,a=e.uids,c=e.status,o=e.onChange,i=e.onContent,l=Object(n.useState)([]),s=Object(E.a)(l,2),u=s[0],m=s[1],d=Object(n.useState)([]),f=Object(E.a)(d,2),p=f[0],b=f[1],h=Object(n.useState)(0),g=Object(E.a)(h,2),y=g[0],v=g[1],O=Object(n.useState)(1),w=Object(E.a)(O,2),S=w[0],k=w[1],_=Object(n.useState)(1),F=Object(E.a)(_,2),z=F[0],N=F[1],D=ke();Object(n.useEffect)((function(){var e=new XMLHttpRequest;e.open("GET",Y.a,!0),e.responseType="arraybuffer",e.onload=function(t){var a=new Uint8Array(e.response),n=I.read(a,{type:"array"}),r=I.utils.sheet_to_json(n.Sheets[c.band],{header:1}),o=[],l=[];Object.keys(r).length>2?(r.forEach((function(e,t){t>0&&o.push(B.a.object(r[0],e))})),o.forEach((function(e){var t=o.filter((function(t){return e.master===t.master}));B.a.filter(l,(function(t){return e.master===t.master})).length<1&&e.master&&l.push({master:e.master,start:e.start,end:e.end,data:t,vertical:e.vertical})})),m(l),N(Object.keys(l).length/8),i(l[0].data[0].content)):H()},e.send()}),[c.band]),Object(n.useEffect)((function(){if(Object.keys(u).length>0){var e=u[8*(S-1)],t=S<z?u[8*S-1]:u[8*z-1];if(t&&Object.keys(t).includes("end")){var a=e.start?e.start:0,n=t.end?t.end:0,r=Math.abs(a-n),c=Object.values(u).filter((function(e){return e.master>8*(S-1)&&e.master<=8*S}));v(r),b(c)}}else v(0),b([])}),[S,u,z]);var H=function(){m([]),N(0),k(1),o("scope",null),i("")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{container:!0,alignItems:"center",justify:"center",style:{position:"relative"},className:Object(be.a)(t,D.root)},0===Object.keys(p).length&&r.a.createElement(C.a,{border:1,borderColor:j.a.blue[200],className:D.box,textAlign:"center"},r.a.createElement(x.a,{variant:"body2",color:"textSecondary"},"No Band Data Entered Yet.")),Object.keys(p).length>0&&Object.values(p).map((function(e,t){return r.a.createElement(G.a,{item:!0,key:e.master,className:D.grid,style:Se(e.start,e.end,y),"data-start":e.start,"data-end":7===t?e.end:""},r.a.createElement(G.a,{container:!0,alignItems:"center",justify:"center"},e.data.map((function(n,l){return r.a.createElement(Oe.a,{key:"".concat((s=n.service,s.split(" ").join("_")),"-").concat(t,"-").concat(l),title:n.service,arrow:!0},r.a.createElement(G.a,{item:!0,md:12,onClick:function(){return function(e,t){o("scope",e),i(t)}(n.Item_No,n.content)},style:xe(n,e.data.length),className:Object(be.a)(D.block,a.includes(n.Item_No)&&D.scoped,a.includes(n.Item_No)&&n.Item_No===c.scope&&D.clicked)},n.truncated?r.a.createElement(x.a,{className:D.service},n.truncated):r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{className:D.service},n.service),""!==n.remark&&r.a.createElement(x.a,{className:D.remark},n.remark))));var s}))))}))),r.a.createElement(G.a,{container:!0,alignItems:"center",spacing:3,className:D.announce},r.a.createElement(G.a,{item:!0,md:9},r.a.createElement(x.a,{variant:"body2",component:"p"},"This chart will only work with 1024 x 768. We recommend full screen mode.")),r.a.createElement(G.a,{item:!0,md:3},r.a.createElement(G.a,{container:!0,justify:"flex-end"},r.a.createElement(G.a,{item:!0,md:12},r.a.createElement(we.a,{count:Math.ceil(z),page:S,defaultPage:1,variant:"outlined",shape:"rounded",onChange:function(e,t){k(t)}}))))))},_e=Object(y.a)((function(e){return{root:{}}})),Fe=function(e){var t=e.className,a=e.content,n=_e();return r.a.createElement(G.a,{container:!0,justify:"center",alignItems:"center",className:Object(be.a)(t,n.root)},r.a.createElement(G.a,{item:!0,md:4},r.a.createElement(x.a,{variant:"h6",component:"strong"},"Regulatory Notes")),r.a.createElement(G.a,{item:!0,md:8}),r.a.createElement(G.a,{item:!0,md:12},r.a.createElement(C.a,{borderColor:"primary.main",border:2,borderRadius:5,padding:2},r.a.createElement(x.a,{variant:"body2"},a))))},ze=a(703),Ne=a(724),De=a(725),He=a(727),Te=a(728),qe=a(729),Ge=Object(n.forwardRef)((function(e,t){return r.a.createElement(ze.a,Object.assign({direction:"left",ref:t},e))})),Me=Object(y.a)((function(e){return{root:{},content:{marginBottom:e.spacing(6)}}})),Ae=function(){var e=Object(Ne.a)("(max-width: 1000px)"),t=Me();return r.a.createElement(De.a,{open:e,TransitionComponent:Ge,keepMounted:!0},r.a.createElement(O.a,null),r.a.createElement(He.a,null,"Screen Resolution Alert"),r.a.createElement(Te.a,null,r.a.createElement(qe.a,{className:t.content},"Your screen resolution is under 1024 x 768. We can't confirm your resolution of this Spectrum Chart. Please Check your screen mode again.")))},Ie={system:"none",band:"none",scope:null},Be=Object(y.a)((function(e){return{root:{},content:{backgroundColor:j.a.grey[50]}}})),Le=function(){var e=Object(n.useState)(Ie),t=Object(E.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),i=Object(E.a)(o,2),l=i[0],s=i[1],u=Object(n.useState)(""),m=Object(E.a)(u,2),d=m[0],f=m[1],p=Be(),b=function(e,t){c((function(a){return Object(q.a)(Object(q.a)({},a),{},Object(T.a)({},e,t))}))};return r.a.createElement("div",{className:p.root},r.a.createElement(G.a,{container:!0,alignItems:"center",spacing:3},r.a.createElement(G.a,{item:!0,md:3},r.a.createElement(ye,{system:a.system,onChange:b})),r.a.createElement(G.a,{item:!0,md:3},r.a.createElement(ve,{status:a,onChange:b,onUids:function(e){s(e)}})),r.a.createElement(G.a,{item:!0,md:12},r.a.createElement(Ce,{uids:l,status:a,onChange:b,onContent:function(e){f(e)}})),d&&""!==d&&r.a.createElement(G.a,{item:!0,md:12,className:p.content},r.a.createElement(Fe,{content:d})),r.a.createElement(G.a,{item:!0,md:12},r.a.createElement(le,{status:a})),r.a.createElement(G.a,{item:!0,md:12},r.a.createElement(pe,{scope:a.scope,system:a.system}))),r.a.createElement(Ae,null))},Re=["#808000","#FFFF00","#00FF00","#00FFFF","#FF00FF","#0000FF","#FF0000","#000080","#008080","#008000","#800080","#800000","#808080","#FEC433","#C0C0C0"],Ue=function(e){var t=e.traces,a=e.annots,n=e.startDate,c=e.axis,o=Object(Z.a)();return r.a.createElement(J.a,{data:t,layout:{width:.85*o.width,annotations:a,xaxis:{title:"",titlefont:{size:10,color:"#212529"},tickfont:{size:12},range:[Object(P.a)(n,-1),Object(P.a)(n,7)],dtick:"M12",showgrid:!0,zerolinecolor:"#969696",zerolinewidth:1},yaxis:{title:"Frequency (GHZ)",titlefont:{size:12,color:"#212529"},tickfont:{size:12},range:[c.start,c.stop],dtick:c.step,showgrid:!0,zerolinecolor:"#969696",zerolinewidth:1},legend:{orientation:"h",xanchor:"left",traceorder:"normal",font:{family:"sans-serif",size:12,color:"#000"},bordercolor:"#212529",borderwidth:1,tracegroupgap:100},margin:{l:60,b:80,r:30,t:30,pad:5},showlegend:!0},config:{displayModeBar:!1}})},We=a(6),Ve=a(744),Pe=Object(We.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:"white"},"&:nth-of-type(even)":{backgroundColor:j.a.grey[300]}}}}))(te.a),Ye={page:0,limit:5},Xe=function(e){var t=e.rows,a=e.columns,c=Object(n.useState)([]),o=Object(E.a)(c,2),i=o[0],l=o[1],s=Object(n.useState)(Ye),u=Object(E.a)(s,2),m=u[0],d=u[1];Object(n.useEffect)((function(){var e=t.slice(m.page*m.limit,(m.page+1)*m.limit);l(e)}),[m,t]);return r.a.createElement(K.a,{style:{maxHeight:440}},r.a.createElement(Q.a,{stickyHeader:!0,"aria-label":"sticky table",className:"customized-gantt-chart-table"},r.a.createElement(ee.a,null,r.a.createElement(te.a,null,a.map((function(e){return r.a.createElement(ae.a,{key:e.id,align:"center"},e.name.toUpperCase())})))),r.a.createElement(ne.a,null,i.map((function(e,t){return r.a.createElement(Pe,{hover:!0,key:t},a.map((function(a,n){return r.a.createElement(ae.a,{key:a.id,align:"center"},function(e,t,a,n){if(0===a)return n+1;switch(e){case"SFreq_GHz":case"EFreq_GHz":return t[e].toFixed(7);case"SDate":case"EDate":return Object(P.a)(t[e],0,"table");default:return t[e]}}(a.id,e,n,t))})))})))),r.a.createElement(Ve.a,{rowsPerPageOptions:[5,10,25],component:"div",count:t.length,rowsPerPage:m.limit,page:m.page,onPageChange:function(e,t){return d((function(e){return Object(q.a)(Object(q.a)({},e),{},{page:t})}))},onChangeRowsPerPage:function(e){d((function(t){return Object(q.a)(Object(q.a)({},t),{},{limit:parseInt(e.target.value,10),page:0})}))}}))},Je=[{id:"no",name:"no"},{id:"System",name:"system"},{id:"Link_Type",name:"link type"},{id:"SFreq_GHz",name:"min freq (ghz)"},{id:"EFreq_GHz",name:"max freq (ghz)"},{id:"SDate",name:"start date"},{id:"EDate",name:"end date"}],Ze={start:0,stop:0,step:0},$e=Object(y.a)((function(e){return{root:{},appBar:{boxShadow:e.shadows[1]},title:{marginBottom:e.spacing(2)}}})),Ke=function(e){var t=e.status,a=Object(n.useState)([]),c=Object(E.a)(a,2),o=c[0],i=c[1],l=Object(n.useState)([]),s=Object(E.a)(l,2),u=s[0],m=s[1],d=Object(n.useState)(0),f=Object(E.a)(d,2),p=f[0],b=f[1],h=Object(n.useState)(Ze),g=Object(E.a)(h,2),y=g[0],j=g[1],v=Object(n.useState)([]),O=Object(E.a)(v,2),S=O[0],C=O[1],_=Object(n.useState)([]),F=Object(E.a)(_,2),z=F[0],N=F[1],D=$e();return Object(n.useEffect)((function(){if("none"!==t.band){var e={},a=new XMLHttpRequest;a.open("GET",Y.c,!0),a.responseType="arraybuffer",a.onload=function(n){var r=new Uint8Array(a.response),c=I.read(r,{type:"array"});c.SheetNames.forEach((function(t){var a=[],n=I.utils.sheet_to_json(c.Sheets[t],{header:1});e[t]=[],n.forEach((function(e,t){t>0&&a.push(B.a.object(n[0],e))})),e[t]=a})),e[Object.keys(e)[0]].forEach((function(a){a.data=e[t.band]})),i(e[Object.keys(e)[0]])},a.send()}}),[t.band]),Object(n.useEffect)((function(){var e=0,a=0,n=0,r=0,c=[],i=[],l=[];o.forEach((function(o){if(o.Chart_Type===t.band)if(l="all"===t.link?o.data:o.data.filter((function(e){return e.Link_Type===t.link})),e=o.X_Axis_Start,n=o.Y_Axis_Step_Size,a=o.Y_Axis_Start,r=o.Y_Axis_Stop,l.length>0)e=l[0].SDate,l.forEach((function(t,a){var r=new Date(t.SDate),o=new Date(e),s=t.SFreq_GHz+Math.abs(t.SFreq_GHz-t.EFreq_GHz)/2;r<o&&(e=t.SDate),l.forEach((function(e,n){n<a&&e.System===t.System&&(a=n)}));var u={name:t.Id+". "+t.System,x:[Object(P.a)(t.SDate,0),Object(P.a)(t.EDate,0)],y:[s,s],showlegend:!0,mode:"lines",line:{width:Math.abs(t.SFreq_GHz-t.EFreq_GHz)/(10*n)*340,color:Re[a%Re.length]}},m={x:Object(P.b)(t.SDate,t.EDate),y:s,text:t.Id,showarrow:!1,font:{color:"black",size:14}};i.push(m),c.push(u)}));else{var s={name:"",x:[e,e+10],y:[a,a],mode:"lines",line:{width:Math.abs(a-r)/(10*n)*340,color:"transparent"},showlegend:!1,marker:{size:12,shape:["line-ew","diamond-open","line-ew","line-ew","diamond-open","line-ew"]}};c.push(s)}})),l.length>1||l.every((function(e){return Object.keys(e).every((function(t){return Boolean(e[t])}))}))?(N(l),m(c),C(i)):(N([]),m([]),C([])),b(e),j({start:a,stop:r,step:n})}),[t.link,o]),r.a.createElement(G.a,{container:!0,alignItems:"center",justify:"center",spacing:3},r.a.createElement(G.a,{item:!0,md:12,className:D.title},r.a.createElement(x.a,{variant:"h6",component:"strong"},"Frequency-Bandwidth-Time (FBT) View")),r.a.createElement(G.a,{item:!0,md:12},r.a.createElement(w.a,null,r.a.createElement(k.a,null,r.a.createElement(Ue,{traces:u,startDate:p,axis:y,annots:S})))),r.a.createElement(G.a,{item:!0,md:12,className:D.title},r.a.createElement(x.a,{variant:"h6",component:"strong"},"Data View")),r.a.createElement(G.a,{item:!0,md:12},r.a.createElement(w.a,null,r.a.createElement(k.a,null,r.a.createElement(Xe,{rows:z,columns:Je})))))},Qe=Object(y.a)((function(e){return{root:{textAlignLast:"center"},default:{color:j.a.grey[500],opacity:.9}}})),et=function(e){var t=e.className,a=e.status,c=e.onChange,o=Object(n.useState)([]),i=Object(E.a)(o,2),l=i[0],s=i[1],u=Qe();Object(n.useEffect)((function(){var e=[],t=new XMLHttpRequest;t.open("GET",Y.c,!0),t.responseType="arraybuffer",t.onload=function(n){var r=new Uint8Array(t.response),c=I.read(r,{type:"array"}).Sheets[a.band];I.utils.sheet_to_json(c,{header:1}).forEach((function(t,a){a>0&&!e.includes(t[2])&&e.push(t[2])})),s(e)},t.send()}),[a.band]),Object(n.useEffect)((function(){l.length>0&&c("link",l[0])}),[l]);return r.a.createElement(he.a,{name:"link",value:a.link,onChange:function(e){var t=e.target,a=t.name,n=t.value;c(a,n)},className:Object(be.a)(u.root,t),defaultValue:"none",fullWidth:!0},r.a.createElement(ge.a,{value:"none",className:u.default,disabled:!0},"Select Link Type"),r.a.createElement(ge.a,{value:"all"},"All"),l.map((function(e){return r.a.createElement(ge.a,{value:e,key:e},e)})))},tt=Object(y.a)((function(e){return{root:{textAlignLast:"center"},default:{color:j.a.grey[500],opacity:.9}}})),at=function(e){var t=e.className,a=e.status,c=e.onChange,o=Object(n.useState)([]),i=Object(E.a)(o,2),l=i[0],s=i[1],u=tt();Object(n.useEffect)((function(){var e=new XMLHttpRequest;e.open("GET",Y.c,!0),e.responseType="arraybuffer",e.onload=function(t){var a=new Uint8Array(e.response),n=I.read(a,{type:"array"});n.SheetNames.shift(),s(n.SheetNames)},e.send()}),[]),Object(n.useEffect)((function(){l.length>0&&c("band",l[0])}),[l]);return r.a.createElement(he.a,{name:"band",value:a.band,onChange:function(e){var t=e.target,a=t.name,n=t.value;c(a,n)},className:Object(be.a)(u.root,t),defaultValue:"none",fullWidth:!0},r.a.createElement(ge.a,{value:"none",className:u.default,disabled:!0},"Select Frequency Band"),l.map((function(e){return r.a.createElement(ge.a,{value:e,key:e},e)})))},nt=Object(n.forwardRef)((function(e,t){return r.a.createElement(ze.a,Object.assign({direction:"left",ref:t},e))})),rt=Object(y.a)((function(e){return{root:{},content:{marginBottom:e.spacing(6)}}})),ct=function(){var e=Object(Ne.a)("(max-width: 1000px)"),t=rt();return r.a.createElement(De.a,{open:e,TransitionComponent:nt,keepMounted:!0},r.a.createElement(O.a,null),r.a.createElement(He.a,null,"Screen Resolution Alert"),r.a.createElement(Te.a,null,r.a.createElement(qe.a,{className:t.content},"Your screen resolution is under 1024 x 768. We can't confirm your resolution of this Spectrum Chart. Please Check your screen mode again.")))},ot={band:"none",link:"none"},it=Object(y.a)((function(e){return{root:{},content:{backgroundColor:j.a.grey[50]}}})),lt=function(){var e=it(),t=Object(n.useState)(ot),a=Object(E.a)(t,2),c=a[0],o=a[1],i=function(e,t){o((function(a){return Object(q.a)(Object(q.a)({},a),{},Object(T.a)({},e,t))}))};return r.a.createElement("div",{className:e.root},r.a.createElement(G.a,{container:!0,alignItems:"center",spacing:3},r.a.createElement(G.a,{item:!0,md:3},r.a.createElement(at,{status:c,onChange:i})),r.a.createElement(G.a,{item:!0,md:3},r.a.createElement(et,{status:c,onChange:i})),r.a.createElement(G.a,{item:!0,md:12},r.a.createElement(Ke,{status:c}))),r.a.createElement(ct,null))},st=[{value:"commercial",label:"Commercial"},{value:"lunar",label:"Lunar"}],ut=Object(y.a)((function(e){return{root:{margin:e.spacing(5)},card:{paddingTop:0,paddingLeft:0,paddingRight:0,backgroundColor:j.a.grey[100],boxShadow:e.shadows[10]},header:{color:j.a.grey[50],backgroundColor:j.a.blue[700]},cardContent:{paddingTop:e.spacing(3),padding:e.spacing(6)},content:{backgroundColor:j.a.grey[50]},footer:{padding:e.spacing(3),backgroundColor:j.a.grey[300]}}})),mt=function(){var e=ut(),t=Object(n.useState)("lunar"),a=Object(E.a)(t,2),c=a[0],o=a[1];return r.a.createElement("div",{className:e.root},r.a.createElement(v.a,{component:"main",maxWidth:"xl"},r.a.createElement(O.a,null),r.a.createElement(w.a,{className:e.card},r.a.createElement(S.a,{className:e.header,title:r.a.createElement(x.a,{component:"header",variant:"h5"},"commercial"===c?"Commercial Operational Spectrum Snapshot":"Spectrum Viewer")}),r.a.createElement(k.a,{className:e.cardContent},r.a.createElement(C.a,null,r.a.createElement(_.a,{indicatorColor:"primary",textColor:"primary",onChange:function(e,t){o(t)},value:c},st.map((function(e){return r.a.createElement(F.a,{key:e.value,label:e.label,value:e.value})})))),r.a.createElement(C.a,{py:3},"lunar"===c&&r.a.createElement(lt,null),"commercial"===c&&r.a.createElement(Le,null))),r.a.createElement(z.a,{className:e.footer},r.a.createElement(H.a,{color:"primary"}),r.a.createElement(x.a,{component:"footer",variant:"body2"},"For more information of spectrum licensing requirements for using a commercial system, go to"," ",r.a.createElement(N.a,{href:"http://spectrum.gov",target:"_blank"},"http://spectrum.gov"))))))},dt=a(242),ft=a.n(dt),pt=a(736),bt=Object(y.a)((function(e){return{root:{alignItems:"center",backgroundColor:e.palette.background.default,display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",minHeight:"100%",padding:e.spacing(3)}}})),ht=function(){var e=bt();return Object(n.useEffect)((function(){return ft.a.start(),function(){ft.a.done()}}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(C.a,{width:400},r.a.createElement(pt.a,null)))},gt=[{exact:!0,path:"/404",component:Object(n.lazy)((function(){return a.e(4).then(a.bind(null,746))}))},{exact:!0,path:"/maintenance",component:Object(n.lazy)((function(){return a.e(5).then(a.bind(null,747))}))},{exact:!0,path:"/dark-lunar",component:Object(n.lazy)((function(){return a.e(3).then(a.bind(null,748))}))},{exact:!0,path:"/",component:mt},{path:"*",routes:[{component:function(){return r.a.createElement(g.a,{to:"/404"})}}]}],Et=Object(f.b)({plugins:Object(m.a)(Object(b.a)().plugins)}),yt=function(){return r.a.createElement(h.b,{jss:Et},r.a.createElement(p.a,{dense:!0,maxSnack:3},r.a.createElement(d.a,null,function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return r.a.createElement(n.Suspense,{fallback:r.a.createElement(ht,null)},r.a.createElement(g.d,null,t.map((function(t,a){var c=t.component;return r.a.createElement(g.b,{key:a,path:t.path,exact:t.exact,render:function(a){return r.a.createElement(n.Fragment,null,t.routes?e(t.routes):r.a.createElement(c,a))}})}))))}(gt))))};Object(l.a)(),o.a.render(r.a.createElement(i.a,null,r.a.createElement(yt,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");s?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):u(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):u(t,e)}))}}()}},[[437,1,2]]]);
//# sourceMappingURL=main.2c6dfc00.chunk.js.map