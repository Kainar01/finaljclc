(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{311:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(20),c=a.n(s),r=(a(56),a(27)),o=a(3),i=a(4),m=a(6),u=a(5),d=a(7),v=(a(57),a(2)),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={offset:0,bool:!1,linkVisible:!1,interval:0},a.handleScroll=a.handleScroll.bind(Object(v.a)(a)),a.handleBtn=a.handleBtn.bind(Object(v.a)(a)),a.handleLink=a.handleLink.bind(Object(v.a)(a)),a.handleClick=a.handleClick.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"handleClick",value:function(){document.getElementById("home").scrollIntoView()}},{key:"handleLink",value:function(e){var t=document.querySelector(".nav-ul"),a=document.querySelectorAll(".nav-link"),n=document.querySelector(".burger"),l=document.querySelector(".cross"),s=new Date;if(s-this.state.interval>900){if(this.setState({interval:s}),t.classList.toggle("nav-translate"),e.target.classList.contains("job")){var c=document.querySelector(".job-form");c.parentElement.classList.remove("hide"),c.classList.remove("hide")}else{var r="";e.target.classList.contains("home-link")?r="home":e.target.classList.contains("about-link")?r="about":e.target.classList.contains("contact-link")?r="contacts":e.target.classList.contains("feedback-link")&&(r="feedbacks"),document.getElementById(r).scrollIntoView()}for(var o=0;o<6;o++)a[o].classList.toggle("opacity"),a[o].classList.toggle("nav-translate");this.setState({linkVisible:!1}),l.style.transform="scale(0)",l.classList.contains("showed")&&l.classList.remove("showed"),n.classList.contains("hide")&&n.classList.remove("hide"),l.classList.toggle("hide"),n.classList.toggle("showed"),setTimeout((function(){n.style.transform="scale(1.5)"}),20),setTimeout((function(){n.style.transform="scale(1)"}),320)}}},{key:"handleBtn",value:function(){var e=document.querySelector(".nav-ul"),t=document.querySelectorAll(".nav-link"),a=document.querySelector(".burger"),n=document.querySelector(".cross"),l=new Date;if(l-this.state.interval>900)if(this.setState({interval:l}),e.classList.toggle("nav-translate"),this.state.linkVisible){for(var s=0;s<6;s++)t[s].classList.toggle("opacity"),t[s].classList.toggle("nav-translate");this.setState({linkVisible:!1}),n.style.transform="scale(0)",n.classList.contains("showed")&&n.classList.remove("showed"),a.classList.contains("hide")&&a.classList.remove("hide"),n.classList.toggle("hide"),a.classList.toggle("showed"),setTimeout((function(){a.style.transform="scale(1.5)"}),20),setTimeout((function(){a.style.transform="scale(1)"}),320)}else setTimeout((function(){for(var e=0;e<6;e++)!function(e){setTimeout((function(){t[e].classList.toggle("opacity"),t[e].classList.toggle("nav-translate")}),300*e)}(e)}),400),this.setState({linkVisible:!0}),a.style.transform="scale(1.5)",setTimeout((function(){a.style.transform="scale(0)"}),400),setTimeout((function(){a.classList.contains("showed")&&a.classList.remove("showed"),n.classList.contains("hide")&&n.classList.remove("hide"),a.classList.toggle("hide"),n.classList.toggle("showed"),setTimeout((function(){n.style.transform="scale(1)"}),0)}),900)}},{key:"handleScroll",value:function(){var e=this.state.offset,t=window.scrollY,a=document.querySelector(".nav");this.setState({offset:t,bool:t-e>0&&t>window.innerHeight-a.offsetHeight})}},{key:"UNSAFE_componentDidMount",value:function(){window.removeEventListener("scroll")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"fixed-top nav "+(this.state.bool?"hideNav bottom-shadow":"")+" "+(this.state.offset>0?"nav-yellow bottom-shadow":"")},l.a.createElement("a",{onClick:this.handleClick,className:"text-dark logo ml-2 "},"JCLC"),l.a.createElement("button",{onClick:this.handleBtn,className:"button"},l.a.createElement("i",{className:"fas fa-hamburger burger"}),l.a.createElement("i",{className:"las la-times cross hide"})),l.a.createElement("ul",{className:"nav-ul"},l.a.createElement("a",null,l.a.createElement("span",{onClick:this.handleLink,className:"btn nav-link home-link"}," \u0413\u043b\u0430\u0432\u043d\u0430\u044f")),l.a.createElement("a",null,l.a.createElement("span",{onClick:this.handleLink,className:"btn nav-link about-link"}," \u041e \u041d\u0430\u0441")),l.a.createElement("a",null,l.a.createElement("span",{onClick:this.handleLink,className:"btn nav-link contact-link"}," \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b")),l.a.createElement("a",null,l.a.createElement("span",{onClick:this.handleLink,className:"btn nav-link feedback-link"}," \u041e\u0442\u0437\u044b\u0432\u044b")),l.a.createElement("a",null,l.a.createElement("span",{onClick:this.handleLink,className:"btn nav-link job"}," \u0412\u0430\u043a\u0430\u043d\u0441\u0438\u0438")),l.a.createElement("a",{href:"/faq.html"},l.a.createElement("span",{onClick:this.handleLink,className:"btn nav-link"}," FAQ")))))}}]),t}(l.a.Component),h=a(21),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){var e=document.querySelector(".just-form");e.parentElement.classList.remove("hide"),e.classList.remove("hide")}},{key:"render",value:function(){return l.a.createElement("div",{className:"home-container"},l.a.createElement("h3",{className:"intro-header "},"\u041a\u0443\u0440\u0441\u044b \u044f\u043f\u043e\u043d\u0441\u043a\u043e\u0433\u043e \u0438 \u043a\u0438\u0442\u0430\u0439\u0441\u043a\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430 \u0432 \u0410\u0441\u0442\u0430\u043d\u0435"),l.a.createElement("p",{className:"intro-p"},"\u0417\u0430\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u0411\u0415\u0421\u041f\u041b\u0410\u0422\u041d\u042b\u0419 \u043f\u0440\u043e\u0431\u043d\u044b\u0439 \u0443\u0440\u043e\u043a \u0441 \u043d\u043e\u0441\u0438\u0442\u0435\u043b\u0435\u043c \u044f\u0437\u044b\u043a\u0430!"),l.a.createElement(h.a,{onClick:this.handleClick,className:"btn btn-lg btn-primary "},"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f "))}}]),t}(l.a.Component),p=a(28),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){document.querySelector("."+this.props.bg+"-section").scrollIntoView()}},{key:"render",value:function(){return l.a.createElement(p.a,{text:"white",className:"border-0 d-flex flex-column justify-content-center align-items-center text-center "+this.props.bg+"-bg"},l.a.createElement(p.a.Title,null,l.a.createElement("h2",null,this.props.language)),l.a.createElement("p",null,"\u041a\u0443\u0440\u0441\u044b "," "," ",this.props.learn," "," ","\u044f\u0437\u044b\u043a\u0430"),l.a.createElement("footer",null,l.a.createElement("a",null,l.a.createElement(h.a,{onClick:this.handleClick,className:"btn-action"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))))}}]),t}(l.a.Component),E=a(13),y=a(11),k=a(43),N=a.n(k),j=a(44),w=a.n(j);var S=function(){var e=Object(n.useState)(0),t=Object(E.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(null),r=Object(E.a)(c,2),o=r[0],i=r[1];return l.a.createElement(y.a,{className:"carousel ",activeIndex:a,direction:o,onSelect:function(e,t){s(e),i(t.direction)}},l.a.createElement(y.a.Item,null,l.a.createElement("img",{className:"d-block w-100 h-50 hsk",src:w.a,alt:"First slide"}),l.a.createElement(y.a.Caption,null,l.a.createElement("h3",{className:"text-black"},"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a HSK"),l.a.createElement("p",null," \u042d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u043c\u0435\u0442\u043e\u0434\u0438\u043a\u0430 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u043a HSK"))),l.a.createElement(y.a.Item,null,l.a.createElement("img",{className:"d-block w-100 h-50 ch-bb",src:N.a,alt:"Second slide"}),l.a.createElement(y.a.Caption,null,l.a.createElement("h3",null,"\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440\u043d\u044b\u0439 \u043a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439"),l.a.createElement("p",null,"\u0423 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u043e\u0432\u044b\u0435 \u0438 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0443\u0440\u043e\u043a\u0438 \u043e\u0431\u0449\u0435\u0433\u043e \u043a\u0438\u0442\u0430\u0439\u0441\u043a\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430!"))))},O=a(48),C=a(45),L=a.n(C),x=a(46),q=a.n(x),T=a(47),z=a.n(T);var I=function(){var e=Object(n.useState)(0),t=Object(E.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(null),r=Object(E.a)(c,2),o=r[0],i=r[1];return l.a.createElement(y.a,{className:"carousel ",activeIndex:a,direction:o,onSelect:function(e,t){s(e),i(t.direction)}},l.a.createElement(y.a.Item,null,l.a.createElement("img",{className:"d-block w-100 h-50 jlpt",src:z.a,alt:"First slide"}),l.a.createElement(y.a.Caption,null,l.a.createElement("h3",{className:"text-black"},"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043a JLPT"),l.a.createElement("p",null,"\u041c\u044b \u043f\u043e\u043c\u043e\u0436\u0435\u043c \u0432\u0430\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0436\u0435\u043b\u0430\u0435\u043c\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u043e JLPT!"))),l.a.createElement(y.a.Item,null,l.a.createElement("img",{className:"d-block w-100 h-50",src:q.a,alt:"Second slide"}),l.a.createElement(y.a.Caption,null,l.a.createElement("h3",null,"\u041e\u0431\u0449\u0438\u0439 \u044f\u043f\u043e\u043d\u0441\u043a\u0438\u0439"),l.a.createElement("p",null,"\u0421 \u043d\u0430\u043c\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0431\u044b\u0441\u0442\u0440\u043e \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u043d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u043d\u0430 \u044f\u043f\u043e\u043d\u0441\u043a\u043e\u043c!"))),l.a.createElement(y.a.Item,null,l.a.createElement("img",{className:"d-block w-100 h-50",src:L.a,alt:"Third slide"}),l.a.createElement(y.a.Caption,null,l.a.createElement("h3",null,"\u0420\u0430\u0437\u043d\u044b\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f"),l.a.createElement("p",null,"\u041c\u044b \u0443\u0447\u0438\u043c \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u044f\u0437\u044b\u043a. \u041c\u044b \u0447\u0430\u0441\u0442\u043e \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043c \u0440\u0430\u0437\u043d\u044b\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f, \u0433\u0434\u0435 \u0443\u0447\u0435\u043d\u0438\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0443\u0437\u043d\u0430\u0442\u044c \u043c\u043d\u043e\u0433\u043e\u0435 \u043f\u0440\u043e \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u0438 \u042f\u043f\u043e\u043d\u0438\u0438."))))},F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){var t="";e.target.classList.contains("jp-btn")?t="jp-form":e.target.classList.contains("ch-btn")&&(t="ch-form");var a=document.querySelector(".".concat(t));a.parentElement.classList.remove("hide"),a.classList.remove("hide")}},{key:"render",value:function(){return l.a.createElement("div",{className:"about",id:"about"},l.a.createElement("div",{className:"d-flex  flex-column justify-content-center align-items-center cards"},l.a.createElement("div",{className:"card-container d-flex  flex-column text-center"},l.a.createElement("h2",{className:"mt-4  text-center about-intro"}," \u0423 \u043d\u0430\u0441 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0443\u0447\u0438\u0442\u044c \u042f\u043f\u043e\u043d\u0441\u043a\u0438\u0439 \u0438 \u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a!"),l.a.createElement(O.a,null,l.a.createElement(f,{learn:"\u044f\u043f\u043e\u043d\u0441\u043a\u043e\u0433\u043e",language:"Japanese",bg:"jp"}),l.a.createElement(f,{learn:"\u043a\u0438\u0442\u0430\u0439\u0441\u043a\u043e\u0433\u043e",language:"Chinese",bg:"ch"})))),l.a.createElement("div",{className:"jp jp-section",id:"jp"},l.a.createElement("div",{className:"jp-container"},l.a.createElement("h4",{className:"mb-4 mt-4"},"\u0417\u0430\u0447\u0435\u043c \u0443\u0447\u0438\u0442\u044c \u044f\u043f\u043e\u043d\u0441\u043a\u0438\u0439?"),l.a.createElement("p",{className:"mb-4 mt-4 "},"\u0418\u0437\u0443\u0447\u0438\u0432 \u044f\u043f\u043e\u043d\u0441\u043a\u0438\u0439 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0436\u0438\u0442\u044c,\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0438 \u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0432 \u042f\u043f\u043e\u043d\u0438\u0438. \u042f\u043f\u043e\u043d\u0441\u043a\u0438\u0435 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u044b \u2013 \u043e\u0434\u043d\u0438 \u0438\u0437 \u043b\u0443\u0447\u0448\u0438\u0445 \u0432 \u043c\u0438\u0440\u0435, \u0441\u0440\u0430\u0437\u0443 \u043f\u044f\u0442\u044c \u0438\u0437 \u043d\u0438\u0445 \u0432\u043e\u0448\u043b\u043e \u0432 \u0422\u043e\u043f-100 \u0432\u0443\u0437\u043e\u0432 \u043c\u0438\u0440\u0430. \u0410 \u0431\u0430\u0440\u044c\u0435\u0440\u043e\u043c \u0434\u043b\u044f \u043d\u0430\u0448\u0438\u0445 \u043f\u043e\u0435\u0445\u0430\u0442\u044c \u0442\u0443\u0434\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u044f\u0437\u044b\u043a. \u0418 \u043d\u0430\u0448 \u0446\u0435\u043d\u0442\u0440 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0441\u043b\u043e\u043c\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0431\u0430\u0440\u044c\u0435\u0440!")),l.a.createElement("div",{className:"enroll-lang"},l.a.createElement("button",{onClick:this.handleClick,className:"jp-btn btn btn-primary m-3"},"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u044f\u043f\u043e\u043d\u0441\u043a\u0438\u0439")),l.a.createElement(I,null)),l.a.createElement("div",{className:"jp ch-section",id:"ch"},l.a.createElement("div",{className:"jp-container"},l.a.createElement("h4",{className:"mb-4 mt-4"},"\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043d\u0443\u0436\u043d\u043e \u0437\u043d\u0430\u0442\u044c!"),l.a.createElement("p",{className:"mb-4 mt-4 "},"\u0412 \u043d\u0430\u0448\u0438 \u0434\u043d\u0438 \u0437\u043d\u0430\u043d\u0438\u0435 \u043a\u0438\u0442\u0430\u0439\u0441\u043a\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430 \u043e\u0442\u043a\u0440\u043e\u0430\u0435\u0442 \u0432\u0430\u043c \u043c\u043d\u043e\u0433\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0432 \u041a\u0438\u0442\u0430\u0435 \u0438 \u0431\u0438\u0437\u043d\u0435\u0441 \u0441 \u041a\u0438\u0442\u0430\u0435\u043c. \u0418 \u0443 \u043d\u0430\u0441 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u043e\u0439\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043a\u0438\u0442\u0430\u0439\u0441\u043a\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430!")),l.a.createElement("div",{className:"enroll-lang"},l.a.createElement("button",{onClick:this.handleClick,className:"ch-btn btn btn-primary m-3"},"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439")),l.a.createElement(S,null)))}}]),t}(l.a.Component),P=(a(58),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={hidden:!0},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;window.addEventListener("scroll",(function(t){window.scrollY>window.innerHeight&&e.state.hidden?e.setState({hidden:!1}):window.scrollY<window.innerHeight&&e.setState({hidden:!0})}))}},{key:"handleClick",value:function(){document.getElementById("home").scrollIntoView()}},{key:"UNSAFE_componentDidMount",value:function(){window.removeEventListener("scroll")}},{key:"render",value:function(){return l.a.createElement("a",{onClick:this.handleClick},l.a.createElement("button",{type:"submit",className:"upp btn btn-primary "+(this.state.hidden?"hide":"")},l.a.createElement("i",{className:"fas fa-arrow-up"})))}}]),t}(l.a.Component)),A=a(50),D=(a(291),a(17)),B=a.n(D),J=(a(292),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={value:""},a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a.handleClick=a.handleClick.bind(Object(v.a)(a)),a.handleChild=a.handleChild.bind(Object(v.a)(a)),a.onSelectFlag=a.onSelectFlag.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"onSelectFlag",value:function(e){document.getElementById("country").value=e,document.querySelector(".selected--flag--option").click()}},{key:"handleClick",value:function(e){var t,a=document.getElementById("contact-container");document.querySelectorAll(".contact-form").forEach((function(e){e.classList.contains("hide")||(t=e)})),t.classList.add("hide"),a.classList.add("hide")}},{key:"handleChild",value:function(e){e.stopPropagation()}},{key:"handleSubmit",value:function(e){var t=document.querySelector(".form-success");t.classList.add("form-show"),this.timer=setTimeout((function(){t.classList.remove("form-show")}),3e3)}},{key:"UNSAFE_componentDidMount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{onClick:this.handleClick,id:"contact-container",className:"contact-container hide"},l.a.createElement("form",{onClick:this.handleChild,onSubmit:this.handleSubmit,method:"POST",action:"php/send.php",className:"contact-form jp-form hide"},l.a.createElement("h5",{className:"text-center p-3 mb-2 mt-2 w-75 ml-auto mr-auto"},"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u044f\u0432\u043a\u0443 \u043d\u0430 \u043f\u0440\u043e\u0431\u043d\u044b\u0439 \u0443\u0440\u043e\u043a!"),l.a.createElement("input",{type:"text",name:"myName",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f...",className:"form-control ",required:!0}),l.a.createElement(B.a,{inputProps:{name:"myTel"},type:"tel",disableDropdown:!0,country:"kz",onlyCountries:["kz"],value:this.state.value,onChange:function(t){return e.setState({value:t})}}),l.a.createElement("input",{type:"text",id:"website",name:"website"}),l.a.createElement("input",{type:"hidden",name:"action",value:"Japanese"}),l.a.createElement("button",{type:"submit",name:"btn",value:"Send",className:"contact btn btn-primary m-4"},"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 ")),l.a.createElement("form",{onClick:this.handleChild,onSubmit:this.handleSubmit,method:"POST",action:"php/send.php",className:"contact-form just-form hide"},l.a.createElement("h5",{className:"text-center p-3 mb-2 mt-2 w-75 ml-auto mr-auto"},"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u044f\u0432\u043a\u0443 \u043d\u0430 \u043f\u0440\u043e\u0431\u043d\u044b\u0439 \u0443\u0440\u043e\u043a!"),l.a.createElement(A.a,{countries:["JP","CN"],customLabels:{JP:"\u042f\u043f\u043e\u043d\u0441\u043a\u0438\u0439",CN:"\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439"},onSelect:this.onSelectFlag,defaultCountry:"JP"}),l.a.createElement("input",{type:"text",name:"myName",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f...",className:"form-control ",required:!0}),l.a.createElement(B.a,{inputProps:{name:"myTel"},type:"tel",name:"myTel",disableDropdown:!0,country:"kz",onlyCountries:["kz"],value:this.state.value,onChange:function(t){return e.setState({value:t})}}),l.a.createElement("input",{type:"text",id:"website",name:"website"}),l.a.createElement("input",{type:"hidden",id:"country",name:"action",value:"JP"}),l.a.createElement("button",{type:"submit",name:"btn",value:"Send",className:"contact btn btn-primary m-4"},"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 ")),l.a.createElement("form",{onClick:this.handleChild,onSubmit:this.handleSubmit,method:"POST",action:"php/send.php",className:"contact-form ch-form hide"},l.a.createElement("h5",{className:"text-center p-3 mb-2 mt-2 w-75 ml-auto mr-auto"},"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u044f\u0432\u043a\u0443 \u043d\u0430 \u043f\u0440\u043e\u0431\u043d\u044b\u0439 \u0443\u0440\u043e\u043a!"),l.a.createElement("input",{type:"text",name:"myName",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f...",className:"form-control ",required:!0}),l.a.createElement(B.a,{inputProps:{name:"myTel"},type:"tel",disableDropdown:!0,country:"kz",onlyCountries:["kz"],value:this.state.value,onChange:function(t){return e.setState({value:t})}}),l.a.createElement("input",{type:"text",id:"website",name:"website"}),l.a.createElement("input",{type:"hidden",name:"action",value:"Chinese"}),l.a.createElement("button",{type:"submit",name:"btn",value:"Send",className:"contact btn btn-primary m-4"},"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443 ")),l.a.createElement("form",{onClick:this.handleChild,onSubmit:this.handleSubmit,className:"job-form contact-form hide",method:"POST",action:"php/email.php"},l.a.createElement("h5",{className:"text-center text-center p-3 mb-2 mt-2 w-75 ml-auto mr-auto "},"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u044f\u0432\u043a\u0443 \u0435\u0441\u043b\u0438 \u0445\u043e\u0442\u0438\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432 \u043d\u0430\u0448\u0435\u043c \u0446\u0435\u043d\u0442\u0440\u0435!"),l.a.createElement("input",{type:"text",name:"myName",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f...",className:"form-control"}),l.a.createElement("input",{type:"text",name:"myEmail",className:"form-control",placeholder:"\u0412\u0430\u0448\u0430 \u043f\u043e\u0447\u0442\u0430...",required:!0}),l.a.createElement("input",{type:"text",id:"website",name:"website"}),l.a.createElement(B.a,{inputProps:{name:"myTel"},type:"tel",disableDropdown:!0,country:"kz",onlyCountries:["kz"],value:this.state.value,onChange:function(t){return e.setState({value:t})}}),l.a.createElement("textarea",{cols:"40",rows:"5",name:"myMessage",className:"form-control",placeholder:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u0430\u0441 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442?",required:!0}),l.a.createElement("button",{type:"submit",className:"contact btn btn-primary mb-4"}," \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))}}]),t}(l.a.Component)),_=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"contacts page-footer center-on-small-only text-center ",id:"contacts"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4 col-md-6 ml-auto"},l.a.createElement("h5",{className:"title mb-3"},l.a.createElement("strong",null,"\u041e \u043d\u0430\u0441")),l.a.createElement("p",{className:"lead"},"\u042f\u043f\u043e\u043d\u0441\u043a\u043e-\u043a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a\u043e\u0432\u043e\u0439 \u0446\u0435\u043d\u0442\u0440"),l.a.createElement("p",null,"\u0432 \u0410\u0441\u0442\u0430\u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441 2013 \u0433\u043e\u0434\u0430. \u041d\u0430\u0448 \u0446\u0435\u043d\u0442\u0440 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u044f\u043f\u043e\u043d\u0441\u043a\u043e\u043c\u0443 \u0438 \u043a\u0438\u0442\u0430\u0439\u0441\u043a\u043e\u043c\u0443 \u044f\u0437\u044b\u043a\u0443, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0430\u0435\u0442 \u0441 \u044f\u0437\u044b\u043a\u043e\u0432\u044b\u043c\u0438 \u0448\u043a\u043e\u043b\u0430\u043c\u0438 \u0432 \u042f\u043f\u043e\u043d\u0438\u0438.")),l.a.createElement("hr",{className:"w-100 clearfix d-sm-none"}),l.a.createElement("div",{className:"col-xl-4 ml-auto col-lg-4 mt-2 mb-1 col-md-6 wow fadeIn","data-wow-delay":"0.3s"},l.a.createElement("h5",{className:"title"},l.a.createElement("strong",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b")),l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-home mr-3"}),' \u0410\u0441\u0442\u0430\u043d\u0430, \u0443\u043b.\u0421\u0430\u0440\u044b\u0430\u0440\u043a\u0430 3/1, \u0411\u0426 "\u0411\u043e\u043b\u0430\u0448\u0430\u043a", \u043e\u0444\u0438\u0441 401.'),l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-envelope mr-3"})," jclc.ast@mail.ru"),l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-phone mr-3"})," +7\u2013777\u2013305\u201308\u201336"),l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-phone mr-3"})," +7\u2013701\u2013305\u201301\u201388")),l.a.createElement("hr",{className:"w-100 clearfix d-sm-none"}),l.a.createElement("div",{className:"col-xl-3 ml-auto col-lg-4 mt-2 mb-1 col-md-6 wow fadeIn","data-wow-delay":"0.3s"},l.a.createElement("h5",{className:"title mb-2"},l.a.createElement("strong",null,"\u0433\u0440\u0430\u0444\u0438\u043a \u0440\u0430\u0431\u043e\u0442\u044b")),l.a.createElement("table",{className:"table footer-table text-center"},l.a.createElement("tbody",{className:"text-white"},l.a.createElement("tr",null,l.a.createElement("td",null,"\u041f\u043d - \u041f\u0442:"),l.a.createElement("td",null,"9.00 - 21.00")),l.a.createElement("tr",null,l.a.createElement("td",null,"\u0421\u0431 - \u0412\u0441:"),l.a.createElement("td",null,"10.00 - 19.00"))))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"footer-copyright"},l.a.createElement("div",{className:"container-fluid"},"\xa9 2020 Copyright: ",l.a.createElement("a",{href:"#home",className:"text-white"}," \u042f\u043f\u043e\u043d\u0441\u043a\u043e-\u043a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a\u043e\u0432\u043e\u0439 \u0446\u0435\u043d\u0442\u0440"))),l.a.createElement("div",{className:"contact-card"},l.a.createElement(J,null)))}}]),t}(l.a.Component),M=a(49),U=a.n(M),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(){var e=document.querySelector(".form-success");e.classList.add("form-show"),this.timer=setTimeout((function(){e.classList.remove("form-show")}),3e3)}},{key:"render",value:function(){return l.a.createElement("div",{className:"ml-auto mr-auto mt-4"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-12 col-md-8 col-lg-6 pb-5"},l.a.createElement("form",{onSubmit:this.handleSubmit,action:"php/mail.php",method:"post"},l.a.createElement("div",{className:"card border-primary rounded-0"},l.a.createElement("div",{className:"card-header p-0"},l.a.createElement("div",{className:"bg-info text-white text-center py-2"},l.a.createElement("h3",null,l.a.createElement("i",{className:"fa fa-envelope"})," \u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043e\u0442\u0437\u044b\u0432\u044b"),l.a.createElement("p",{className:"m-0"},"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043e \u043d\u0430\u0448\u0435\u043c \u0446\u0435\u043d\u0442\u0440\u0435 \u0435\u0441\u043b\u0438 \u0435\u0441\u0442\u044c \u0447\u0442\u043e \u0441\u043a\u0430\u0437\u0430\u0442\u044c!"))),l.a.createElement("div",{className:"card-body p-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"input-group mb-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},l.a.createElement("i",{className:"fa fa-user text-info"}))),l.a.createElement("input",{type:"text",className:"form-control",name:"name",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f...",required:!0}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"input-group mb-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},l.a.createElement("i",{className:"fa fa-comment text-info"}))),l.a.createElement("textarea",{className:"form-control",placeholder:"\u0412\u0430\u0448 \u043e\u0442\u0437\u044b\u0432...",name:"feedback",required:!0}))),l.a.createElement("input",{type:"text",id:"website",name:"website"}),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{type:"submit",className:"btn btn-info btn-block rounded-0 py-2"},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"))))))))}}]),t}(l.a.Component);function H(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(0),r=Object(E.a)(c,2),o=r[0],i=r[1],m=Object(n.useState)(0),u=Object(E.a)(m,2),d=u[0],v=u[1],g=Object(n.useState)(!1),h=Object(E.a)(g,2),b=h[0],p=h[1];Object(n.useEffect)((function(){if(!b){U.a.get("https://jclc.kz/php/mysql.php").then((function(e){var t=e.data;s(t),t&&p(!0)})).catch((function(e){console.log(e)}));var e=document.querySelectorAll(".card.mb-4");e.length>0&&p(!0);var t=o;o<e.length&&(o+3<=e.length?t+=3:o+2<=e.length?t+=2:o+1<=e.length&&(t+=1)),t>3?document.querySelector(".btn-load-less").style.display="block":t<=3&&(document.querySelector(".btn-load-less").style.display="none"),t+1>e.length||o===e.length?document.querySelector(".btn-load-more").style.display="none":document.querySelector(".btn-load-more").style.display="block";for(var a=0;a<e.length;a++)a>=t&&!e[a].classList.contains("hide")?e[a].classList.add("hide"):a<t&&e[a].classList.contains("hide")&&e[a].classList.remove("hide");i(t),v(e.length-t)}}));var f=function(e){var t=document.querySelectorAll(".card.mb-4"),a=o;e.target===document.querySelector(".btn-load-more")&&o<t.length&&(o+3<=t.length?a+=3:o+2<=t.length?a+=2:o+1<=t.length&&(a+=1)),e.target===document.querySelector(".btn-load-less")&&(a=3);for(var n=0;n<t.length;n++)n>=a&&!t[n].classList.contains("hide")?t[n].classList.add("hide"):n<a&&t[n].classList.contains("hide")&&t[n].classList.remove("hide");a===t.length?document.querySelector(".btn-load-more").style.display="none":document.querySelector(".btn-load-more").style.display="block",document.querySelector(".btn-load-less").style.display=a>3?"block":"none",i(a),v(t.length-a)};return l.a.createElement("div",{className:"container-fluid",id:"feedbacks"},l.a.createElement(V,null),l.a.createElement("div",{className:"card-deck",dangerouslySetInnerHTML:{__html:a}}),l.a.createElement("button",{onClick:f,className:"btn-load-less btn btn-primary m-3"},"\u041c\u0435\u043d\u044c\u0448\u0435... "),l.a.createElement("button",{onClick:f,className:"btn-load-more btn btn-primary m-3"},"\u0415\u0449\u0435 ",d,"..."))}var W=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"position-fixed  mt-5 form-success alert alert-success"},l.a.createElement("strong",null,"\u0417\u0430\u044f\u0432\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430!")),l.a.createElement("div",{id:"home",className:"home d-flex  justify-content-center align-items-center"},l.a.createElement(b,null)),l.a.createElement("div",{className:"yellow-bg  justify-center "},l.a.createElement("h6",{className:"m-auto"},"10% \u0441\u043a\u0438\u0434\u043a\u0430 \u043d\u0430 \u043f\u0435\u0440\u0432\u044b\u0439 \u043c\u0435\u0441\u044f\u0446 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u0430!")),l.a.createElement("div",null,l.a.createElement(F,null)),l.a.createElement(P,null),l.a.createElement(H,null),l.a.createElement(_,null))},K=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={code:[75,65,83,72,79,75],try:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;document.addEventListener("keydown",(function(t){if(e.state.try.length<e.state.code.length)e.setState({try:[].concat(Object(r.a)(e.state.try),[t.which])});else{e.setState({try:[].concat(Object(r.a)(e.state.try.slice(1)),[t.which])});for(var a=0;a<e.state.try.length&&e.state.try[a]===e.state.code[a];a++)a===e.state.try.length-1&&(window.location.href="https://jclc.kz/kashok.html")}}))}},{key:"UNSAFE_componentDidMount",value:function(){document.removeEventListener("keydown")}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g,null),l.a.createElement(W,null))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(310);c.a.render(l.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},33:function(e,t,a){var n={"./ad.svg":69,"./ae.svg":70,"./af.svg":71,"./ag.svg":72,"./ai.svg":73,"./al.svg":74,"./am.svg":75,"./ao.svg":76,"./ar.svg":77,"./as.svg":78,"./at.svg":79,"./au.svg":80,"./aw.svg":81,"./az.svg":82,"./ba.svg":83,"./bb.svg":84,"./bd.svg":85,"./be.svg":86,"./bf.svg":87,"./bg.svg":88,"./bh.svg":89,"./bi.svg":90,"./bj.svg":91,"./bm.svg":92,"./bo.svg":93,"./br.svg":94,"./bs.svg":95,"./bt.svg":96,"./bw.svg":97,"./by.svg":98,"./bz.svg":99,"./ca.svg":100,"./cd.svg":101,"./cf.svg":102,"./cg.svg":103,"./ch.svg":104,"./ci.svg":105,"./ck.svg":106,"./cl.svg":107,"./cm.svg":108,"./cn.svg":109,"./co.svg":110,"./cr.svg":111,"./cu.svg":112,"./cv.svg":113,"./cw.svg":114,"./cy.svg":115,"./cz.svg":116,"./de.svg":117,"./dj.svg":118,"./dk.svg":119,"./dm.svg":120,"./do.svg":121,"./dz.svg":122,"./ec.svg":123,"./ee.svg":124,"./eg.svg":125,"./er.svg":126,"./es.svg":127,"./et.svg":128,"./fi.svg":129,"./fj.svg":130,"./fk.svg":131,"./fm.svg":132,"./fo.svg":133,"./fr.svg":134,"./ga.svg":135,"./gb.svg":136,"./gd.svg":137,"./ge.svg":138,"./gg.svg":139,"./gh.svg":140,"./gi.svg":141,"./gl.svg":142,"./gm.svg":143,"./gn.svg":144,"./gq.svg":145,"./gr.svg":146,"./gt.svg":147,"./gu.svg":148,"./gw.svg":149,"./hk.svg":150,"./hn.svg":151,"./hr.svg":152,"./ht.svg":153,"./hu.svg":154,"./id.svg":155,"./ie.svg":156,"./il.svg":157,"./im.svg":158,"./in.svg":159,"./io.svg":160,"./iq.svg":161,"./ir.svg":162,"./is.svg":163,"./it.svg":164,"./je.svg":165,"./jm.svg":166,"./jo.svg":167,"./jp.svg":168,"./ke.svg":169,"./kg.svg":170,"./kh.svg":171,"./ki.svg":172,"./km.svg":173,"./kn.svg":174,"./kp.svg":175,"./kr.svg":176,"./kw.svg":177,"./ky.svg":178,"./kz.svg":179,"./la.svg":180,"./lb.svg":181,"./li.svg":182,"./lk.svg":183,"./lr.svg":184,"./ls.svg":185,"./lt.svg":186,"./lu.svg":187,"./lv.svg":188,"./ly.svg":189,"./ma.svg":190,"./mc.svg":191,"./md.svg":192,"./me.svg":193,"./mg.svg":194,"./mh.svg":195,"./mk.svg":196,"./ml.svg":197,"./mm.svg":198,"./mn.svg":199,"./mo.svg":200,"./mp.svg":201,"./mq.svg":202,"./mr.svg":203,"./ms.svg":204,"./mt.svg":205,"./mu.svg":206,"./mv.svg":207,"./mw.svg":208,"./mx.svg":209,"./my.svg":210,"./mz.svg":211,"./na.svg":212,"./nato.svg":213,"./ne.svg":214,"./nf.svg":215,"./ng.svg":216,"./ni.svg":217,"./nl.svg":218,"./no.svg":219,"./np.svg":220,"./nr.svg":221,"./nu.svg":222,"./nz.svg":223,"./om.svg":224,"./pa.svg":225,"./pe.svg":226,"./pf.svg":227,"./pg.svg":228,"./ph.svg":229,"./pk.svg":230,"./pl.svg":231,"./pn.svg":232,"./pr.svg":233,"./ps.svg":234,"./pt.svg":235,"./pw.svg":236,"./py.svg":237,"./qa.svg":238,"./ro.svg":239,"./rs.svg":240,"./ru.svg":241,"./rw.svg":242,"./sa.svg":243,"./sb.svg":244,"./sc.svg":245,"./sd.svg":246,"./se.svg":247,"./sg.svg":248,"./si.svg":249,"./sk.svg":250,"./sl.svg":251,"./sm.svg":252,"./sn.svg":253,"./so.svg":254,"./sr.svg":255,"./ss.svg":256,"./st.svg":257,"./sv.svg":258,"./sx.svg":259,"./sy.svg":260,"./sz.svg":261,"./tc.svg":262,"./td.svg":263,"./tg.svg":264,"./th.svg":265,"./tibet.svg":266,"./tj.svg":267,"./tk.svg":268,"./tm.svg":269,"./tn.svg":270,"./to.svg":271,"./tr.svg":272,"./tt.svg":273,"./tv.svg":274,"./tw.svg":275,"./tz.svg":276,"./ua.svg":277,"./ug.svg":278,"./us.svg":279,"./uy.svg":280,"./uz.svg":281,"./ve.svg":282,"./vi.svg":283,"./vn.svg":284,"./vu.svg":285,"./ws.svg":286,"./ye.svg":287,"./za.svg":288,"./zm.svg":289,"./zw.svg":290};function l(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=s,e.exports=l,l.id=33},43:function(e,t,a){e.exports=a.p+"static/media/chinese-blackboard.e74daaaa.png"},44:function(e,t,a){e.exports=a.p+"static/media/HSK-logo.10790b65.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/tea.37a3e9be.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/kanji1.52424017.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/jlpt.f7fbc38c.jpg"},51:function(e,t,a){e.exports=a(311)},56:function(e,t,a){},57:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.bd1cb11e.chunk.js.map