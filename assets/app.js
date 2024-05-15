//* Header
// const header = document.getElementById("header")
// document.header.style.backgroundColor = "#494A4E"

// header fixed con scroll
window.onscroll = function() {headerFixed()};

let header = document.getElementById("ourHeader");
let sticky = header.offsetTop;

function headerFixed() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const menuIcon = document.getElementById("menu-icon");
// console.log(menuIcon);
let menuList = document.getElementById("listaMenu")
// console.log(menuList);

menuIcon.addEventListener('click', function(){
  console.log(menuList);

  menuList.style.maxHeight = "0px";
  console.log(menuList.style.maxHeight);

  if(menuList.style.maxHeight = "0px"){
    menuList.style.maxHeight = "300px";
  }
  else{
    menuList.style.maxHeight = "0px";
  }
})

// let botonesHeader = document.querySelectorAll("li")
// console.log(botonesHeader);

// for (botones of botonesHeader){
//   botones.addEventListener('mouseover', (e) => {
//     e.target.innerText.style = "#A2F7FF";
//   })
// }

//*Carrousel
const mycarrusel = document.querySelector('.carousel-inner')

const micarruselt = new bootstrap.Carousel(mycarrusel, {
  interval: 2000,
//   touch: false // inhabilita el touch
})

//Registrarse

const registrarse = document.getElementById("formulario");

registrarse.addEventListener('submit', function(event){
  event.preventDefault(); 

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const contraseña = document.getElementById('contraseña').value;
  const telefono = document.getElementById('telefono').value;
  const fechaN = document.getElementById('fechaN').value;

  const datos = {
    name: nombre,
    email: email,
    contraseña: contraseña,
    telefono: telefono,
    fechaN: fechaN,
  }
});
