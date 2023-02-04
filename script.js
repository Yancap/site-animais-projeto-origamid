/* eslint-disable */ 
function tabMenu(){
    const imagesAnimals = document.querySelectorAll(".animais-lista li");
    const descriptionAnimals = document.querySelectorAll(".animais-descricao section");
    function showDescription(event) {
        let animalId = this.dataset.animal;
        descriptionAnimals.forEach((animals) =>{
            animals.style.display = "none";
        })
        document.querySelector(animalId).style.display = "block";
        document.querySelector(animalId).style.animation = "show .5s forwards";
    }
    imagesAnimals.forEach((images) => {
        images.addEventListener('click', showDescription);
    })
}
function accordion(){
    const accordion = document.querySelectorAll(".accordion dt")
    
    function activeAccordion(event){
        accordion.forEach((item) => {
            item.nextElementSibling.style.display = "none"
        })
        this.nextElementSibling.style.display = "block"
        this.nextElementSibling.style.animation = "accordionDown 1s forwards"
       
    }

    accordion.forEach((item) => {
        item.addEventListener("click", activeAccordion)
    })
}

const sections = document.querySelectorAll(".scroll")

function showSectionScrolled(){
  sections.forEach((section)=>{
    const topSection = section.getBoundingClientRect().top - (window.innerHeight * 0.6)
    if(topSection < 0){
        section.classList.add("active")
    }

  })
}

const index = document.querySelector(".load")
function showIndex(){
    index.classList.add("active")
}


// ------------- MODAL --------------------

function modal(){
    const btnOpen = document.querySelector('a[data-target="modal-login"]')
    const btnClose = document.querySelector('button[data-modal="close"]')
    const modal = document.getElementById("modal-login")
    function openModal(event){
        let element = document.getElementById(this.dataset.target)
        element.style.display = "flex"
        element.style.animation = "modalOpening 1s forwards"
    }
    function closeModal(event){
        
        if(this == event.target){
        
            try{
                let element = document.getElementById(this.dataset.target)
                element.style.animation = "modalClosing 1s forwards"
                setTimeout(()=>{
                    element.style.display = "none"
                }, 1000)
            } catch{
                this.style.animation = "modalClosing 1s forwards"
                setTimeout(()=>{
                    this.style.display = "none"
                }, 1000)
            }
            
        }
        
        
    }
    btnOpen.addEventListener('click', openModal)
    btnClose.addEventListener('click', closeModal)
    modal.addEventListener('click', closeModal)
}


// ----------------------------- DropDown -----------------------------

function dropdown(){
    const dropdown = document.querySelectorAll("[data-dropdown]")
    function openDropdown(){
        const menu = document.querySelectorAll(".dropdown-menu")
        menu.forEach((m)=>{
            m.style.display = "block"
            m.style.animation = "dropdownOpening 0.5s forwards"
        })
        dropdown.forEach((drop)=>{
            drop.removeEventListener('click',openDropdown)
            drop.addEventListener('click', closeDropdown)
        })
    }
    function closeDropdown(event){
        const menu = document.querySelectorAll(".dropdown-menu")
        menu.forEach((m)=>{
            m.style.display = "none"
        })
        dropdown.forEach((drop)=>{
            drop.removeEventListener('click', closeDropdown)
            drop.addEventListener('click', openDropdown) 
        })
    } 
    dropdown.forEach((drop)=>{
        
        drop.addEventListener('click', openDropdown) 
    })
    window.addEventListener('click', (event)=>{
        let a = document.querySelectorAll('a[href="#sobre.html"]')
        
        if(event.target != a[0] && event.target != a[1]){
            closeDropdown()
        }
    })
}

// ------------- Menu Hamburguer -----------------

window.addEventListener('load', ()=>{
    function closeMenu(){
        const menu = document.getElementById("menu-hamburguer")
        const btn = document.querySelector(".menu-button")
        
        if(menu.style.display != "none"){
            menu.style.animation = "close-menu 0.5s forwards"
            document.querySelector("span:nth-child(1)").style.animation = "close-right 0.5s forwards"
            document.querySelector("span:nth-child(3)").style.animation = "close-left 0.5s forwards"
            setTimeout(() => {
                btn.classList.remove("menu-active")
                menu.style.display = "none"
            }, 200);
        }
        
    }
    window.addEventListener('click', (event)=>{
        const menu = document.getElementById("menu-hamburguer")
        const btn = document.querySelector(".menu-button")
        console.log(event.target);
        const validation = event.target != document.querySelector(".menu-button span:nth-child(1)") || event.target != document.querySelector(".menu-button span:nth-child(2)") || document.querySelector(".menu-button span:nth-child(3)")
        if (event.target != menu && event.target != btn && btn.classList[1] == "menu-active" && event.target != document.querySelectorAll('a[href="#sobre.html"]')[1] && !validation){
            closeMenu()
        }
    })
})
function openMenu(){
    
    const menu = document.getElementById("menu-hamburguer")
    const btn = document.querySelector(".menu-button")
    
    if(menu.style.display == "none"){
        btn.classList.toggle("menu-active")
        document.querySelector("span:nth-child(1)").style.animation = "open-right 0.5s forwards"
        document.querySelector("span:nth-child(3)").style.animation = "open-left 0.5s forwards"
        menu.style.animation = "open-menu 0.5s forwards"
        menu.style.display = "flex"
        
    } else{
        menu.style.animation = "close-menu 0.5s forwards"
        document.querySelector("span:nth-child(1)").style.animation = "close-right 0.5s forwards"
        document.querySelector("span:nth-child(3)").style.animation = "close-left 0.5s forwards"
        setTimeout(() => {
            btn.classList.toggle("menu-active")
            menu.style.display = "none"
        }, 200);
        
    }
    
}



dropdown()

window.addEventListener('load', showIndex)
document.querySelector(".menu-button").addEventListener('click', openMenu)
window.addEventListener('scroll', showSectionScrolled)
modal()
accordion()
tabMenu();