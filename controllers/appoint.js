let memory = JSON.parse(sessionStorage.getItem("dates"));
let Container = document.getElementById("contenedor");


memory.forEach(item => {
    let row = document.createElement("section")
    row.classList.add("col-md-6")
    row.classList.add("row")
    row.classList.add("my-3")

    let colOne = document.createElement("section")
    colOne.classList.add("col-4")
    let colTwo = document.createElement("section")
    colTwo.classList.add("col-8")
    let boton = document.createElement("button")
    boton.classList.add("btn")
    boton.classList.add("btn-danger")
    boton.classList.add("botoncito")
    boton.textContent = "Quitar"
    boton.addEventListener("click", ()=>{
        memory.splice(item,1)
        sessionStorage.setItem("dates", JSON.stringify(memory))
        setTimeout(()=>{
            location.reload();
        },1000)
        
    })
    let edit = document.createElement("button");
    edit.classList.add("btn")
    edit.classList.add("btn-success")
    edit.classList.add("editar")
    edit.textContent = "Editar"
    let title = document.createElement("h1")
    title.textContent = "Tu clase"
    title.classList.add("mt-4")
    let name = document.createElement("p")
    name.textContent = "Nombre: "+ item.Name
    let docu = document.createElement("p")
    docu.textContent = "Documento: " + item.Docu
    let phone = document.createElement("p")
    phone.textContent = "Teléfono: " + item.Phone
    let email = document.createElement("p")
    email.textContent = "Email: " + item.Email
    let date = document.createElement("p")
    date.textContent = "Fecha de agendamiento: " + item.Date
    let hour = document.createElement("p")
    hour.textContent = "Hora de su clase: " + item.Hour
    let matter = document.createElement("p")
    matter.textContent = "Usted agendó una clase de: " + item.Matter
    if(item.Matter == "Historia"){
        row.classList.add("history")

    } else if(item.Matter == "Matematicas"){
        row.classList.add("math")

    } else if (item.Matter == "Filosofía"){
        row.classList.add("philosophy")
    }
    edit.addEventListener("click", ()=>{
        
        
        let fecha = document.createElement("input")
        fecha.type = "date"
        date.textContent = " "
        date.appendChild(fecha)
        let hora = document.createElement("select")
        let option1=document.createElement("option")
        option1.textContent = "Horario"
        let option2=document.createElement("option")
        option2.textContent = "5:30"
        let option3=document.createElement("option")
        option3.textContent = "7:30"
        let option4=document.createElement("option")
        option4.textContent = "9:30"
        let option5=document.createElement("option")
        option5.textContent = "11:30"
        let option6=document.createElement("option")
        option6.textContent = "13:30"
        let option7=document.createElement("option")
        option7.textContent = "15:30"
        let option8=document.createElement("option")
        option8.textContent = "17:30"
        let option9=document.createElement("option")
        option9.textContent = "19:30"
        hour.textContent = " "
        hour.appendChild(hora)
        hora.appendChild(option1)
        hora.appendChild(option2)
        hora.appendChild(option3)
        hora.appendChild(option4)
        hora.appendChild(option5)
        hora.appendChild(option6)
        hora.appendChild(option7)
        hora.appendChild(option8)
        hora.appendChild(option9)
        let aceptar = document.createElement("button")
        aceptar.classList.add("btn")
        aceptar.classList.add("btn-warning")
        aceptar.classList.add("botoncito3")
        aceptar.textContent = "Guardar"
        colTwo.appendChild(aceptar)
        aceptar.addEventListener("click",()=>{
            if(fecha.value){
                date.textContent = fecha.value
                item.Date = fecha.value;
            } else {
                date.textContent = item.Date
            }  
            sessionStorage.setItem("dates", JSON.stringify(memory))
            setTimeout(()=>{
                location.reload()
            },50)
        })
        let anuncio = document.createElement("p")
        anuncio.classList.add("edicion")
        anuncio.textContent = "*Usted está editando su agenda"
        colOne.appendChild(anuncio)


    } )
    Container.appendChild(row)
    row.appendChild(colOne)
    row.appendChild(colTwo)
    colOne.appendChild(title)
    colTwo.appendChild(name)
    colTwo.appendChild(docu)
    colTwo.appendChild(phone)
    colTwo.appendChild(email)
    colTwo.appendChild(date)
    colTwo.appendChild(hour)
    colTwo.appendChild(matter)
    colOne.appendChild(boton)
    colOne.appendChild(edit)
    
});

