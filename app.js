// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
const nombre = document.getElementById("amigo");
const lista = document.getElementById('listaAmigos');

//Funcion para verificar el texto ingresado
function validarTexto(input) {
    const cadena = /^[A-Za-z]{3,10}$/;
    return cadena.test(input);
}

//Funcion para guardar el nombre ingresado
function agregarAmigo(){ 
    //Validar nombre y mostrar en la lista
    if (validarTexto(nombre.value)) {

        if (amigos.includes(nombre.value)) {
            //Mensaje (alert) de ingreso de nomrbe repetido
            alert("El nombre ya está en la lista");
            //Limpiar input
            nombre.value = "";

        } else {
            amigos.push(nombre.value);
            nombre.value = "";
            
            // Limpiar la lista antes de actualizarla
            lista.innerHTML = "";

            // Recorrer el arreglo amigos y agregar elementos a la lista
            for (let i = 0; i < amigos.length; i++) {
                const li = document.createElement("li");
                li.textContent = amigos[i];
                lista.appendChild(li);
            }
            nombre.value = "";
            console.log(amigos)
        }        
    // Mensaje (alert) de ingreso incorrecto de nombre y limpieza de input
    }else {
        alert("Nombre incorrecto")
        nombre.value = "";
    }

}

// Función para sortear un nombre aleatoriamente
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return; // Salir de la función si el array está vacío
    }

    // Generar un índice aleatorio entre 0 y el tamaño del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado utilizando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en un elemento con id 'resultado'
    document.getElementById("resultado").innerHTML = "El amigo sorteado es: " + amigoSorteado;

}



