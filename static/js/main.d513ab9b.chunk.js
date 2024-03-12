(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),l=c(8),i=c(2),r=c(1),o=(c(13),c(14),c(5)),d=c.n(o),j=c(0),u=function(e){var t=e.todos,c=e.onSelect,s=void 0===c?function(){}:c,a=e.selectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=e.id,c=e.completed,n=e.title;return Object(j.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":(null===a||void 0===a?void 0:a.id)===t}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:t}),Object(j.jsx)("td",{className:"is-vcentered",children:Object(j.jsx)("i",{className:d()("fas",{"fa-check":!0===c})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:d()({"has-text-danger":!c,"has-text-success":c}),children:n})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{onClick:function(){return s(e)},"data-cy":"selectButton",className:"button",type:"button",children:Object(j.jsx)("span",{className:"icon",children:(null===a||void 0===a?void 0:a.id)===t?Object(j.jsx)("i",{className:"far fa-eye-slash"}):Object(j.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(s||(s={}));var b=function(e){var t=e.filterBy,c=e.queryFilterValue,a=e.queryFilterBy;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return t(e.target.value)},children:[Object(j.jsx)("option",{value:s.ALL,children:"All"}),Object(j.jsx)("option",{value:s.ACTIVE,children:"Active"}),Object(j.jsx)("option",{value:s.COMPLETED,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},h=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.selectTodo,c=e.selectTodoBy,s=void 0===c?function(){}:c,a=Object(r.useState)(null),n=Object(i.a)(a,2),l=n[0],o=n[1],d=Object(r.useState)(!0),u=Object(i.a)(d,2),b=u[0],m=u[1],x=t.title,f=t.completed,v=t.id;return Object(r.useEffect)((function(){var e;(e=null===t||void 0===t?void 0:t.userId,O("/users/".concat(e))).then(o).finally((function(){return m(!1)}))}),[t]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),b?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(v)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return s(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:x}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[!0===f?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===l||void 0===l?void 0:l.email),children:null===l||void 0===l?void 0:l.name})]})]})]})]})},x=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(!1),o=Object(i.a)(n,2),d=o[0],x=o[1],f=Object(r.useState)(null),v=Object(i.a)(f,2),N=v[0],y=v[1],p=Object(r.useState)(s.ALL),g=Object(i.a)(p,2),T=g[0],k=g[1],C=Object(r.useState)(""),E=Object(i.a)(C,2),L=E[0],S=E[1];Object(r.useEffect)((function(){x(!0),O("/todos").then(a).catch((function(){return x(!0)})).finally((function(){return x(!1)}))}),[]);var w=function(e,t,c){var a=Object(l.a)(e),n=c.toLowerCase().trim();switch(t){case s.ACTIVE:a=a.filter((function(e){return!1===e.completed}));break;case s.COMPLETED:a=a.filter((function(e){return!0===e.completed}))}return n&&(a=a.filter((function(e){return e.title.toLowerCase().includes(n)}))),a}(c,T,L);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{filterBy:k,queryFilterValue:L,queryFilterBy:S})}),Object(j.jsxs)("div",{className:"block",children:[d&&Object(j.jsx)(h,{}),!d&&Object(j.jsx)(u,{todos:w,onSelect:y,selectedTodo:N})]})]})})}),N&&Object(j.jsx)(m,{selectTodo:N,selectTodoBy:y})]})};n.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d513ab9b.chunk.js.map