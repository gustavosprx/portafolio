//script scroll-reveal
window.sr = ScrollReveal()

sr.reveal('.greeting',{
  duration:2000,
  origin:"left",
  distance:"300px"
})

sr.reveal('.img-header',{
  duration:2000,
  origin:"right",
  delay:1000
})

sr.reveal('.image-left',{
  duration:1500,
  origin:"bottom",
  distance:"300px"
})

sr.reveal('.wrapper',{
  duration:3000,
  origin:"right"
})

sr.reveal('.boton-gradient',{
  duration:2000,
  origin:"bottom",
  delay:1000
})

sr.reveal('.boton-whatsapp',{
  duration:2000,
  origin:"bottom",
  delay:1000
})

sr.reveal('.btn-resume',{
  duration:2000,
  origin:"bottom",
  delay:1000
})

sr.reveal('.exp',{
  duration:2000,
  origin:"left",
  distance:"300px"
})

//Modificacion de waves-effect 

const link1= document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3= document.getElementById("link3")
const link4 = document.getElementById("link4")

link1.addEventListener('click', function () {
  link1.classList.remove("waves-effect") 
  link1.classList.add("active")
  link2.classList.remove("active")
  link3.classList.remove("active")
  link4.classList.remove("active")
})

link2.addEventListener('click', function () {
  link2.classList.remove("waves-effect")
  link2.classList.add("active")
  link1.classList.remove("active")
  link3.classList.remove("active")
  link4.classList.remove("active")
})
link3.addEventListener('click', function () {
  link3.classList.remove("waves-effect")
  link3.classList.add("active")
  link1.classList.remove("active")
  link2.classList.remove("active")
  link4.classList.remove("active")
})
link4.addEventListener('click', function () {
  link4.classList.remove("waves-effect")
  link4.classList.add("active")
  link1.classList.remove("active")
  link2.classList.remove("active")
  link3.classList.remove("active")
})