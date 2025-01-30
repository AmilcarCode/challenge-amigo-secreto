// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

//Funcion para verificar el texto ingresado
function validarTexto(input) {
    const cadena = /^[A-Za-z]{3,10}$/;
    return cadena.test(input);
}

//Funcion para guardar el nombre ingresado
function agregarAmigo(){
    const nombre = document.getElementById("amigo").value;
    // Crea un nuevo elemento <li>
    const li = document.createElement('li');
    // Añade el <li> a la lista <ul>
    const lista = document.getElementById('listaAmigos');    
    //Validar nombre y mostrar en la lista
    if (validarTexto(nombre)) {
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
        console.log(amigos)
        li.textContent = nombre;  // Establece el nombre del amigo en el <li>            
        lista.appendChild(li);
    //Mensaje (alert) de ingreso incorrecto de nombre y limpieza de input
    }else {
        alert("Nombre incorrecto")
        document.getElementById("amigo").value = "";
    }

}



