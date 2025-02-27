// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para guardar los nombres de las personas.
let personas = [];

// Función para agregar un nombre a la lista.
function addPerson(persona){
    // Agregar el nombre al array de personas.
    personas.push(persona);
    console.log(personas);

}
//Funcion para Actualizar HTML para la lista de personas
function addFriend(){
    let friend = document.getElementById("amigo").value;
    if (friend == "") {
        alert("Por favor, ingrese un nombre.");
        return;
    } else {
        addPerson(friend);
    }
    
}

//addPerson("Duvan");
