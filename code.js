/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 datosPersona.nombre = prompt("Ingresa tu nombre");
 let anio;
 do {anioNac = parseInt(prompt("Ingresa el año en que naciste?"));
  } while (anioNac<1900 || anioNac>2022 || isNaN(anioNac));
 datosPersona.edad = 2022- anioNac;
 datosPersona.ciudad = prompt("Ingresa la ciudad donde resides")
 datosPersona.interesPorJs = confirm("¿Te interesa Javascript?");
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombre = document.getElementById("nombre");
  nombre.innerText = datosPersona.nombre;
  let edad = document.getElementById("edad");
  edad.innerText=datosPersona.edad;
  let ciudad = document.getElementById("ciudad");
  ciudad.innerText=datosPersona.ciudad;
  let interesPorJs = document.getElementById("javascript");
  if (datosPersona.interesPorJs){
    interesPorJs.innerText = "Si"
  } else {
    interesPorJs.innerText = "No"
  }
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  function crearImg(url,alt){
    let img = document.createElement("img");
    img.setAttribute("src", url);
    img.setAttribute("alt", alt);
    return img;
  }

  function crearParrafoItem(nombreParrafo, contenido, clase){
    let p = document.createElement("p");
    p.classList.add(clase);
    p.innerText = `${nombreParrafo}: `+contenido;
    return p;
  }

  for(materia of listado){

    let imagen = crearImg(materia.imgUrl, materia.lenguajes);

    let lenguajes = crearParrafoItem ("Lenguajes", materia.lenguajes, "lenguajes")

    let bimestre = crearParrafoItem ("Bimestre", materia.bimestre, "bimestre")

    let div = document.createElement("div");
    div.classList.add("caja");

    div.appendChild(imagen);
    div.appendChild(lenguajes);
    div.appendChild(bimestre);
    let fila = document.getElementById("fila");
    fila.appendChild(div);
  }
  materiasBtn.removeEventListener('click',recorrerListadoYRenderizarTarjetas);
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 let sitio = document.getElementById("sitio");
 sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let seccionOculta = document.getElementById("sobre-mi");
window.onkeydown =  function(e){
  if(e.key.toUpperCase()==="F"){
    seccionOculta.classList.remove("oculto");
  }
}
