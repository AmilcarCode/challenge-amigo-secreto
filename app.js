// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

//Funcion para verificar el texto ingresado
function validarTexto(input) {
    const cadena = /^[A-Za-z]{3,10}$/;
    return cadena.test(input);
}

//Funcion para guardar el nombre ingresado
function agregarAmigo(){
    const nombre = document.getElementById("amigo");
    const lista = document.getElementById('listaAmigos');
     
    //Validar nombre y mostrar en la lista
    if (validarTexto(nombre.value)) {
        if (amigos.includes(nombre.value)) {
            alert("El nombre ya está en la lista");
            //Limpiar input
            nombre.value = "";
            //document.getElementById("amigo").value = "";
        } else {
            amigos.push(nombre.value);
            //Limpiar input
            nombre.value = "";
            //document.getElementById("amigo").value = "";
            
            // **Limpiar la lista antes de actualizarla**
            lista.innerHTML = "";

            // **Recorrer el arreglo amigos y agregar elementos a la lista**
            for (let i = 0; i < amigos.length; i++) {
                const li = document.createElement("li");
                li.textContent = amigos[i];
                lista.appendChild(li);
            }
            //Limpiar input
            nombre.value = "";
            //document.getElementById("amigo").value = "";
            console.log(amigos)
        }        
    //Mensaje (alert) de ingreso incorrecto de nombre y limpieza de input
    }else {
        alert("Nombre incorrecto")
        nombre.value = "";
        //document.getElementById("amigo").value = "";
    }

}



