// El principal objetivo de este desafío es fortalecer mis habilidades en lógica de programación. Aquí deberia desarrollar la lógica para resolver el problema.
// Array para guardar los nombres de las personas.
let personas = [];

// Función para agregar un nombre a la lista.
function addPerson(persona){
    // Agregar el nombre al array de personas.
    if (personas.includes(persona)){
        alert("El nombre ya existe.");
        return;
    }
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
        let list = document.getElementById("listaAmigos");
        list.innerHTML += `<li>${friend}</li>`;

        cleanInput();

    }
}

//Function to clean input
function cleanInput() {
    document.getElementById("amigo").value = "";
}
// function to draw friend list
function sortearAmigo(){
    if (personas.length === 0) {
        alert("No hay personas agregadas.");
        return;
    }else {
        let randomFriend = Math.floor(Math.random() * personas.length);
        console.log("AL AZAR: "+personas[randomFriend]);

        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";
        document.getElementById("resultado").innerHTML += `<li>El amigo Secreto Sorteado es : ${personas[randomFriend]}</li>`;
        personas.splice(randomFriend, 1);
        
    }
    
}