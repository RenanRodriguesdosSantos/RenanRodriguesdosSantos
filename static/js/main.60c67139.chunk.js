(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"name":"Map Contact","discription":"Visualiza\xe7\xe3o de Contatos em um mapa","foto":"images/mapcontato.png","repository":"/mapcontact","tecnologies":[{"name":"JavaScript","icon":"images/icons/js.png"},{"name":"PHP","icon":"images/icons/php.png"},{"name":"HTML","icon":"images/icons/html.png"},{"name":"Bootstrap","icon":"images/icons/bootstrap.png"},{"name":"Mysql","icon":"images/icons/mysql.png"}]},{"name":"SisTH C#","discription":"Sistema de Triagem em estabelecimentos de sa\xfade desenvolvido com a linguagem C#.","foto":"images/sisthcsharp.png","repository":"/SisTH","tecnologies":[{"name":"C#","icon":"images/icons/csharp.png"},{"name":"SQL Server","icon":"images/icons/sqlserver.png"}]},{"name":"SisTH PHP","discription":"Sistema de Triagem em estabelecimentos de sa\xfade desenvolvido com a linguagem PHP e framework Laravel.","foto":"images/sisthphp.png","repository":"/sisth","tecnologies":[{"name":"Laravel","icon":"images/icons/laravel.png"},{"name":"React","icon":"images/icons/react.png"},{"name":"Bootstrap","icon":"images/icons/bootstrap.png"},{"name":"MySql","icon":"images/icons/mysql.png"}]},{"name":"Control RUP","discription":"Sistema de controle de artefatos da metodologia de de denvolvimento de software RUP (Rational Unified Process).","foto":"images/controlrup.png","repository":"/GerenciadorPU","tecnologies":[{"name":"PHP","icon":"images/icons/php.png"},{"name":"JavaScript","icon":"images/icons/js.png"},{"name":"Bootstrap","icon":"images/icons/bootstrap.png"},{"name":"MySql","icon":"images/icons/mysql.png"}]},{"name":"SisUPA","discription":"Sistema para atendimentos em estabelecimentos de sa\xfade.","foto":"images/sisupa.png","repository":"/sisupa","tecnologies":[{"name":"Laravel","icon":"images/icons/laravel.png"},{"name":"React","icon":"images/icons/react.png"},{"name":"Bootstrap","icon":"images/icons/bootstrap.png"},{"name":"MySql","icon":"images/icons/mysql.png"}]},{"name":"MyChurch","discription":"Sistema utilizado para gest\xe3o de participantes em igrejas.","foto":"images/mychurch.png","repository":"/MyChurch","tecnologies":[{"name":"Laravel","icon":"images/icons/laravel.png"},{"name":"Vue","icon":"images/icons/vue.png"},{"name":"Vuetify","icon":"images/icons/vuetify.png"},{"name":"MySql","icon":"images/icons/mysql.png"}]}]')},,,,,function(e,s,i){},,function(e,s,i){},function(e,s,i){"use strict";i.r(s);var c=i(1),n=i.n(c),t=i(3),a=i.n(t),o=(i(9),i(0));window.onload=function(){var e=document.getElementById("menu");window.addEventListener("scroll",(function(){window.scrollY>50?e.classList.add("menuFixo"):e.classList.remove("menuFixo")}))};var r=function(){return Object(o.jsx)("header",{className:"menu",id:"menu",children:Object(o.jsxs)("nav",{children:[Object(o.jsx)("input",{type:"checkbox",id:"bt_menu"}),Object(o.jsxs)("label",{htmlFor:"bt_menu",children:[Object(o.jsx)("span",{children:"\u2630"}),Object(o.jsx)("span",{children:"\u2a2f"})]}),Object(o.jsx)("label",{id:"logo"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#inicio",children:"In\xedcio"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#sobre",children:"Sobre"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#projetos",children:"Projetos"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#contato",children:"Contato"})})]})]})})},l=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"row",id:"home",style:{backgroundImage:'url("images/bgHome.jpg")'},children:[Object(o.jsx)(r,{}),Object(o.jsxs)("div",{className:"col-md-10",children:[Object(o.jsx)("h1",{className:"text-center",children:"Renan Rodrigues"}),Object(o.jsxs)("h2",{className:"text-center",children:["{"," Desenvolvedor FullStack ","}"]})]})]})})},d=function(){return Object(o.jsxs)("footer",{className:"row",id:"contato",children:[Object(o.jsxs)("div",{className:"col-md-10 text-center",children:[Object(o.jsx)("h3",{className:"titulo",children:"Contato"}),Object(o.jsx)("a",{href:"https://github.com/RenanRodriguesdosSantos",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{className:"icon",alt:"",src:"images/icons/github.png"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/renan-rodrigues-164b5a1a1/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{className:"icon",alt:"",src:"images/icons/linkedin.png"})}),Object(o.jsx)("a",{href:"mailto:renanrodriguesdossantos123@gmail.com",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{className:"icon",alt:"",src:"images/icons/email.png"})})]}),Object(o.jsxs)("div",{className:"col-md-10",children:[Object(o.jsx)("h2",{className:"text-center",children:"S\xf3 os tolos sabem tudo, os s\xe1bios aprendem algo novo a cada dia!"}),Object(o.jsx)("h3",{className:"text-center",children:"Autor"})]}),Object(o.jsx)("div",{className:"col-md-10 text-center",children:"Desenvolvido por Renan Rodrigues \xa9 2021"})]})},j=i(4),m=function(e){return Object(o.jsxs)("div",{className:"row project",children:[Object(o.jsx)("h1",{className:"col-md-10 text-center",children:e.project.name}),Object(o.jsx)("div",{className:"col-md-5",children:Object(o.jsx)("img",{src:e.project.foto,alt:"imagem do projeto",className:"foto"})}),Object(o.jsx)("div",{className:"col-md-5 text-center",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-10 project-discription",children:e.project.discription}),Object(o.jsxs)("div",{className:"col-md-10 tecnologias",children:[Object(o.jsx)("h5",{children:"Tecnologias"}),Object(o.jsx)("div",{className:"row h-center",children:e.project.tecnologies.map((function(e,s){return Object(o.jsx)("div",{className:"col-md-1 div-icon",children:Object(o.jsx)("attr",{title:e.name,children:Object(o.jsx)("img",{className:"icon",src:e.icon,alt:e.name})})},s)}))})]}),Object(o.jsx)("div",{className:"col-md-10 div-link-gitHub",children:Object(o.jsx)("a",{className:"link-gitHub",target:"_blank",rel:"noreferrer",href:"https://github.com/RenanRodriguesdosSantos/"+e.project.repository,children:"Acessar o repositorio no GitHub"})})]})})]})},b=function(){return Object(o.jsxs)("div",{id:"projetos",children:[Object(o.jsx)("h1",{className:"titulo",children:"Projetos"}),Object(o.jsx)("div",{className:"container",children:j.map((function(e,s){return Object(o.jsx)(m,{project:e},s)}))})]})},h=function(){return Object(o.jsxs)("div",{id:"sobre",children:[Object(o.jsx)("h1",{className:"titulo",children:"Sobre"}),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-4",children:Object(o.jsx)("img",{id:"perfil",alt:"perfil",src:"images/perfil.jpg"})}),Object(o.jsx)("div",{className:"col-md-6 text-center",children:Object(o.jsxs)("div",{id:"div-sbm",children:["Ol\xe1! Sou o ",Object(o.jsx)("b",{children:"Renan Rodrigues"}),", Analista Programador de Sistema no final da forma\xe7\xe3o pelo IFNMG-Campus Te\xf3filo Otoni.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-md-4 ",children:[Object(o.jsx)("h3",{children:"Soft Skills"}),Object(o.jsxs)("ul",{className:"skills",children:[Object(o.jsx)("li",{children:"Adaptabilidade"}),Object(o.jsx)("li",{children:"Proatividade"}),Object(o.jsx)("li",{children:"Determina\xe7\xe3o"}),Object(o.jsx)("li",{children:"Curiosidade"}),Object(o.jsx)("li",{children:"\xc9tica"}),Object(o.jsx)("li",{children:"Empatia"})]})]}),Object(o.jsxs)("div",{className:"col-md-6",children:[Object(o.jsx)("h3",{children:"Hard Skills"}),Object(o.jsxs)("ul",{className:"skills",children:[Object(o.jsx)("li",{children:"JavaScript (React)"}),Object(o.jsx)("li",{children:"PHP (Laravel)"}),Object(o.jsx)("li",{children:"MySql"}),Object(o.jsx)("li",{children:"Padr\xe3o MVC"}),Object(o.jsx)("li",{children:"HTML e CSS"}),Object(o.jsx)("li",{children:"Git e GitHub"})]})]})]})]})})]})})]})};var g=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(h,{}),Object(o.jsx)(b,{}),Object(o.jsx)(d,{})]})};i(11);a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.60c67139.chunk.js.map