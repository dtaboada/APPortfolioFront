var portfolio = {
    nombre: "Diego",
    apellido: "Taboada",
    direccion: "Calle 15 Nro.: 311",
    provincia: "Buenos Aires",
    titulo: "Analista de Sistemas & Full Stack Developer",
    edad: 37,
    nacimiento: new Date("1982/11/12"),
    telefono: "11-5980-3008",
    acercade: "Hola!!! Gracias por visitar mi portfolio. Te cuento un poco sobre mi, soy organizado, me gusta trabajar en en equipo y el buen clima interpersonal en el ambito laboral. Disfruto de transmitir mis conocimientos y experiencias para aportar al crecimiento grupal. Me gusta capacitarme para la incorporación de nuevas herramientas y los nuevos desafios"
};
var contacto = {
    linkedin: "https://www.linkedin.com/in/diego-leandro-taboada",
    github: "https://github.com/dtaboada",
    web: "https://www.frlp.utn.edu.ar/",
    youtube: ""
};
function setNombre() {
    var demoClasses = document.getElementsByName("nombre");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(function (element) {
        element.innerHTML = portfolio.nombre;
    });
}
function setApellido() {
    var demoClasses = document.getElementsByName("apellido");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(function (element) {
        element.innerHTML = portfolio.apellido;
    });
}
function setDireccion() {
    var demoClasses = document.getElementsByName("direccion");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(function (element) {
        element.innerHTML = portfolio.direccion;
    });
}
function setProvincia() {
    var demoClasses = document.getElementsByName("provincia");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(function (element) {
        element.innerHTML = portfolio.provincia;
    });
}
function setTitulo() {
    var demoClasses = document.getElementsByName("titulo");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(function (element) {
        element.innerHTML = portfolio.titulo;
    });
}
/* function SetEdad():void{
    const demoClasses = document.getElementsByName("edad");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(element => {
    element.innerHTML = portfolio.edad;
    });
}
 */
function setAcercaDe() {
    var demoClasses = document.getElementsByName("acercade");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(function (element) {
        element.innerHTML = portfolio.acercade;
    });
}
function setTelefono() {
    var demoClasses = document.getElementsByName("telefono");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(function (element) {
        element.innerHTML = portfolio.telefono;
    });
}
function calcularEdad() {
    var hoy = new Date();
    var cumpleanos = portfolio.nacimiento;
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    var edadstr = edad + "";
    var demoClasses = document.getElementsByName("edad");
    // Change the text of multiple elements with a loop
    demoClasses.forEach(function (element) {
        element.innerHTML = edadstr;
    });
}
function setEnlacesContacto() {
    var link = document.getElementById("linkedin");
    link === null || link === void 0 ? void 0 : link.setAttribute("href", contacto.linkedin);
}
setNombre();
setApellido();
setDireccion();
setProvincia();
setTitulo();
setTelefono();
setAcercaDe();
calcularEdad();
setEnlacesContacto();
