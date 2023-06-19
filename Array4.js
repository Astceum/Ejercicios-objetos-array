/*Diseña una función llamada sumaLista() capaz de sumar todos los números que forman el array que se le pase como argumento.
     ejemplo : Si ejecuto sumaLista([2,4,5,1,2]) deberá devolver como resultado 14*/

function sumaLista(list){
   return list.reduce((a,b) => a+b, 0)
}
const list2 = [2,4,5,1,2]
console.log(sumaLista(list2))
