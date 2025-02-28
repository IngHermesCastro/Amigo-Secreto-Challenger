Lógica de Programación - Amigo Secreto

Este proyecto es una aplicación simple que permite a los usuarios agregar nombres de amigos a una lista y luego sortear un nombre al azar. El objetivo principal es fortalecer las habilidades en lógica de programación, especialmente en la manipulación de arrays, funciones y manipulación del DOM.
Estructura del Proyecto

El proyecto consta de tres archivos principales:

    app.js: Contiene la lógica de programación para agregar nombres, sortear un amigo y actualizar la interfaz de usuario.

    index.html: Define la estructura de la interfaz de usuario.

    style.css: Define los estilos visuales de la aplicación.

Lógica de Programación
Variables Globales

    personas: Un array que almacena los nombres de las personas agregadas.

javascript

let personas = [];

Funciones Principales

    addPerson(persona):

        Propósito: Agrega un nombre al array personas si no existe previamente.

        Lógica:

            Verifica si el nombre ya está en el array usando includes().

            Si el nombre ya existe, muestra una alerta.

            Si no existe, agrega el nombre al array y lo muestra en la consola.

javascript

function addPerson(persona) {
    if (personas.includes(persona)) {
        alert("El nombre ya existe.");
        return;
    }
    personas.push(persona);
    console.log(personas);
}

    addFriend():

        Propósito: Obtiene el nombre ingresado por el usuario, lo valida y lo agrega a la lista en la interfaz.

        Lógica:

            Obtiene el valor del input.

            Si el input está vacío, muestra una alerta.

            Si el input es válido, llama a addPerson() para agregar el nombre al array y actualiza la lista en el DOM usando innerHTML.

            Limpia el input después de agregar el nombre.

javascript

function addFriend() {
    let friend = document.getElementById("amigo").value;
    if (friend == "") {
        alert("Por favor, ingrese un nombre.");
        return;
    } else {
        addPerson(friend);
        let list = document.getElementById("listaAmigos");
        list.innerHTML += `<li>${friend}</li>`;
        cleanInput();
    }
}

    cleanInput():

        Propósito: Limpia el campo de entrada después de agregar un nombre.

        Lógica:

            Establece el valor del input a una cadena vacía.

javascript

function cleanInput() {
    document.getElementById("amigo").value = "";
}

    sortearAmigo():

        Propósito: Selecciona un nombre al azar de la lista de personas y lo muestra como resultado.

        Lógica:

            Verifica si hay nombres en el array personas.

            Si no hay nombres, muestra una alerta.

            Si hay nombres, selecciona un índice aleatorio usando Math.random() y Math.floor().

            Muestra el nombre seleccionado en el DOM y lo elimina del array para evitar que sea sorteado nuevamente.

            Limpia la lista de amigos en el DOM y actualiza el resultado.

javascript


function sortearAmigo() {
    if (personas.length === 0) {
        alert("No hay personas agregadas.");
        return;
    } else {
        let randomFriend = Math.floor(Math.random() * personas.length);
        console.log("AL AZAR: " + personas[randomFriend]);
        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";
        document.getElementById("resultado").innerHTML += `<li>El amigo Secreto Sorteado es : ${personas[randomFriend]}</li>`;
        personas.splice(randomFriend, 1);
    }
}

Flujo de la Aplicación

    El usuario ingresa un nombre en el campo de texto y hace clic en "Añadir".

    El nombre se valida y se agrega al array personas si no existe.

    El nombre se muestra en la lista de amigos en la interfaz.

    Cuando el usuario hace clic en "Sortear amigo", se selecciona un nombre al azar de la lista.

    El nombre sorteado se muestra en la sección de resultados y se elimina de la lista para evitar repeticiones.

Consideraciones Adicionales

    Validación de Entrada: Se valida que el campo de entrada no esté vacío y que el nombre no esté duplicado.

    Manipulación del DOM: Se utiliza innerHTML para actualizar la lista de amigos y el resultado del sorteo.

    Eliminación del Nombre Sorteado: Después de sortear un nombre, este se elimina del array para evitar que sea seleccionado nuevamente.
