particlesJS("particles-js",{particles:{number:{value:100,density:{enable:!0,value_area:1e3}},color:{value:["#aa73ff","#f8c210","#83d238","#33b1f8"]},shape:{type:"circle",stroke:{width:0,color:"#fff"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.6,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:2,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:120,color:"#ffffff",opacity:.4,width:1}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!1},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});const index=document.getElementById("particles-js");if(index){const e=document.getElementById("name"),n=document.getElementById("stuck"),t=document.getElementById("myname");n.remove(),t.remove();((n,t)=>{e.innerHTML+='\n    <div class="wrappoffer d-flex"">\n      <h1 id="stuck" style="width: 100%;"></h1><span id="cursor1" class="cursor">|</span>\n    </div>   \n    <div class="wrappoffer d-flex"">\n      <h2 id="myname"></h2><span id="cursor2" class="cursor2">|</span>\n    </div>\n    ';let s=document.getElementById("cursor1"),i=document.getElementById("cursor2"),r=0;new Promise((e,t)=>{!function e(n){0==n&&setTimeout(()=>{s.classList.toggle("cursorhover"),0==r&&e(0)},200)}(r),setTimeout(()=>{!function t(i=0){setTimeout(()=>{let r=document.getElementById("stuck"),c=i;c<=n.length-1&&(r.innerHTML+=""+n[c],c=i+1,t(c)),c>n.length-1&&(s.style.visibility="hidden",s.classList.remove("cursorhover"),e())},200)}()},0)}).then(()=>{!function e(n){0==n&&setTimeout(()=>{i.classList.toggle("cursorhover2"),0==r&&e(0)},200)}(r),function e(n=0){setTimeout(()=>{let s=document.getElementById("myname"),c=n;c<=t.length-1&&(s.innerHTML+=""+t[c],c=n+1,e(c)),c>t.length-1&&(i.classList.remove("cursorhover2"),i.style.visibility="hidden",r=1)},200)}(0)})})(n.innerHTML.split(""),t.innerHTML.split(""))}else;const hamburger=document.getElementById("hamburger"),menu=document.getElementById("burger-menu"),closeBurger=document.getElementById("close-burger");hamburger.addEventListener("click",(function(){menu.classList.add("oppened")})),closeBurger.addEventListener("click",(function(){menu.classList.remove("oppened")}));