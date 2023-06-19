/*Crear un objeto que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias:
Inglés, programación y HTM, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. 
El script imprimirá el nombre y la media(promedio) de sus calificaciones.
Por ejemplo, guardar las calificaciones de un alumno de nombre Juan, Inglés: 9, programación: 8, HTML: 7. Sacará Nota media de Juan 8*/

//Primer Metodo Object Constructor
function promedio(alumno, ingles, programacion, html) {
    this.alumno = alumno;
    this.ingles = ingles;
    this.programacion = programacion;
    this.html = html;
}
const promedio2 = new promedio("juan", 9, 8, 7);
const promedio3 = ((promedio2.ingles + promedio2.programacion + promedio2.html) / 3 )
console.log(promedio2, "Tiene un promedio de", promedio3)


    


//Segundo Metodo
/*const promedio = {
    alumno : "claudio",
    materia: {
            ingles: 7,
            programacion: 6,
            html: 5,
        }           
}
const promedio2 = ((promedio.materia.ingles + promedio.materia.programacion + promedio.materia.html) / 3)
console.log("El promedio de", promedio.alumno, "es de :", promedio2)*/