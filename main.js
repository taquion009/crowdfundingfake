
const d = document


// menu
d.getElementById("list-menu").classList.add("oculto")
d.getElementById("menu").addEventListener("click",()=>{
         d.getElementById("list-menu").classList.add("visible")
         d.getElementById("list-menu").classList.remove("oculto")
         d.getElementById("oscuro").classList.add("visible")
         d.getElementById("oscuro").classList.remove("oculto")
         d.querySelector("#menu img").src = "./assets/icon-close-menu.svg"
         d.body.style.overflowY = "hidden"
})
d.getElementById("oscuro").addEventListener("click",()=>{
        d.getElementById("list-menu").classList.remove("visible")
        d.getElementById("list-menu").classList.add("oculto")
        d.getElementById("oscuro").classList.remove("visible")
        d.getElementById("oscuro").classList.add("oculto")
        d.querySelector("#menu img").src = "./assets/icon-hamburger.svg"
        d.body.style.overflowY = "auto"
})

// boton de bookmark
d.getElementById("contain-bookmark").addEventListener("click",()=>{d.getElementById("contain-bookmark").classList.toggle("contain-bookmark-active")})

// button-1
d.getElementById("button-1").addEventListener("click",()=>{
    d.getElementById("menu-flotante").classList.add("visible")
    d.getElementById("menu-flotante").classList.remove("oculto")
    d.getElementById("oscuro2").classList.add("visible")
    d.getElementById("oscuro2").classList.remove("oculto")
})
d.getElementById("oscuro2").addEventListener("click",()=>{
   d.getElementById("menu-flotante").classList.remove("visible")
   d.getElementById("menu-flotante").classList.add("oculto")
   d.getElementById("oscuro2").classList.remove("visible")
   d.getElementById("oscuro2").classList.add("oculto")
   d.getElementById("check").classList.remove("visible")
        d.getElementById("check").classList.add("oculto")
})

d.getElementById("close-menu2").addEventListener("click",()=>{
    d.getElementById("menu-flotante").classList.remove("visible")
    d.getElementById("menu-flotante").classList.add("oculto")
    d.getElementById("oscuro2").classList.remove("visible")
    d.getElementById("oscuro2").classList.add("oculto")
 })

// select de cosas

const radios = d.querySelectorAll(".radio-input")

let prev = false
let prev2 = false
let rutaprev = ""
radios.forEach(el=>el.addEventListener("change",(e)=>{
    d.querySelector(`.${e.target.dataset.label}1`).classList.add("label-ver")

    if(prev != false){
        prev.classList.remove("label-ver")
        prev2.classList.add("oculto")
        prev2.classList.remove("visible")
        rutaprev.value = null
    }
    if(prev != d.querySelector(`.${e.target.dataset.label}1`)){
        prev = d.querySelector(`.${e.target.dataset.label}1`)
        rutaprev = d.querySelector(`.${e.target.dataset.label} input`)
        prev2 = d.querySelector(`.${e.target.dataset.label} .prece-section`)
        d.querySelector(`.${e.target.dataset.label} .prece-section`).classList.remove("oculto")
        d.querySelector(`.${e.target.dataset.label} .prece-section`).classList.add("visible")
    }
    
}))

// submit
let valor = 50000

function generarBarra(pasta) {
    let number = pasta.toString()
    number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    d.getElementById("pasta").textContent = `$${number}`
    if(pasta > 100000)return d.getElementById("bar").style.width = `100%`
    d.getElementById("bar").style.width = `${(Number(pasta) * 100)/100000}%`
    
}

d.addEventListener("DOMContentLoaded",()=>{
    generarBarra(valor)
})


d.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let sumar = d.querySelector(`.${e.submitter.dataset.label} input`).value
    d.getElementById("menu-flotante").classList.remove("visible")
    d.getElementById("menu-flotante").classList.add("oculto")
    d.getElementById("oscuro2").classList.remove("visible")
    d.getElementById("oscuro2").classList.add("oculto")
    let res = valor + Number(sumar)
    valor += Number(sumar)
    generarBarra(res)

    d.getElementById("check").classList.add("visible")
    d.getElementById("check").classList.remove("oculto")
    d.getElementById("oscuro2").classList.add("visible")
    d.getElementById("oscuro2").classList.remove("oculto")

    d.querySelector("#check button").addEventListener("click",()=>{
        d.getElementById("check").classList.remove("visible")
        d.getElementById("check").classList.add("oculto")
        d.getElementById("oscuro2").classList.remove("visible")
        d.getElementById("oscuro2").classList.add("oculto")
    })
})


//botones select
const botones = d.querySelectorAll(".btn-select")
botones.forEach((el)=>el.addEventListener("click",async(e)=>{
    d.getElementById("menu-flotante").classList.add("visible")
    d.getElementById("menu-flotante").classList.remove("oculto")
    d.getElementById("oscuro2").classList.add("visible")
    d.getElementById("oscuro2").classList.remove("oculto")
    d.querySelector(`.${e.target.dataset.btn}1`).classList.add("label-ver")
    
    
    function getPosition(el) {

        var x = 0,
            y = 0;
    
        while (el != null && (el.tagName || '').toLowerCase() != 'html') {
            x += el.offsetLeft || 0; 
            y += el.offsetTop || 0;
            el = el.parentElement;
        }
    
        return { x: parseInt(x, 10), y: parseInt(y, 10) };
      }
    
    
    if(prev != d.querySelector(`.${e.target.dataset.btn}1`)){
        if(prev != false){
        prev.classList.remove("label-ver")
        prev2.classList.add("oculto")
        prev2.classList.remove("visible")
        rutaprev.value = null
    }
       
        prev = d.querySelector(`.${e.target.dataset.btn}1`)
        rutaprev = d.querySelector(`.${e.target.dataset.btn} input`)
        prev2 = d.querySelector(`.${e.target.dataset.btn} .prece-section`)
        d.querySelector(`.${e.target.dataset.btn} .prece-section`).classList.remove("oculto")
        d.querySelector(`.${e.target.dataset.btn} .prece-section`).classList.add("visible")
        d.querySelector(`#input-${e.target.dataset.btn} > input`).checked = true
        
    }
    let tat = getPosition(d.querySelector(`.${e.target.dataset.btn}1`)).y - 200
            window.scrollTo({
                    top: tat,
                    left: 0,
                    behavior: "smooth"
                })
    
    setTimeout(()=>{
        d.querySelector(`.${e.target.dataset.btn}1 input[type="number"]`).focus()
    },500)
     
}))


