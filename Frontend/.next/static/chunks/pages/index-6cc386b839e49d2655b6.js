_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{RNiq:function(e,n,t){"use strict";t.r(n);var o=t("nKUr"),r=(t("q1tI"),function(){return Object(o.jsx)("footer",{className:"footer",children:"Hola Soy el Footer"})}),c=function(){return Object(o.jsx)("div",{children:"Hola soy el Header"})},a=function(e){var n=e.children;return Object(o.jsxs)("div",{className:"layout",children:[Object(o.jsx)(c,{}),n,Object(o.jsx)(r,{})]})},s=t("YFqc"),i=t.n(s),u=function(){return Object(o.jsx)("nav",{children:Object(o.jsxs)("menu",{children:[Object(o.jsx)(i.a,{href:"/Examen",children:Object(o.jsx)("a",{children:"Examen"})}),Object(o.jsx)(i.a,{href:"/Respuesta",children:Object(o.jsx)("a",{children:"Respuestas"})})]})})};n.default=function(){return Object(o.jsx)(a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Bienvenidos al prototipo de nuestro proyecto"}),Object(o.jsx)("p",{children:"Este app se penso con el fin de darle al estudiante un poco mas que una simple respuesta de si y no, quisimos ir un poco mas lejos la darle una retroalimentacion de como puede mejorar y seguir creciendo"}),Object(o.jsx)("p",{children:"Este proyecto es mas enfocado a ser un complemento a los cursos y examenes de platzi para asi mejorar la plataforma de educacion y hacer un poco mas amena"}),Object(o.jsx)("p",{children:"Lo mostrando aqui no es mas que un peque\xf1o pensamiento, de como se puede llegar mas lejos con la educacion online."}),Object(o.jsx)("p",{children:"Acontinuacion les mostraremos como creemos que es posible mejorar los examenes de platzi"}),Object(o.jsx)(u,{})]})})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var o=t("J4zp"),r=t("284h");n.__esModule=!0,n.default=void 0;var c=r(t("q1tI")),a=t("elyg"),s=t("nOHt"),i=t("vNVm"),u={};function l(e,n,t,o){if((0,a.isLocalURL)(n)){e.prefetch(n,t,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;u[n+"%"+t+(r?"%"+r:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),r=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(r,e.href,!0),t=o(n,2),c=t[0],s=t[1];return{href:c,as:e.as?(0,a.resolveHref)(r,e.as):s||c}}),[r,e.href,e.as]),d=f.href,p=f.as,h=e.children,j=e.replace,v=e.shallow,m=e.scroll,b=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var y=c.Children.only(h),x=y&&"object"===typeof y&&y.ref,O=(0,i.useIntersection)({rootMargin:"200px"}),E=o(O,2),w=E[0],g=E[1],_=c.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);(0,c.useEffect)((function(){var e=g&&n&&(0,a.isLocalURL)(d),o="undefined"!==typeof b?b:t&&t.locale,r=u[d+"%"+p+(o?"%"+o:"")];e&&!r&&l(t,d,p,{locale:o})}),[p,d,g,b,n,t]);var q={ref:_,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,o,r,c,s,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=o.indexOf("#")<0),n[r?"replace":"push"](t,o,{shallow:c,locale:i}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,p,j,v,m,b)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};return(e.passHref||"a"===y.type&&!("href"in y.props))&&(q.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof b?b:t&&t.locale,t&&t.defaultLocale))),c.default.cloneElement(y,q)};n.default=f},vNVm:function(e,n,t){"use strict";var o=t("J4zp"),r=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,r=(0,c.useRef)(),u=(0,c.useState)(!1),l=o(u,2),f=l[0],d=l[1],p=(0,c.useCallback)((function(e){r.current&&(r.current(),r.current=void 0),t||f||e&&e.tagName&&(r.current=function(e,n,t){var o=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:r,elements:o}),t}(t),r=o.id,c=o.observer,a=o.elements;return a.set(e,n),c.observe(e),function(){c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){s||f||(0,a.default)((function(){return d(!0)}))}),[f]),[p,f]};var c=t("q1tI"),a=r(t("0G5g")),s="undefined"!==typeof IntersectionObserver;var i=new Map},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,1,2]]]);