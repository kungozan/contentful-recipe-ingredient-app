(this["webpackJsonprecipe-ingredient"]=this["webpackJsonprecipe-ingredient"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n(1),s=n(6),a=(n(11),n(12),n(13),n(14),n(3)),r=n(5),u=n(2),d=function(e){var t=e.sdk,n=Object(i.useState)(""),c=Object(a.a)(n,2),s=c[0],d=c[1],f=Object(i.useState)(t.entry.fields.amount.getValue()),o=Object(a.a)(f,2),l=o[0],b=o[1],j=Object(i.useState)(""),y=Object(a.a)(j,2),O=y[0],g=y[1];if(Object(i.useEffect)((function(){var e=t.entry.fields.ingredient.onValueChanged((function(e){e&&t.space.getEntry(e.sys.id).then((function(e){d(e.fields.name["sv-SE"])}))})),n=t.entry.fields.amount.onValueChanged((function(e){b(e)})),i=t.entry.fields.measurement.onValueChanged((function(e){e?t.space.getEntry(e.sys.id).then((function(e){g(e.fields.name["sv-SE"])})):g("")}));return function(){e(),n(),i()}}),[t.space,t.entry.fields.ingredient,t.entry.fields.amount,t.entry.fields.measurement]),!s)return Object(u.jsx)(r.b,{});var m=s;return l&&(m+=" ".concat(l)),O&&(m+=" ".concat(O)),t.field.setValue(m),Object(u.jsx)(r.a,{children:m})};Object(s.init)((function(e){var t=document.getElementById("root");Object(c.render)(Object(u.jsx)(d,{sdk:e}),t)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.b0696c65.chunk.js.map