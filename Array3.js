/*Deberás crear un array para guardar los nombres de los meses del año , empezando por 0 para enero .
 Para comprobar el funcionamiento pide al usuario un número entre 0 y 11 y devuelve el nombre del mes del año .
  Se supone que el dato tecleado estará entre 0 y 11
      ejemplo : Si tecleo el número 4 me deberá decir que el mes es mayo.*/

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Dieciembre"]

let meses2 = prompt("indique un numero del 0 al 11")

console.log("El mes es", meses[meses2])
