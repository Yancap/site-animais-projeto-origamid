(()=>{const e=document.querySelectorAll(".scroll"),t=document.querySelector(".load");window.addEventListener("load",(()=>{window.addEventListener("click",(e=>{const t=document.getElementById("menu-hamburguer"),n=document.querySelector(".menu-button");console.log(e.target);const o=e.target!=document.querySelector(".menu-button span:nth-child(1)")||e.target!=document.querySelector(".menu-button span:nth-child(2)")||document.querySelector(".menu-button span:nth-child(3)");e.target==t||e.target==n||"menu-active"!=n.classList[1]||e.target==document.querySelectorAll('a[href="#sobre.html"]')[1]||o||function(){const e=document.getElementById("menu-hamburguer"),t=document.querySelector(".menu-button");"none"!=e.style.display&&(e.style.animation="close-menu 0.5s forwards",document.querySelector("span:nth-child(1)").style.animation="close-right 0.5s forwards",document.querySelector("span:nth-child(3)").style.animation="close-left 0.5s forwards",setTimeout((()=>{t.classList.remove("menu-active"),e.style.display="none"}),200))}()}))})),function(){const e=document.querySelectorAll("[data-dropdown]");function t(){document.querySelectorAll(".dropdown-menu").forEach((e=>{e.style.display="block",e.style.animation="dropdownOpening 0.5s forwards"})),e.forEach((e=>{e.removeEventListener("click",t),e.addEventListener("click",n)}))}function n(o){document.querySelectorAll(".dropdown-menu").forEach((e=>{e.style.display="none"})),e.forEach((e=>{e.removeEventListener("click",n),e.addEventListener("click",t)}))}e.forEach((e=>{e.addEventListener("click",t)})),window.addEventListener("click",(e=>{let t=document.querySelectorAll('a[href="#sobre.html"]');e.target!=t[0]&&e.target!=t[1]&&n()}))}(),window.addEventListener("load",(function(){t.classList.add("active")})),document.querySelector(".menu-button").addEventListener("click",(function(){const e=document.getElementById("menu-hamburguer"),t=document.querySelector(".menu-button");"none"==e.style.display?(t.classList.toggle("menu-active"),document.querySelector("span:nth-child(1)").style.animation="open-right 0.5s forwards",document.querySelector("span:nth-child(3)").style.animation="open-left 0.5s forwards",e.style.animation="open-menu 0.5s forwards",e.style.display="flex"):(e.style.animation="close-menu 0.5s forwards",document.querySelector("span:nth-child(1)").style.animation="close-right 0.5s forwards",document.querySelector("span:nth-child(3)").style.animation="close-left 0.5s forwards",setTimeout((()=>{t.classList.toggle("menu-active"),e.style.display="none"}),200))})),window.addEventListener("scroll",(function(){e.forEach((e=>{e.getBoundingClientRect().top-.6*window.innerHeight<0&&e.classList.add("active")}))})),function(){const e=document.querySelector('a[data-target="modal-login"]'),t=document.querySelector('button[data-modal="close"]'),n=document.getElementById("modal-login");function o(e){if(this==e.target)try{let e=document.getElementById(this.dataset.target);e.style.animation="modalClosing 1s forwards",setTimeout((()=>{e.style.display="none"}),1e3)}catch{this.style.animation="modalClosing 1s forwards",setTimeout((()=>{this.style.display="none"}),1e3)}}e.addEventListener("click",(function(e){let t=document.getElementById(this.dataset.target);t.style.display="flex",t.style.animation="modalOpening 1s forwards"})),t.addEventListener("click",o),n.addEventListener("click",o)}(),function(){const e=document.querySelectorAll(".accordion dt");function t(t){e.forEach((e=>{e.nextElementSibling.style.display="none"})),this.nextElementSibling.style.display="block",this.nextElementSibling.style.animation="accordionDown 1s forwards"}e.forEach((e=>{e.addEventListener("click",t)}))}(),function(){const e=document.querySelectorAll(".animais-lista li"),t=document.querySelectorAll(".animais-descricao section");function n(e){let n=this.dataset.animal;t.forEach((e=>{e.style.display="none"})),document.querySelector(n).style.display="block",document.querySelector(n).style.animation="show .5s forwards"}e.forEach((e=>{e.addEventListener("click",n)}))}()})();