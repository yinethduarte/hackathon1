//* Header
// const header = document.getElementById("header")
// document.header.style.backgroundColor = "#494A4E"

const menuIcon = document.getElementById("menu-icon");
console.log(menuIcon);

menuIcon.addEventListener('click', function(){
  let menuList = document.getElementById("listaMenu")
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
