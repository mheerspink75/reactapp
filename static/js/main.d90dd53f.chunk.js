(window.webpackJsonpreactapp=window.webpackJsonpreactapp||[]).push([[0],{54:function(e,t,a){},57:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},79:function(e,t,a){e.exports=a(89)},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(31),o=a(8),m=a(3),s=a(59),u=a(16),p=a(151),d=a(146),f=a(147),h=a(148),E=a(131),b=a(37),v=a(149),g=a(139),y=a(63),O=a.n(y),j=a(64),C=a.n(j),w=a(65),S=a.n(w),k=a(133),x=a(138),N=a(136),P=a(67),A=a.n(P),D=a(66),B=a.n(D),T=a(68),W=a.n(T),L=a(57),G=a.n(L),H=a(19),V=a(134),q=a(135),I=a(137),J=a(150),F=a(140),R=a(69),Y=a(130),K=a(61),M=a.n(K),U=a(62),$=a.n(U),z=Object(s.a)({greenAvatar:{margin:10,color:"#fff",backgroundColor:Y.a[500]}});function Q(e){var t=e.todo,a=e.index,n=e.completeTodo,l=e.deleteTodo,c=z();return r.a.createElement(E.a,null,r.a.createElement(k.a,{button:!0,onClick:function(){return n(a)}},r.a.createElement(V.a,null,r.a.createElement(q.a,{className:c.greenAvatar},r.a.createElement(M.a,null))),r.a.createElement(N.a,{primary:t.text,style:{textDecoration:t.isCompleted?"line-through":"none"}}),r.a.createElement(I.a,null,r.a.createElement(x.a,null,r.a.createElement(g.a,{edge:"end","aria-label":"delete",onClick:function(){return l(a)}},r.a.createElement($.a,null))))))}function X(e){var t=e.addTodo,a=Object(n.useState)(""),l=Object(i.a)(a,2),c=l[0],o=l[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c&&(t(c),o(""))}},r.a.createElement(J.a,{id:"standard-bare",margin:"normal",value:c,placeholder:"Add Todo...",onChange:function(e){return o(e.target.value)}}))}function Z(){var e=Object(n.useState)([{text:"Practice JavaScript",isCompleted:!1},{text:"Update Resume",isCompleted:!1},{text:"Go Kyaking",isCompleted:!1}]),t=Object(i.a)(e,2),a=t[0],l=t[1],c=function(e){var t=Object(H.a)(a);t[e].isCompleted=!0,l(t)},o=function(e){var t=Object(H.a)(a);t.splice(e,1),l(t)};return r.a.createElement(F.a,{maxWidth:"md"},r.a.createElement(X,{addTodo:function(e){var t=[{text:e}].concat(Object(H.a)(a));l(t)}}),r.a.createElement(R.a,null,a.map((function(e,t){return r.a.createElement(Q,{key:t,index:t,todo:e,completeTodo:c,deleteTodo:o})}))))}var _=a(141),ee=a(142),te=a(145),ae=a(144),ne=a(143),re=a(17),le=a(13),ce=a(21),ie=a(22),oe=a(23),me=function(e){function t(){var e,a;Object(re.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(ce.a)(this,(e=Object(ie.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a}return Object(oe.a)(t,e),Object(le.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(E.a,null,r.a.createElement(N.a,{primary:"Please enter your contact information and continue to leave a\r comment....."}),r.a.createElement(k.a,null,r.a.createElement(J.a,{required:!0,margin:"dense",id:"name",label:"First Name",type:"first name",fullWidth:!0,onChange:a("firstName"),defaultValue:t.firstName})),r.a.createElement(k.a,null,r.a.createElement(J.a,{required:!0,margin:"dense",id:"name",label:"Last Name",type:"last name",fullWidth:!0,onChange:a("lastName"),defaultValue:t.lastName})),r.a.createElement(k.a,null,r.a.createElement(J.a,{required:!0,margin:"dense",id:"name",label:"Email Address",type:"email",fullWidth:!0,onChange:a("email"),defaultValue:t.email})),r.a.createElement(_.a,{color:"primary",label:"Continue",onClick:this.continue},"Continue"))}}]),t}(n.Component),se=function(e){function t(){var e,a;Object(re.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(ce.a)(this,(e=Object(ie.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(oe.a)(t,e),Object(le.a)(t,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(E.a,null,r.a.createElement(N.a,{primary:"Please enter a comment and continue to verify your information..."}),r.a.createElement(k.a,null,r.a.createElement(J.a,{multiline:!0,fullWidth:!0,id:"outlined-multiline-flexible",label:"Enter a comment",rowsMax:"4",margin:"normal",variant:"outlined",onChange:a("comment"),defaultValue:t.comment})),r.a.createElement(_.a,{label:"Continue",color:"primary",onClick:this.continue},"Continue"),r.a.createElement(_.a,{label:"Back",color:"primary",onClick:this.back},"Back"))}}]),t}(n.Component),ue=function(e){function t(){var e,a;Object(re.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(ce.a)(this,(e=Object(ie.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(oe.a)(t,e),Object(le.a)(t,[{key:"render",value:function(){var e=this.props.values,t=e.firstName,a=e.lastName,n=e.email,l=e.comment;return r.a.createElement(E.a,null,r.a.createElement(N.a,{primary:"Please verify your contact info before clicking continue..."}),r.a.createElement("hr",null),r.a.createElement(N.a,{secondary:"Name:  "}),r.a.createElement(N.a,{primary:t+" "+a}),r.a.createElement(N.a,{secondary:"Email:  "}),r.a.createElement(N.a,{primary:n}),r.a.createElement(N.a,{secondary:"Comment:  "}),r.a.createElement(N.a,{primary:l}),r.a.createElement("hr",null),r.a.createElement(_.a,{label:"Confirm",color:"primary",onClick:this.continue},"Confirm"),r.a.createElement(_.a,{label:"Back",color:"primary",onClick:this.back},"Back"))}}]),t}(n.Component),pe=function(e){function t(){var e,a;Object(re.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(ce.a)(this,(e=Object(ie.a)(t)).call.apply(e,[this].concat(r)))).continue=function(e){e.preventDefault(),a.props.nextStep()},a.back=function(e){e.preventDefault(),a.props.prevStep()},a}return Object(oe.a)(t,e),Object(le.a)(t,[{key:"render",value:function(){var e=this.props.values,t=e.firstName,a=e.lastName,n=e.email;return r.a.createElement("div",null,r.a.createElement(b.a,{variant:"h5",align:"center"},"Thank You, ",t+" "+a," For Your Submission!"),r.a.createElement("br",null),r.a.createElement(b.a,{align:"center"},"A confirmation email will be sent to ",n))}}]),t}(n.Component),de=function(e){function t(){var e,a;Object(re.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(ce.a)(this,(e=Object(ie.a)(t)).call.apply(e,[this].concat(r)))).state={step:1,firstName:"",lastName:"",email:"",comment:""},a.nextStep=function(){var e=a.state.step;a.setState({step:e+1})},a.prevStep=function(){var e=a.state.step;a.setState({step:e-1})},a.handleChange=function(e){return function(t){a.setState(Object(o.a)({},e,t.target.value))}},a}return Object(oe.a)(t,e),Object(le.a)(t,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,email:t.email,comment:t.comment};switch(e){case 1:return r.a.createElement(me,{nextStep:this.nextStep,handleChange:this.handleChange,values:a});case 2:return r.a.createElement(se,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:a});case 3:return r.a.createElement(ue,{nextStep:this.nextStep,prevStep:this.prevStep,values:a});case 4:return r.a.createElement(pe,{values:a})}}}]),t}(n.Component);function fe(){var e=r.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1];function l(){n(!1)}return r.a.createElement("div",null,r.a.createElement(_.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)}},"Contact"),r.a.createElement(ee.a,{open:a,onClose:l,"aria-labelledby":"form-dialog-title"},r.a.createElement(ne.a,{id:"form-dialog-title"},"Contact Information"),r.a.createElement(ae.a,null,r.a.createElement(de,null)),r.a.createElement(te.a,null,r.a.createElement(_.a,{onClick:l,color:"primary"},"Close"))))}a(54);function he(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?he(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):he(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var be=Object(s.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(320,"px)"),marginLeft:320,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:320,flexShrink:0},drawerPaper:{width:320},drawerHeader:Ee({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-320},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function ve(){var e=be(),t=Object(u.a)(),a=r.a.useState(!1),n=Object(i.a)(a,2),l=n[0],c=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(d.a,null),r.a.createElement(f.a,{position:"fixed",className:Object(m.a)(e.appBar,Object(o.a)({},e.appBarShift,l))},r.a.createElement(h.a,null,r.a.createElement(g.a,{color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},edge:"start",className:Object(m.a)(e.menuButton,l&&e.hide)},r.a.createElement(O.a,null)),r.a.createElement(b.a,{variant:"h6",noWrap:!0},"Todo List App"))),r.a.createElement(p.a,{className:e.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(g.a,{onClick:function(){c(!1)}},"ltr"===t.direction?r.a.createElement(C.a,null):r.a.createElement(S.a,null))),r.a.createElement(v.a,null),r.a.createElement(E.a,null,r.a.createElement(k.a,{button:!0,component:"a",href:"https://github.com/mheerspink75/reactapp",target:"blank"},r.a.createElement(x.a,null,r.a.createElement(B.a,null)),r.a.createElement(N.a,{primary:"GitHub"})),r.a.createElement(k.a,{button:!0,component:"a",href:"https://codesandbox.io/s/react-todo-list-use-state-bewkb",target:"blank"},r.a.createElement(x.a,null,r.a.createElement(A.a,null)),r.a.createElement(N.a,{primary:"Code Sandbox"})),r.a.createElement(k.a,{button:!0,component:"a",href:"https://sites.google.com/view/reference-page/procject-3",target:"blank"},r.a.createElement(x.a,null,r.a.createElement(W.a,null)),r.a.createElement(N.a,{primary:"Google Sites"})),r.a.createElement(v.a,null),r.a.createElement(k.a,null,r.a.createElement("img",{src:G.a,className:"App-logo",alt:"logo"})),r.a.createElement(v.a,null),r.a.createElement(k.a,null,r.a.createElement(fe,null)))),r.a.createElement("main",{className:Object(m.a)(e.content,Object(o.a)({},e.contentShift,l))},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement(Z,null)))}var ge=document.getElementById("root");c.a.render(r.a.createElement((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ve,null))}),null),ge),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[79,1,2]]]);
//# sourceMappingURL=main.d90dd53f.chunk.js.map