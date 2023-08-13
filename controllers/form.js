let boxName = document.getElementById("validationCustom01");
let boxDocument = document.getElementById("validationCustom03");
let boxPhone = document.getElementById("validationCustom04");
let boxEmail = document.getElementById("validationCustomUsername");
let boxDate = document.getElementById("validationCustom05");
let boxHour = document.getElementById("validationCustom06");
let boxMatter = document.getElementById("validationCustom07");
const Button = document.getElementById("button");

Button.addEventListener("click", buttonPrincipal=(info) => {
    info.preventDefault();
    let Name = boxName.value;
    let Docu = boxDocument.value;
    let Phone = boxPhone.value;
    let Email = boxEmail.value.trim();
    let Date = boxDate.value;
    let regExt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let Hour = boxHour.value;
    let Matter = boxMatter.value;
    let mistakes = [];
    let appoin;
    let Storage = JSON.parse(sessionStorage.getItem("dates"))

    if(!Storage){
        appoin = []
    }else{
        appoin = Storage
    }

    if (!Name) {
        mistakes.push("El nombre es necesario");
        boxName.classList.add("is-invalid");
    }
    if (!Docu) {
        mistakes.push("El documento es necesario");
        boxDocument.classList.add("is-invalid");
    } else {
        boxDocument.classList.add("is-valid");
    }
    if (!Phone) {
        mistakes.push("El telefono es necesario");
        boxPhone.classList.add("is-invalid");
    } else {
        boxPhone.classList.add("is-valid");
    } if (!Email) {
        mistakes.push("El email es necesario");
        boxEmail.classList.add("is-invalid");
    } if (!Date) {
        mistakes.push("La fecha es necesario");
        boxDate.classList.add("is-invalid");
    } else {
        boxDate.classList.add("is-valid");
    } if (!Hour) {
        mistakes.push("La hora es necesario");
        boxHour.classList.add("is-invalid");
    } else {
        boxHour.classList.add("is-valid");
    } if (!Matter) {
        mistakes.push("La materia es necesario");
        boxMatter.classList.add("is-invalid");
    } else {
        boxMatter.classList.add("is-valid");
    } if (Email) {
        if (!regExt.test(Email)) {
            mistakes.push("El email es necesario");
            boxEmail.classList.add("is-invalid");
        } else {
            boxEmail.classList.add("is-valid");
        }
    } if(Name.length < 10){
        mistakes.push("El nombre es necesario");
        boxName.classList.add("is-invalid");
    } else {
        boxName.classList.add("is-valid"); 
    }

    if(mistakes.length == 0){
        let objeto = {
            Name,Docu,Phone,Email,Date,Hour,Matter
        }
        appoin.push(objeto)
        sessionStorage.setItem("dates",JSON.stringify(appoin))
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su clase ha sido agendada con éxito',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(()=>{
            console.log("recargando")
            location.reload()
          },1000)
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Error, revisa los campos requeridos',
            footer: 'Verifica que todos los campos estén diligenciados correctamente'
          })
          setTimeout(()=>{
            console.log("recargando")
            location.reload()
          },3500)
    }
    
})