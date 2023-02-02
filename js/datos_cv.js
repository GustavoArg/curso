const persona = '{"nombre":"Steven Paul Jobs","edad":42,"nacionalidad":"Argenchina","titulo":"Programador WEB Juniors"}';
const objpersona = JSON.parse(persona); 
document.getElementById("demo").innerHTML = "Nombre: " + objpersona.nombre + " - Edad: " + objpersona.edad + 
" - Nacionalidad: " + objpersona.nacionalidad + "titulo" + objpersona.titulo;
document.getElementById("demo2").innerHTML = "titulo" + objpersona.titulo;
