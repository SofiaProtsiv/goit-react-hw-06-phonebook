(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={container:"container_container__3TiUU",iphone:"container_iphone__2tmlZ",frontcam:"container_frontcam__2w2sg",speaker:"container_speaker__2bDU_",screen:"container_screen__2rBEM",screenContent:"container_screenContent__2JSla",homeBtn:"container_homeBtn__1s4qO"}},11:function(e,t,n){e.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}},12:function(e,t,n){e.exports={list:"ContactList_list__1nxx6",item:"ContactList_item__2lYJ9",name:"ContactList_name__1YiE7",number:"ContactList_number__3O-e3",button:"ContactList_button__U7OoR",notification:"ContactList_notification__d9G6v"}},28:function(e,t,n){e.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},29:function(e,t,n){e.exports={modalBackdrop:"modal_modalBackdrop__3HRtd",modalContent:"modal_modalContent__25Yre"}},39:function(e,t,n){e.exports={title:"section_title__13VQQ"}},41:function(e,t,n){e.exports={iconButton:"iconButton_iconButton__2DDFu"}},64:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a,c,r,o,i=n(0),l=n.n(i),s=n(13),u=n.n(s),d=n(43),b=n(5),j=n(32),m=n(22),f=n(8),p=n(14),h=n(4),O=n(33),v=n.n(O),_=Object(f.b)("contacts/delete"),x=Object(f.b)("contacts/changeFilter"),g=Object(f.b)("contacts/add",(function(e,t){return{payload:{id:v()(),name:e,number:t}}})),y=Object(f.c)(null!==(a=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==a?a:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(c={},Object(p.a)(c,g,(function(e,t){var n=t.payload;return[].concat(Object(m.a)(e),[n])})),Object(p.a)(c,_,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),c)),C=Object(f.c)("",Object(p.a)({},x,(function(e,t){return t.payload}))),w=Object(h.b)({contacts:y,filter:C}),N=n(34),k=n.n(N),B=n(9),E=n(35),L=n.n(E),S=[].concat(Object(m.a)(Object(f.d)({serializableCheck:{ignoredActions:[B.a,B.f,B.b,B.c,B.d,B.e]}})),[k.a]),F={key:"contacts",storage:L.a,blacklist:["filter"]},A=Object(f.a)({reducer:Object(B.g)(F,w),middleware:S,devTools:!1}),M=Object(B.h)(A),P=n(18),D=["title","titleId"];function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},z.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function J(e,t){var n=e.title,a=e.titleId,c=I(e,D);return i.createElement("svg",z({className:"svg-icon",style:{verticalAlign:"middle",fill:"currentColor",overflow:"hidden"},viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?i.createElement("title",{id:a},n):null,r||(r=i.createElement("path",{d:"M400.23552 3.4816a230.912 230.912 0 0 1 54.74304 6.6048 269.79328 269.79328 0 0 1 51.22048 17.75104 231.84384 231.84384 0 0 1 42.61888 25.37472 154.0096 154.0096 0 0 1 28.93824 28.42624 223.90784 223.90784 0 0 1 36.36224 71.51616 522.86976 522.86976 0 0 1 16.03584 74.56768 635.32544 635.32544 0 0 1 5.07904 82.11456 38.7072 38.7072 0 0 1 10.56256 13.17376 77.66016 77.66016 0 0 1 5.8624 18.26304c1.68448 9.03168 1.95072 18.26304 0.78336 27.37664a111.90272 111.90272 0 0 1-8.21248 33.97632 70.68672 70.68672 0 0 1-14.07488 19.7888 46.03392 46.03392 0 0 1-17.98656 11.14624 1026.44736 1026.44736 0 0 1-9.37984 32.45568c-3.52256 8.79616-7.04512 17.39776-10.95168 25.8816a70.4256 70.4256 0 0 1-14.08 19.7888 970.0352 970.0352 0 0 0-29.71136 25.88672 63.01696 63.01696 0 0 0-15.25248 36.01408c-1.82784 10.19904-1.92512 25.51808-1.40288 35.87072-8.73984 15.98464-13.57824 28.1856-18.19136 40.00768-7.36768 23.20384-10.14784 31.57504-12.9536 48.14848-2.88256 15.90784-3.58912 28.30336-3.968 33.90464-1.62816 21.60128 0.93696 45.69088 2.63168 59.40224 2.9184 19.52768 8.25344 37.90336 11.32032 47.80544a429.66016 429.66016 0 0 0 9.40032 24.63744c5.248 11.37152 7.65952 16.68096 15.50336 30.63808a599.8592 599.8592 0 0 0 9.95328 15.68256c7.25504 10.76736 13.11744 18.19648 16.81408 22.4512 11.95008 14.26432 19.7632 21.57056 19.7632 21.57056 8.66304 8.20224 17.38752 16.45568 30.34624 26.1376 5.29408 3.78368 10.94656 7.70048 10.94656 7.70048a434.82112 434.82112 0 0 0 18.01216 11.18208c1.78688 1.00864 1.78688 1.00864 3.54816 2.048-26.81344 4.16256-72.62208 9.0368-99.98848 11.4176a2471.8848 2471.8848 0 0 1-78.98624 5.59616c-25.02656 1.36704-46.91968 2.03264-65.30048 2.03264s-39.8848-0.6656-64.51712-2.03264c-24.63744-1.37216-49.664-3.21024-75.85792-5.59616a2881.6896 2881.6896 0 0 1-77.81376-8.13568c-25.80992-3.05152-49.26976-6.25664-70.37952-9.61536-21.11488-3.36384-38.71232-6.76352-53.57056-10.1632a70.56384 70.56384 0 0 1-27.37664-10.1632 89.30304 89.30304 0 0 1-14.85824-49.69984 402.64704 402.64704 0 0 1 4.3008-107.5712 85.4784 85.4784 0 0 1 28.15488-57.32352 183.36256 183.36256 0 0 1 54.35392-31.27808 706.6624 706.6624 0 0 1 64.51712-20.80256 199.86432 199.86432 0 0 0 59.04384-26.3936 139.49952 139.49952 0 0 0 30.49984-25.37984 83.16416 83.16416 0 0 0 15.24736-24.36096 62.94016 62.94016 0 0 0 5.08416-25.37984c0-8.78592-0.39424-18.60096-1.1776-29.44512a56.86272 56.86272 0 0 0-15.25248-37.03296 526.3616 526.3616 0 0 0-29.71136-27.91936 62.54592 62.54592 0 0 1-13.29664-19.7888 1870.37184 1870.37184 0 0 1-10.55744-25.8816 999.89504 999.89504 0 0 1-9.37984-32.45568 42.4704 42.4704 0 0 1-13.29152-7.1168 79.34464 79.34464 0 0 1-12.51328-14.19264 84.8896 84.8896 0 0 1-11.3408-26.3936 71.15776 71.15776 0 0 1-4.3008-31.27808c0.66048-8.30464 2.37056-16.49152 5.08416-24.36608a67.41504 67.41504 0 0 1 12.51328-21.30944 509.34784 509.34784 0 0 1 3.90656-77.1072 474.47552 474.47552 0 0 1 13.69088-69.99552 218.40896 218.40896 0 0 1 30.1056-66.97984 187.74016 187.74016 0 0 1 40.66816-46.1824 202.9568 202.9568 0 0 1 45.7472-27.91936 190.01856 190.01856 0 0 1 46.91968-13.68576 301.07136 301.07136 0 0 1 45.3632-3.5584V3.4816z m0 0",fill:""})),o||(o=i.createElement("path",{d:"M1013.76 748.37504c0 126.7712-102.77376 229.54496-229.54496 229.54496s-229.54496-102.77376-229.54496-229.54496 102.77376-229.54496 229.54496-229.54496S1013.76 621.59872 1013.76 748.37504z m-264.12032-116.4544c-0.09216 1.51552 0 82.06336 0 82.06336h-83.51232c-36.89984 2.176-36.21888 34.39104-36.21888 34.39104s0 32.42496 36.21888 34.39104h83.51232v82.06336c2.57536 36.72064 34.39104 36.21888 34.39104 36.21888s32.60928 0 34.39104-36.21888v-82.06336h80.6144c36.21888-2.06848 36.21888-34.39104 36.21888-34.39104s0-32.10752-36.21888-34.39104h-80.6144v-82.06336c-1.94048-36.21888-34.39104-36.21888-34.39104-36.21888s-32.24576-0.00512-34.39104 36.21888z",fill:""})))}var R,Z=i.forwardRef(J),q=(n.p,["title","titleId"]);function K(){return K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},K.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function U(e,t){var n=e.title,a=e.titleId,c=T(e,q);return i.createElement("svg",K({className:"svg-icon",style:{verticalAlign:"middle",fill:"currentColor",overflow:"hidden"},viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},c),n?i.createElement("title",{id:a},n):null,R||(R=i.createElement("path",{d:"M948.6 131.1l-67.2-67.2-380.6 380.7L142.6 86.3l-67.2 67.2 358.2 361.3L75.4 873l67.2 67.2 358.2-361.3 380.6 380.7 67.2-67.2L568 511.8z"})))}var Y=i.forwardRef(U),V=(n.p,n(23)),H=n.n(V),Q=n(11),G=n.n(Q),W=n(1);function $(e){var t=e.toggleModal,n=Object(i.useState)(""),a=Object(P.a)(n,2),c=a[0],r=a[1],o=Object(i.useState)(""),l=Object(P.a)(o,2),s=l[0],u=l[1],d=Object(b.d)((function(e){return e})).contacts,j=Object(b.c)(),m=function(e){e.preventDefault(),d.find((function(e){return e.name.toLowerCase()===c.toLowerCase()}))?H.a.Notify.failure("".concat(c," is already in contacts.")):d.find((function(e){return e.number===s}))?H.a.Notify.failure("".concat(s," is already in contacts.")):""===c.trim()||""===s.trim()?H.a.Notify.failure("Enter the contact's name and number phone!"):function(e,t){j(g(e,t))}(c,s),r(""),u(""),t()};return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)("form",{className:G.a.form,onSubmit:function(e){return m(e)},children:[Object(W.jsxs)("label",{className:G.a.label,children:["Name",Object(W.jsx)("input",{className:G.a.input,type:"text",name:"name",onChange:function(e){return r(e.target.value)},value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Sofia Protsiv",required:!0})]}),Object(W.jsxs)("label",{className:G.a.label,children:["Number",Object(W.jsx)("input",{className:G.a.input,type:"tel",name:"number",onChange:function(e){return u(e.target.value)},value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"number number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"111-11-11",required:!0})]}),Object(W.jsx)("button",{className:G.a.button,type:"submit",children:"Add contact"})]})})}var X=n(28),ee=n.n(X);function te(){var e=Object(b.d)((function(e){return e.filter})),t=Object(b.c)();return Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)("label",{className:ee.a.label,children:["Find contacts by name \ud83d\udd0e",Object(W.jsx)("input",{className:ee.a.input,type:"text",value:e,onChange:function(e){return t(x(e.target.value))}})]})})}var ne=n(12),ae=n.n(ne);function ce(){var e=Object(b.d)((function(e){return e})),t=e.contacts,n=e.filter,a=Object(b.c)(),c=function(e,t){return Array.from(e).filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(t,n);return console.log("filterContacts",c.length),Object(W.jsx)(W.Fragment,{children:Object(W.jsx)("ul",{className:ae.a.list,children:c.length>0?c.map((function(e){var t=e.id,n=e.name,c=e.number;return Object(W.jsxs)("li",{className:ae.a.item,children:[Object(W.jsxs)("p",{className:ae.a.name,children:[n,": ",Object(W.jsx)("span",{className:ae.a.number,children:c})]}),Object(W.jsx)("button",{className:ae.a.button,type:"button",onClick:function(e){return function(e){return a(_(e))}(t)},children:"Delete"})]},t)})):Object(W.jsx)("p",{className:ae.a.notification,children:"No matches found."})})})}var re=n(10),oe=n.n(re);var ie=function(e){var t=e.children;return Object(W.jsx)("div",{className:oe.a.container,children:Object(W.jsxs)("div",{className:oe.a.iphone,children:[Object(W.jsx)("div",{className:oe.a.frontcam}),Object(W.jsx)("div",{className:oe.a.speaker}),Object(W.jsx)("div",{className:oe.a.screen,children:Object(W.jsx)("div",{className:oe.a.screenContent,children:t})}),Object(W.jsx)("div",{className:oe.a.homeBtn})]})})},le=n(36),se=n(37),ue=n(38),de=n(44),be=n(27),je=n(29),me=n.n(je),fe=document.querySelector("#modal-root"),pe=function(e){Object(ue.a)(n,e);var t=Object(de.a)(n);function n(){var e;Object(le.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(se.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(s.createPortal)(Object(W.jsx)("div",{className:me.a.modalBackdrop,onClick:this.handleBackdropClick,children:Object(W.jsx)("div",{className:me.a.modalContent,children:this.props.children})}),fe)}}]),n}(be.PureComponent),he=pe,Oe=n(39),ve=n.n(Oe),_e=function(e){var t=e.title,n=e.children;return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("h2",{className:ve.a.title,children:t}),n]})},xe=n(15),ge=n(40),ye=n(7),Ce=n.n(ye),we=n(41),Ne=n.n(we),ke=["children","onClick"],Be=function(e){var t=e.children,n=e.onClick,a=Object(ge.a)(e,ke);return Object(W.jsx)("button",Object(xe.a)(Object(xe.a)({type:"button",className:Ne.a.iconButton,onClick:n},a),{},{children:t}))};Be.defaultProps={onClick:function(){return null},children:null},Be.protoTypes={onClick:Ce.a.func,children:Ce.a.node,"aria-label":Ce.a.string.isRequired};var Ee=Be;var Le=Object(b.b)((function(e){return{contacts:e.contacts}}))((function(e){var t=e.contacts,n=Object(i.useState)(!1),a=Object(P.a)(n,2),c=a[0],r=a[1],o=function(){r((function(e){return!e}))};return console.log("contacts",t),Object(W.jsxs)(ie,{children:[c&&Object(W.jsxs)(he,{onClose:o,children:[Object(W.jsx)($,{toggleModal:o}),Object(W.jsx)(Ee,{onClick:o,children:Object(W.jsx)(Y,{className:"closeModal"})})]}),Object(W.jsx)(_e,{title:"Phonebook",children:Object(W.jsx)(Ee,{onClick:o,children:Object(W.jsx)(Z,{className:"openModal"})})}),Object(W.jsxs)(_e,{title:"Contacts",children:[t.length>0&&Object(W.jsx)(te,{}),t.length>0?Object(W.jsx)(ce,{}):Object(W.jsx)("p",{className:"notification",children:"Your phonebook is empty. Please add contact."})]})]})}));n(64);u.a.render(Object(W.jsx)(l.a.StrictMode,{children:Object(W.jsx)(b.a,{store:A,children:Object(W.jsx)(j.a,{loading:null,persistor:M,children:Object(W.jsx)(d.a,{children:Object(W.jsx)(Le,{})})})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.4e87d935.chunk.js.map