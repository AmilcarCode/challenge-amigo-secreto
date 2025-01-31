# challenge-amigo-secreto
Amigo Secreto

Descripción:
Este proyecto es una aplicación web interactiva diseñada para facilitar la organización de sorteos de "Amigo Secreto". Permite a los usuarios ingresar nombres de amigos en una lista y, posteriormente, realizar un sorteo aleatorio para determinar quién será el "amigo secreto" de cada persona. Es ideal para intercambios de regalos en eventos como Navidad, cumpleaños o reuniones sociales.

Tecnologías Utilizadas:
HTML: Se utiliza para estructurar la página y definir los elementos visuales de la interfaz.
CSS: Proporciona estilos y diseño responsivo para mejorar la experiencia del usuario en distintos dispositivos.
JavaScript: Implementa la lógica para agregar nombres, evitar duplicados, ordenar la lista y realizar el sorteo aleatorio.

Funcionalidades:
- Ingreso y Validación de Nombres
- Los usuarios pueden ingresar nombres en un campo de texto.
- Solo se permiten nombres con entre 3 y 10 caracteres alfabéticos para asegurar uniformidad.
- Si un usuario intenta ingresar un nombre repetido, la aplicación mostrará una alerta y no lo agregará a la lista.
- Gestión de la Lista de Participantes
- Los nombres ingresados se agregan a una lista visible en la interfaz.
- La lista se actualiza en tiempo real y los nombres se ordenan automáticamente de manera alfabética.
- Se puede visualizar a todos los participantes antes de proceder con el sorteo.

Sorteo Aleatorio:
- Al hacer clic en el botón "Sortear amigo", la aplicación elige un nombre al azar de la lista de participantes.
- El nombre seleccionado se muestra en pantalla con un mensaje indicando quién ha sido el ganador del sorteo.
- Si la lista está vacía, la aplicación mostrará un mensaje de error indicando que se deben agregar nombres antes de sortear.

Instalación y Uso:
- Descarga o clona el repositorio en tu computadora.
- Abre el archivo index.html en un navegador web.
- Ingresa los nombres de los participantes en el campo de texto y presiona "Añadir".
- Repite el proceso hasta haber ingresado todos los nombres deseados.
- Haz clic en el botón "Sortear amigo" para obtener un nombre seleccionado al azar.

Estructura del Proyecto:

    📁 challenge-amigo-secreto
    │── index.html    # Página principal con la interfaz del usuario
    │── style.css     # Estilos y diseño de la aplicación
    │── app.js        # Lógica y funcionalidades de la aplicación
    │── assets/       # Imágenes y recursos utilizados
    │── README.md     # Descripción del proyecto – Explica qué es y para qué sirve

Captura de Pantalla

(Aquí puedes agregar una imagen de la interfaz de usuario para ilustrar su funcionamiento.)

Mejoras Futuras:
- Opción para eliminar nombres de la lista.
- Funcionalidad para asignar amigos secretos entre los participantes.
- Interfaz mejorada con animaciones y estilos adicionales.
- Soporte para múltiples sorteos dentro de la misma sesión.
