(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[5],{138:function(e,n,t){"use strict";t.r(n);var i,a,r,c,o,s,d=t(44),l=t(0),m=t.n(l),p=t(19),b=t(11),j=t(70),u=t(13),h=b.e.header(i||(i=Object(p.a)(["\n    height:80px;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top:0;\n    z-index: 999;\n    transition-duration: 0.3s;\n\n    &:not([data-scroll='0']) {\n        background:",";\n        box-shadow: 0 2px 10px ",";\n    }\n\n    @media screen and (max-width: ","){\n        position: absolute;\n    }\n\n"])),(function(e){return e.theme.body}),(function(e){return e.theme.isLight?"#ccc":"#2E2532"}),u.a.SCREENS.sm),x=b.e.nav(a||(a=Object(p.a)(["\n    margin: auto;\n    max-width: 1100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    \n    @media screen and (max-width: ","){\n        display: none;\n    }\n   \n"])),u.a.SCREENS.sm),g=b.e.div(r||(r=Object(p.a)(["\n    height: 80px;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    left: 15px;\n"]))),f=b.e.ul(c||(c=Object(p.a)(["\n    height: 80px;\n    list-style: none;\n    display: flex;\n    text-align: center;\n    margin:0;\n"]))),O=b.e.li(o||(o=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    padding: 0 1rem;\n"]))),v=Object(b.e)(j.Link)(s||(s=Object(p.a)(["\n    \n    font-size: 16px;\n    font-weight: 400;\n    padding: 0.5rem 0;\n    letter-spacing: 0.05rem;\n    border-bottom:3px solid transparent;\n    cursor:pointer;\n\n    &:hover{\n        border-bottom:3px solid ",";\n    }\n"])),u.a.color.primary),E=function(){document.getElementById("header-primary")&&(document.getElementById("header-primary").dataset.scroll=window.scrollY)};document.addEventListener("scroll",function(e){var n;return function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];n&&cancelAnimationFrame(n),n=requestAnimationFrame((function(){e.apply(void 0,i)}))}}(E),{passive:!0});var w,S,y,C,k,R,N,z=E,F=t(78),T=t.n(F),A=t(3),L={smooth:!0,duration:500,offset:-50},M=function(e){var n=e.onThemeToggler,t=Object(l.useContext)(b.a);return Object(l.useEffect)((function(){return z()})),Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(h,{id:"header-primary",children:[Object(A.jsx)(g,{children:Object(A.jsx)(T.a,{onChange:n,checked:!t.isLight,size:50})}),Object(A.jsx)(x,{children:Object(A.jsxs)(f,{children:[Object(A.jsx)(O,{children:Object(A.jsx)(v,Object(d.a)(Object(d.a)({to:"home"},L),{},{children:"Inicio"}))}),Object(A.jsx)(O,{children:Object(A.jsx)(v,Object(d.a)(Object(d.a)({to:"aboutme"},L),{},{children:"Acerca de mi"}))}),Object(A.jsx)(O,{children:Object(A.jsx)(v,Object(d.a)(Object(d.a)({to:"skills"},L),{},{children:"Skills"}))}),Object(A.jsx)(O,{children:Object(A.jsx)(v,Object(d.a)(Object(d.a)({to:"projects"},L),{},{children:"Proyectos"}))}),Object(A.jsx)(O,{children:Object(A.jsx)(v,Object(d.a)(Object(d.a)({to:"contact"},L),{},{children:"Cont\xe1ctame"}))})]})})]})})},q=b.e.div(w||(w=Object(p.a)(["\n    padding: 0 8px;\n    box-sizing: border-box;\n    margin:auto ;\n    height: 100vh;\n    position: relative;\n    max-height: 600px;\n    overflow: hidden;\n\n    @media screen and (min-width : ","){\n        max-height: 600px;\n    }\n    @media screen and (min-width : ",") {\n        padding: 0;\n        max-width: 1100px;\n        max-height: 800px;\n    }\n    @media screen and (min-width : ",") {\n        max-width: 1200px;\n    }\n    @media screen and (min-width : ",") {\n        max-width: 1440px;\n    }\n"])),u.a.SCREENS.md,u.a.SCREENS.lg,u.a.SCREENS["2xl"],u.a.SCREENS["4xl"]),P=b.e.div(S||(S=Object(p.a)(["\n    /* 1version*/\n    display: none;\n    /* end--1version*/\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: -1;\n\n    @media screen and (min-width : ","){\n        background-image: url(",");\n        background-size: auto 85%;\n        background-repeat: no-repeat;\n        background-position: bottom right;\n    }\n    @media screen and (min-width : ",") {\n        background-size: auto 85%;\n    }\n    @media screen and (min-width : ",") {\n        background-size: auto 92%;\n    }\n    @media screen and (min-width : ",") {\n        background-size: auto 95%;\n    }\n"])),u.a.SCREENS.md,(function(e){return e.src}),u.a.SCREENS.lg,u.a.SCREENS.xl,u.a.SCREENS["2xl"]),I=b.e.div(y||(y=Object(p.a)(["\n    height:100%;\n    display: flex;\n    /* 1version\n    justify-content: flex-start;\n    */\n    justify-content:center;\n    /* end--1version*/\n    align-items: center;\n    z-index: 1;\n"]))),J=b.e.div(C||(C=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n      /* 1version*/\n      text-align: center;\n    /** */\n"]))),V=b.e.h1(k||(k=Object(p.a)(["\n  \n    font-weight:bold;\n    margin:0 0;\n    font-size: 4rem;\n    line-height:4rem;\n\n    @media screen and (min-width : ",") {\n        font-size: 5rem;\n        line-height:5rem;\n    }\n\n    @media screen and (min-width : ",") {\n        font-size:6rem;\n        line-height: 6rem;\n    }\n    @media screen and (min-width : ",") {\n        font-size: 7.5rem;\n        line-height: 7.5rem;\n    }\n"])),u.a.SCREENS.lg,u.a.SCREENS["2xl"],u.a.SCREENS["4xl"]),D=b.e.h2(R||(R=Object(p.a)(["\n    font-weight:bold;\n    color:#33C176;\n    margin:0 0;\n    font-size: 3rem;\n    line-height:3rem;\n    margin-top: 20px;\n\n    @media screen and (min-width : ",") {\n        font-size: 3.5rem;\n        line-height:3.5rem;\n        \n    }\n    @media screen and (min-width : ",") {\n        font-size:4.5rem;\n        line-height: 4.5rem;\n        margin-top: 40px;\n\n    }\n    @media screen and (min-width : ",") {\n        font-size: 5.25rem;\n        line-height: 5.25rem;\n\n    }\n"])),u.a.SCREENS.md,u.a.SCREENS.lg,u.a.SCREENS["4xl"]),G=b.e.img(N||(N=Object(p.a)(["\n    display: none;\n    width: 8px;\n    bottom: 0px;\n    position: absolute;\n   \n    @media screen and (min-width : ",") {\n        /* 1v \n        display: block;\n        */\n    }\n    @media screen and (min-width : ",") {\n        width: 10px;\n    }\n"])),u.a.SCREENS.xl,u.a.SCREENS["4xl"]),U=t.p+"static/media/banner.b16553aa.png",W=t.p+"static/media/line.32adca3b.svg",B=t(12);function H(e){var n=Object(l.useState)(0),t=Object(B.a)(n,2),i=t[0],a=t[1],r=Object(l.useState)(Array(e.text.split("<br/>").length).fill("")),c=Object(B.a)(r,2),o=c[0],s=c[1],d=Object(l.useState)(0),p=Object(B.a)(d,2),b=p[0],j=p[1],u=Object(l.useState)(!1),h=Object(B.a)(u,2),x=h[0],g=h[1];return Object(l.useEffect)((function(){if(x){var n=setTimeout((function(){var n=e.text.split("<br/>");n[b]&&(i<n[b].length?(s((function(e){var t=e.concat();return t[b]+=n[b].charAt(i),t})),a(i+1)):(j(b+1),a(0)))}),e.duration);return function(){return clearTimeout(n)}}}),[i,b,x,e.text,e.duration]),Object(l.useEffect)((function(){console.log("ywha");var n=setTimeout((function(){g(!0)}),e.delay);return function(){return clearTimeout(n)}}),[e.delay]),m.a.cloneElement(e.component,null,function(){var e,n=Array(o.length-1).fill(Object(A.jsx)("br",{}));return e=n,o.reduce((function(n,t,i){return n.concat(t,e[i])}),[])}().map((function(e,n){return Object(A.jsx)(m.a.Fragment,{children:e},n)})))}H.defaultProps={text:"insert<br>text",delay:500,duration:50,component:Object(A.jsx)(V,{})};var X=H;var _,Q,Y,K,Z,$,ee,ne=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(q,{id:"home",children:[Object(A.jsx)(P,{src:U}),Object(A.jsx)(I,{children:Object(A.jsxs)(J,{children:[Object(A.jsx)(X,{text:"Hola, soy<br/>Cristhofer",delay:0,duration:80}),Object(A.jsx)(X,{text:"Desarollador<br/>Web",component:Object(A.jsx)(D,{}),delay:2e3,duration:100}),Object(A.jsx)(G,{src:W})]})})]})})},te=b.e.div(_||(_=Object(p.a)(["\n    width: 100%;\n    margin-bottom: 96px;\n    background: ",";\n"])),u.a.color.PurpleMagenta),ie=b.e.div(Q||(Q=Object(p.a)(["\n    display: flex;\n    margin:auto;\n    max-width: 700px;\n    padding: 1rem 2rem;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n\n    @media screen and (min-width : ","){\n        flex-direction: row;\n    }\n"])),u.a.SCREENS.md),ae=b.e.div(Y||(Y=Object(p.a)(["\n        padding: 1rem 0 0 0;\n        text-align:center;\n    \n    @media screen and (min-width : ","){\n        padding-right: 1.5rem;\n        padding: 3rem 0;\n        text-align: left;\n    }\n"])),u.a.SCREENS.md),re=b.e.div(K||(K=Object(p.a)(["\n    font-weight:bold;\n    color: ",";\n    font-size: ",";\n    \n"])),u.a.color.primary,u.a.font.size.h3),ce=b.e.small(Z||(Z=Object(p.a)(["\n    color:",";\n"])),u.a.color.primary),oe=b.e.div($||($=Object(p.a)(["\n    \n    display:flex;\n    align-items: center;\n\n    @media screen and (min-width : ","){\n        padding-left: 1.5rem;\n    }\n"])),u.a.SCREENS.md),se=b.e.p(ee||(ee=Object(p.a)(["\n    font-weight:500;\n    font-size:24px;\n    text-align: center;\n    color: #fff\n"])));var de,le,me,pe,be,je,ue,he,xe,ge,fe,Oe,ve=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(te,{children:Object(A.jsxs)(ie,{children:[Object(A.jsxs)(ae,{children:[Object(A.jsxs)(re,{children:["2",Object(A.jsx)("br",{}),"A\xd1OS",Object(A.jsx)("br",{})]}),Object(A.jsx)(ce,{children:"EXPERIENCIA"})]}),Object(A.jsx)(oe,{children:Object(A.jsx)(se,{children:'\u201cCreo que el software es lo que mueve la sociedad actual mirando a un mundo conectado sin barreras"'})})]})})})},Ee=b.e.div(de||(de=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    padding: 48px 8px;\n    overflow: hidden;\n    \n    @media screen and (min-width : ","){\n        padding: 96px 0px;\n        overflow: visible;\n    }\n"])),u.a.SCREENS.lg),we=b.e.img(le||(le=Object(p.a)(["\n    position: absolute;\n    left:-570px;\n    top:-10px;\n    z-index: -1;\n    filter: ",";\n\n    @media screen and (min-width : ","){\n        left:-480px;\n        top:0;\n    }\n"])),(function(e){return e.theme.isLight?"":"invert(70%) brightness(20%);"}),u.a.SCREENS.lg),Se=b.e.div(me||(me=Object(p.a)(["\n    max-width: 900px;\n    position: relative;\n"]))),ye=b.e.div(pe||(pe=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-direction: column-reverse;\n\n    @media screen and (min-width : ","){\n        flex-direction: row;\n    }\n"])),u.a.SCREENS.md),Ce=b.e.div(be||(be=Object(p.a)(["\n    flex:1;\n"]))),ke=b.e.div(je||(je=Object(p.a)(["\n    \n"]))),Re=b.e.p(ue||(ue=Object(p.a)(["\n    font-size: ",";\n    line-height:1.5rem;\n    font-weight: 300;\n    text-align: justify;\n\n    @media screen and (min-width : ","){\n        text-align: left;\n\n    }\n"])),u.a.font.size.base,u.a.SCREENS.md),Ne=b.e.div(he||(he=Object(p.a)(["\n    flex:1;\n    display: flex;\n    justify-content: center;\n    \n    @media screen and (min-width : ","){\n        justify-content: flex-end;\n    }\n"])),u.a.SCREENS.md),ze=b.e.div(xe||(xe=Object(p.a)(["\n    width: 300px;\n"]))),Fe=b.e.img(ge||(ge=Object(p.a)(["\n    width: 90%;\n    box-shadow: 20px 20px 0px ",";\n    margin-bottom:60px;\n    filter: ",";\n    \n    @media screen and (min-width : ","){\n        margin-bottom:0px;\n    }\n"])),u.a.color.accent,(function(e){return e.theme.isLight?"":"brightness(90%);"}),u.a.SCREENS.md),Te=b.e.h3(fe||(fe=Object(p.a)(["\n    font-size: ",";\n    color: ",";\n    letter-spacing: 0.07em;\n    margin-bottom: 25px;\n    margin-top: 0px;\n\n    ","\n"])),u.a.font.size.h3,u.a.color.primary,(function(e){var n=e.textAlign,t=void 0===n?"left":n;if(t)return"text-align:"+t})),Ae=t.p+"static/media/rectangle.40258300.svg",Le=t.p+"static/media/person.2e93fe78.jpg",Me=b.e.a(Oe||(Oe=Object(p.a)(["\n    color:",";\n    text-align: center;\n    text-decoration:none;\n"])),u.a.color.accent);var qe,Pe,Ie,Je,Ve,De,Ge,Ue,We,Be,He,Xe,_e,Qe,Ye,Ke,Ze,$e,en,nn=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(Ee,{id:"aboutme",children:Object(A.jsxs)(Se,{children:[Object(A.jsx)(we,{src:Ae}),Object(A.jsxs)(ye,{children:[Object(A.jsx)(Ce,{children:Object(A.jsxs)(ke,{children:[Object(A.jsx)(Te,{children:"Acerca de mi"}),Object(A.jsxs)(Re,{children:["\xa1Hola! Mi nombre es Cristhofer Montalvo y actualmente vivo en Per\xfa. Desde peque\xf1o tuve mucha curiosidad sobre el mundo de la inform\xe1tica. Esto me llevo a estudiar ",Object(A.jsx)("b",{children:"Desarrollo de Software"})," \ud83d\udcbb despues de concluir el colegio. En los dos a\xf1os finales de la carrera trabaj\xe9 en la",Object(A.jsx)(Me,{href:"http://fim.uni.edu.pe/",children:" FIM UNI"})," y aument\xf3 mi interes por el mundo del desarrollo web.",Object(A.jsx)("br",{}),"Actualmente mi deseo es seguir creciendo junto con esta industria tan cambiante. ",Object(A.jsx)("br",{}),"Si sigues bajando ver\xe1s en qu\xe9 tecnologias me he desempe\xf1ado."]}),Object(A.jsx)("hr",{}),Object(A.jsxs)(Re,{children:["Como no todo se trata de computadoras, En mi tiempo libre me gusta tocar la guitarra espa\xf1ola \ud83c\udfb5, leer y escribir.",Object(A.jsx)("br",{})]})]})}),Object(A.jsx)(Ne,{children:Object(A.jsx)(ze,{children:Object(A.jsx)(Fe,{src:Le})})})]})]})})})},tn=b.e.div(qe||(qe=Object(p.a)(["\n    \n    display: flex;\n    justify-content: center;\n    padding: 96px 8px;\n\n    @media screen and (min-width : ","){\n        padding: 96px 0;\n    }\n\n"])),u.a.SCREENS.lg),an=b.e.div(Pe||(Pe=Object(p.a)(["\n    max-width: 900px;\n    width: 100%;\n"]))),rn=b.e.div(Ie||(Ie=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: top;\n"]))),cn=b.e.div(Je||(Je=Object(p.a)(["\n    display: none;\n    min-height: 600px;  \n    max-height: 600px;\n\n    @media screen and (min-width : ","){\n        display: flex;\n        align-items: center;\n        flex: 1;\n    }\n"])),u.a.SCREENS.md),on=b.e.div(Ve||(Ve=Object(p.a)(["\n    height: 100%;\n    width: 100%;\n    background-image: url(",");\n    filter: ",";\n    background-position: center;\n"])),(function(e){return e.src}),(function(e){return e.theme.isLight?"":"brightness(90%);"})),sn=b.e.div(De||(De=Object(p.a)(["\n    flex:2;\n\n    @media screen and (min-width : ","){\n        padding-left: 50px;\n    }\n"])),u.a.SCREENS.md),dn=b.e.div(Ge||(Ge=Object(p.a)(["\n   \n"]))),ln=b.e.div(Ue||(Ue=Object(p.a)(["\n    display:flex;\n    flex-direction: column;\n"]))),mn=b.e.div(We||(We=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),pn=b.e.div(Be||(Be=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    cursor: pointer;\n    border-bottom: 1px solid ",";\n"])),u.a.color.cyanBlue),bn=b.e.h4(He||(He=Object(p.a)(["\n    font-size: ",";\n    letter-spacing: 0;\n    text-transform: uppercase;\n    margin: 0;\n    margin: 0.7rem 0;\n"])),u.a.font.size.h3),jn=b.e.div(Xe||(Xe=Object(p.a)(["\n    font-size: 30px;\n"]))),un=b.e.div(_e||(_e=Object(p.a)(["\n    display: flex;\n    max-height: 0;\n    overflow: hidden;\n    flex-direction: column;\n    transition: all 0.5s cubic-bezier(0,1,0,1);\n\n    ","\n"])),(function(e){return e.isVisible&&Object(b.d)(Qe||(Qe=Object(p.a)(["\n        max-height: 999px;\n        height: auto;\n        overflow: auto;\n        padding-bottom: 3rem;\n    "])))})),hn=b.e.div(Ye||(Ye=Object(p.a)(["\n    padding: 0.5rem 0;\n"]))),xn=b.e.p(Ke||(Ke=Object(p.a)(["\n    font-weight: 500;\n    text-transform: uppercase;\n"]))),gn=b.e.div(Ze||(Ze=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    position: relative;\n    width: 100%;\n    height: 20px;\n    background-color: ",";\n"])),u.a.color.cyanBlue),fn=b.e.div($e||($e=Object(p.a)(["\n    width: ","%;\n    position: absolute;\n    height: 100%;\n    left: 0;\n    background-color:",";\n"])),(function(e){return e.percentage}),u.a.color.accent),On=b.e.p(en||(en=Object(p.a)(["\n    padding: 0;\n    font-size: 14px;\n    padding-right: 0.2rem;\n    z-index: 1;\n    color : ","\n"])),(function(e){return 100===e.percentage?"#fff":"#000"})),vn=t(49);function En(e){return Object(A.jsxs)(hn,{children:[Object(A.jsx)(xn,{children:e.name}),Object(A.jsxs)(gn,{children:[Object(A.jsx)(fn,Object(d.a)({},e)),Object(A.jsxs)(On,Object(d.a)(Object(d.a)({},e),{},{children:[e.percentage,"%"]}))]})]})}function wn(e){var n=e.skillGroup,t=e.toogle,i=e.i,a=e.idVisible,r=n.skills,c=n.name;return Object(A.jsxs)(mn,{children:[Object(A.jsxs)(pn,{onClick:function(){t(i)},children:[Object(A.jsx)(bn,{children:c}),Object(A.jsx)(jn,{children:i===a?Object(A.jsx)(vn.c,{}):Object(A.jsx)(vn.a,{})})]}),Object(A.jsx)(un,{isVisible:i===a,children:r.map((function(e,n){return Object(A.jsx)(En,Object(d.a)({},e),n)}))})]})}var Sn=function(e){var n=e.skillsGroup,t=Object(l.useState)(0),i=Object(B.a)(t,2),a=i[0],r=i[1],c=function(e){if(a===e)return r(null);r(e)};return Object(A.jsx)(ln,{children:n.map((function(e,n){return Object(A.jsx)(wn,{skillGroup:e,toogle:c,i:n,idVisible:a},n)}))})},yn=t.p+"static/media/skills_background.2bb7ada8.jpg";var Cn,kn,Rn,Nn,zn,Fn,Tn,An,Ln,Mn,qn,Pn,In,Jn,Vn,Dn=function(e){var n=e.skillsGroup;return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(tn,{id:"skills",children:Object(A.jsx)(an,{children:Object(A.jsxs)(rn,{children:[Object(A.jsx)(cn,{children:Object(A.jsx)(on,{src:yn})}),Object(A.jsx)(sn,{children:Object(A.jsxs)(dn,{children:[Object(A.jsx)(Te,{children:"Skills"}),Object(A.jsx)(Sn,{skillsGroup:n})]})})]})})})})},Gn=t(21),Un=b.e.div(Cn||(Cn=Object(p.a)(["\n \n    padding: 48px 8px;\n\n    @media screen and (min-width : ","){\n        padding: 96px 0;\n    }\n"])),u.a.SCREENS.lg),Wn=b.e.div(kn||(kn=Object(p.a)(["\n    max-width: 900px;\n    margin: auto;\n"]))),Bn=b.e.div(Rn||(Rn=Object(p.a)(["\n    padding: 60px 0;\n"]))),Hn=b.e.div(Nn||(Nn=Object(p.a)(["\n    display: flex;\n    flex-direction: column-reverse;\n\n    @media screen and (min-width : ","){\n        flex-direction:row;\n    }\n"])),u.a.SCREENS.md),Xn=b.e.div(zn||(zn=Object(p.a)(["\n    flex:1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-right: 2rem;\n"]))),_n=b.e.h4(Fn||(Fn=Object(p.a)(["\n    font-size: 48px;\n    margin-top: 48px;\n    margin-bottom: 20px;\n\n    @media screen and (min-width : ","){\n        margin-top:0 ;\n    }\n"])),u.a.SCREENS.md),Qn=b.e.p(Tn||(Tn=Object(p.a)(["\n    font-weight: 300;\n    margin-bottom:20px;\n    margin-top:0;\n    font-size: ",";\n"])),u.a.font.size.base),Yn=b.e.div(An||(An=Object(p.a)(["\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-right:20px;\n    \n    @media screen and (min-width : ",") {\n        width: 400px;\n    }\n    @media screen and (min-width : ","){\n        width: 480px;\n        padding-right:0;\n    }\n    \n    a{\n        min-width: 100%;\n    }\n"])),u.a.SCREENS.md,u.a.SCREENS.lg),Kn=b.e.div(Ln||(Ln=Object(p.a)(["\n    position: relative;\n    width: 100%;\n    height: 300px;\n    box-shadow: 20px 20px 0 ",";\n    overflow: hidden;\n    background-image: url(",");\n    background-repeat: no-repeat no-repeat;\n    background-position:center center;\n    background-size: cover;\n    background-color: #3b3f45;\n    filter: ",";\n    transition: all 0.6s ease;\n\n    @media screen and (min-width : ","){\n        height: 350px;\n    }\n\n    &:hover{\n        background-color: transparent;\n        transition: background-color .25s;\n    }\n\n\n"])),u.a.color.accent,(function(e){return e.src}),(function(e){return e.theme.isLight?"":"brightness(90%)"}),u.a.SCREENS.lg),Zn=b.e.div(Mn||(Mn=Object(p.a)(["\n\n"]))),$n=b.e.div(qn||(qn=Object(p.a)(["\n    margin-bottom:20px;\n"]))),et=b.e.div(Pn||(Pn=Object(p.a)(["\n    background-color: ",";\n    display: inline-block;\n    padding: 0.5rem 0.7rem;\n    margin-right: 1rem;\n    margin-bottom:10px;\n    font-weight: 300;\n    border-radius: 20px;\n    color: ",";\n"])),(function(e){return e.theme.term}),(function(e){return e.theme.color})),nt=b.e.div(In||(In=Object(p.a)(["\n    width: 100%;\n    text-align: center;\n    margin:1rem 0;\n"]))),tt=Object(b.e)(Gn.b)(Jn||(Jn=Object(p.a)(["\n    color:",";\n    text-align: center;\n    margin: auto;\n    text-decoration:none;\n    padding:1rem;\n    display: inline-flex;\n    align-items: center;\n    \n"])),u.a.color.accent),it=b.e.button(Vn||(Vn=Object(p.a)(["\n    background-color: ",";\n    padding: 1rem 2rem;\n    border:none;\n    color: #fff;\n    cursor:pointer;\n    transition-duration: 0.2s;\n    \n    &:hover{\n        opacity: 0.8;\n    }\n    &:active{\n        opacity: 0.8;\n    }\n"])),u.a.color.accent);function at(e){var n=e.tags;return Object(A.jsx)($n,{children:n.map((function(e,n){return Object(A.jsx)(et,{children:e},n)}))})}function rt(e){var n=e.title,t=e.description,i=e.imgURL,a=e.slug,r=e.tags;return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(Bn,{children:Object(A.jsxs)(Hn,{children:[Object(A.jsxs)(Xn,{children:[Object(A.jsx)(_n,{children:n}),Object(A.jsx)(Qn,{children:t}),Object(A.jsx)(at,{tags:r}),Object(A.jsx)(Zn,{children:Object(A.jsx)(Gn.b,{to:"/projects/"+a,children:Object(A.jsx)(it,{children:"Leer m\xe1s"})})})]}),Object(A.jsx)(Yn,{children:Object(A.jsx)(Gn.b,{to:"/projects/"+a,children:Object(A.jsx)(Kn,{src:i})})})]})})})}function ct(e){return e.projects.map((function(e,n){return Object(A.jsx)(rt,Object(d.a)({},e),e.id)}))}var ot,st,dt,lt,mt,pt,bt,jt,ut,ht,xt,gt,ft=function(e){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(Un,{id:"projects",children:Object(A.jsxs)(Wn,{children:[Object(A.jsx)(Te,{textAlign:"center",children:"Proyectos"}),Object(A.jsx)(ct,{projects:e.show(3)}),Object(A.jsx)(nt,{children:Object(A.jsxs)(tt,{to:"/projects",children:["M\xe1s proyectos",Object(A.jsx)(vn.b,{})]})})]})})})},Ot={skillsGroup:[{name:"Frontend",skills:[{name:"HTML",percentage:100},{name:"CSS",percentage:90},{name:"React JS",percentage:80},{name:"Javascript",percentage:90},{name:"Wordpress",percentage:80}],isVisible:!0},{name:"Backend",skills:[{name:"PHP",percentage:90},{name:"Node JS",percentage:70},{name:"Laravel",percentage:60}],isVisible:!1},{name:"Bases de datos",skills:[{name:"Mysql",percentage:90},{name:"Mongodb",percentage:70},{name:"Firebase Database",percentage:70},{name:"SQL Server",percentage:50}],isVisible:!1},{name:"Mobile",skills:[{name:"React Native",percentage:80},{name:"Android Studio",percentage:60}],isVisible:!1},{name:"UI & UIX",skills:[{name:"Figma",percentage:90},{name:"Adobe XD",percentage:90},{name:"adobe Ilustrator",percentage:70}],isVisible:!1},{name:"OS",skills:[{name:"Linux",percentage:80},{name:"Ubuntu Server",percentage:80},{name:"windows",percentage:100}],isVisible:!1}],image:""},vt=t(52),Et=b.e.div(ot||(ot=Object(p.a)(["\n    overflow: hidden;\n    padding: 48px 8px;\n    padding-bottom: 96px;\n\n    @media screen and (min-width : ","){\n        padding-left:0;\n        padding-right:0;\n    }\n"])),u.a.SCREENS.lg),wt=b.e.div(st||(st=Object(p.a)(["\n    max-width: 900px;\n    margin: auto;\n    position: relative;\n\n"]))),St=b.e.img(dt||(dt=Object(p.a)(["\n    \n    display: none;\n\n    @media screen and (min-width : ","){\n        display: block;\n        position: absolute;\n        top: 150px;\n        left: -450px;\n        z-index:-1;\n        filter: ",";\n    }\n"])),u.a.SCREENS.lg,(function(e){return e.theme.isLight?"":"invert(70%) brightness(15%);"})),yt=b.e.div(lt||(lt=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    z-index:1;\n\n    @media screen and (min-width : ","){\n        flex-direction: row;\n    }\n    \n"])),u.a.SCREENS.lg),Ct=b.e.div(mt||(mt=Object(p.a)(["\n    flex:1;\n    display: block;\n    padding-right: 40px;\n"]))),kt=b.e.p(pt||(pt=Object(p.a)(["\n    margin-bottom: 20px;\n"]))),Rt=b.e.a(bt||(bt=Object(p.a)(["\n    color:",";\n    display: inline-flex;\n    align-items: center;\n    text-decoration: none;\n    cursor:pointer;\n     \n     &:hover{\n         cursor:pointer;\n         text-decoration: underline;\n     }\n"])),u.a.color.accent),Nt=b.e.a(jt||(jt=Object(p.a)(["\n    flex:1;\n"]))),zt=b.e.div(ut||(ut=Object(p.a)(["\n    padding: 0 30px;\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 90px;\n\n    @media screen and (max-width : ","){\n        padding: 20px 0;\n        padding-bottom: 90px;\n    }\n"])),u.a.SCREENS.lg),Ft=b.e.input(ht||(ht=Object(p.a)(["\n    padding: 20px;\n    margin: 10px 0;\n    background-color: ",";\n    color: ",";\n    border:none;\n\n    &:focus{\n        outline: none;\n    }\n\n"])),(function(e){return e.theme.input}),(function(e){return e.theme.text})),Tt=b.e.textarea(xt||(xt=Object(p.a)(["\n    padding: 20px;\n    margin: 10px 0;\n    background-color: ",";\n    color: ",";\n    border:none;\n    resize: none;\n\n    &:focus{\n        outline: none;\n    }\n"])),(function(e){return e.theme.input}),(function(e){return e.theme.text})),At=b.e.div(gt||(gt=Object(p.a)(["\n    margin: 10px 0;\n"]))),Lt=t.p+"static/media/circle.227030ae.svg";var Mt=function(){return Object(A.jsx)("form",{children:Object(A.jsxs)(zt,{children:[Object(A.jsx)(Ft,{placeholder:"Tu nombre"}),Object(A.jsx)(Ft,{placeholder:"Tu correo electr\xf3nico"}),Object(A.jsx)(Ft,{placeholder:"Asunto"}),Object(A.jsx)(Tt,{placeholder:"Mensaje"}),Object(A.jsx)(At,{children:Object(A.jsx)(it,{type:"submit",children:"Enviar"})}),Object(A.jsx)("small",{style:{color:"#4c4c4c",fontWeight:300,marginTop:10},children:"* Este formulario todavia no esta operativo"})]})})};var qt=function(){return Object(A.jsx)(Et,{id:"contact",children:Object(A.jsxs)(wt,{children:[Object(A.jsx)(St,{src:Lt}),Object(A.jsxs)(yt,{children:[Object(A.jsxs)(Ct,{children:[Object(A.jsx)(Te,{children:"Charlemos"}),Object(A.jsx)(kt,{children:"Si tiene un proyecto en el cu\xe1l le gustaria que trabajase o colaborar con este, llene este formulario para ponernos en contacto."}),Object(A.jsxs)(Rt,{href:"mailto:cristhofermontalvofiestas@gmail.com",children:["cristhofermontalvofiestas@gmail.com",Object(A.jsx)(vn.b,{})]})]}),Object(A.jsx)(Nt,{children:Object(A.jsx)(Mt,{})})]})]})})};n.default=function(e){var n=e.onThemeToggler;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(M,{onThemeToggler:n}),Object(A.jsx)(ne,{}),Object(A.jsx)(ve,{}),Object(A.jsx)(nn,{}),Object(A.jsx)(Dn,Object(d.a)({},Ot)),Object(A.jsx)(ft,Object(d.a)({},vt.a)),Object(A.jsx)(qt,{})]})}},52:function(e,n,t){"use strict";var i=t.p+"static/media/image.8c294e25.jpg",a=t.p+"static/media/1.c70ee4e6.png",r=t.p+"static/media/2.6f2f6769.png",c=t.p+"static/media/3.c26bc29e.png",o=(t.p,t.p+"static/media/5.fccafd9e.png"),s=t.p+"static/media/1-min.5bf4a799.png",d=t.p+"static/media/2-min.05c0c56f.png",l=t.p+"static/media/3-min.4dee22e2.png",m=(t.p,t.p+"static/media/5-min.ef9abc7e.png"),p=t.p+"static/media/image.6d23e5f3.jpg",b=t.p+"static/media/1.cdf4e79f.png",j=t.p+"static/media/2_thumb.0d62bc74.png",u=[{id:1,slug:"mi-portafolio",title:"Mi portafolio",codeLink:"https://github.com/CristhoferMF/my-portfolio",description:"Mi portafolio hecho con REACT JS. Dise\xf1o hecho en FIGMA. Es un proyecto que quer\xeda hacer desde hace alg\xfan tiempo para poder mostrar...",imgURL:p,images:[{src:b,thumbnail:b},{src:t.p+"static/media/2.e2b39fc2.png",thumbnail:j}],descriptionFullText:"Mi portafolio hecho con REACT JS. Dise\xf1o hecho en FIGMA. Es un proyecto que quer\xeda hacer desde hace alg\xfan tiempo para poder mostrar mi continuo camino en la programaci\xf3n. \n                        Adem\xe1s, en este proyecto quise llevar un mockup hecho en Figma a una web funcional mediante Styled Components.",tags:["React JS","Styled Commponents","Figma"]},{id:3,slug:"trivia-quiz-app",title:"Trivia Quiz App",codeLink:"https://github.com/CristhoferMF/reactNativeTriviaJW",description:"Es un juego de preguntas tipo trivia. Este proyecto me permitio profundizar en el uso del framework React mediante React Native. Es uno de los proyetos que...",descriptionFullText:"Es un juego de preguntas tipo trivia. Este proyecto me permitio profundizar en el uso del framework React mediante React Native. \n                        Es uno de los proyetos personales en los que mejor me lo he pasado. React Native tiene mucho potencial en miras del desarrollo de aplicacione moviles.\n                        Espero poder continuar en este juego y a\xf1adirle muchas cosas m\xe1s.",imgURL:i,images:[{src:a,thumbnail:s,caption:"Pantalla Principal - Trivia Quiz"},{src:r,thumbnail:d,caption:"Categorias Pantalla"},{src:c,thumbnail:l,caption:"Descargar Categorias desde Firebase"},{src:o,thumbnail:m,caption:"Pantalla Juego"}],tags:["React","React Native","Realm.io","Firebase","Adobe XD"]},{id:2,slug:"tarinaweb-wordpress",title:"TarinaWeb",imgURL:t.p+"static/media/image.f88ae370.jpg",description:"Este proyecto esta pensado para la creaci\xf3n de paginas web mediante el uso de Wordpress a empresas del sector priorizando la personalizaci\xf3n y...",descriptionFullText:"Este proyecto esta pensado para la creaci\xf3n de paginas web mediante el uso de Wordpress a empresas del sector priorizando la personalizaci\xf3n y la comunicaci\xf3n con el cliente. \n                En aspectos tecnicos us\xe9 Jet Engine para los Custom Post Types, Elementor y mucho SVG. Finalmente, el despliegue en un Hosting de una empresa Nacional.",images:[{src:t.p+"static/media/1.f6bd4feb.png",thumbnail:t.p+"static/media/1_thumb.9e0f6770.png"},{src:t.p+"static/media/2.7216a0be.png",thumbnail:t.p+"static/media/2_thumb.7b3e2bb8.png"}],tags:["Wordpress","Figma","JetEngine"]}],h={show:function(e){return[].concat(u).slice(0,e)},all:function(){return[].concat(u)},findBySlug:function(e){return u.find((function(n){return n.slug===e}))}};n.a=h}}]);
//# sourceMappingURL=5.988bca11.chunk.js.map