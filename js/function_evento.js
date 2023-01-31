//onclick='document.getElementById("demo").innerHTML 
/**document.getElementById("boton").onclick = function (){
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML="Estamos probando 1er evento en js - texto reemplazo";
}*/

//otra variante para modificar el texto. lo haremos con un escuchador (listener)
//en este caso el listener esta en todo el documento.. osea el click puede ser en cualquier parte del documento
/**document.addEventListener("click", function(){
    console.log("Hola Mundo desde EventListener");
    document.getElementById("demo").innerHTML="Estamos probando 1er evento con js - con Listener"
})*/

//aca le indicadmos que sobre el elemento boton le colocamos el escuchador/listener del evento click
document.getElementById("boton").addEventListener("click", function(){
    console.log("Hola Mundo desde EventListener");
    document.getElementById("demo").innerHTML="Estamos probando 1er evento con js - con Listener";
});

document.getElementById("boton_color").addEventListener("click", function(){
    document.body.style.backgroundColor = "#FF0000";
});

document.getElementById("boton_default").addEventListener("click", function(){
    document.body.style.backgroundColor = "#0000FF";
});

document.getElementById("boton_ocultar").addEventListener("click", function(){
    document.getElementById("demo").style.display="none";
});

//defino una constante coleccion para recorrerla y poner el gondo verde en el html / para poder ejemplificar un
//iterador con js
const collection = document.getElementsByClassName("prueba");
for (let i=0; i<collection.length; i++){
    collection[i].style.backgroundColor = "green";
}
//collection[1].style.backgroundColor = "salmon";
