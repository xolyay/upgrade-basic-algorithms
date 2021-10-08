let marvelCharacters = [
    {
        name: "Spiderman",
        alias: "Peter parker",
        power: 120,
        goodSide: true,
        group: "Avengers"
    },
    {
        name: "Magneto",
        alias: "Eric",
        power: 95,
        goodSide: false,
        group: "Mutants"
    },
    {
        name: "Wolverine",
        alias: "Logan",
        power: "90",
        goodSide: true,
        group: "Avengers"
    },
    {
        name: "Dr.Strange",
        alias: "Stephen Strange",
        power: 100,
        goodSide: true,
        group: "Iluminati"
    },
    {
        name: "Bruja Escarlata",
        alias: "Wanda Maximoff",
        power: 150,
        goodSide: false,
        group: "Mutants"
    }
]


// Recorrer a mis personajes -> power +100
// Recorrer a mis personajes -> Iluminati
// Recorrer a mis personajes -> Buenos: goodSide true / Malos: goodSide false
    // Crear un array llamado good -> pushear 
    // Crear un array llamado bads -> pushear


    let good = [];
let bads = [];
for (let i = 0; i < marvelCharacters.length; i++) {
    if (marvelCharacters[i].power >= 100) {
        console.log("IT1: ", marvelCharacters[i].name)
    }
    if (marvelCharacters[i].group === "Iluminati") {
        console.log("IT2: ", marvelCharacters[i].name)
    }
    if (marvelCharacters[i].goodSide) {
        good.push(marvelCharacters[i].name)
    } else {
        bads.push(marvelCharacters[i].name)
    }
}
console.log("IT3:", good)
console.log("IT3:", bads)





const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2/number1) {
  console.log("number2 dividido entre number1 es igual a 2");

}


if (number1!==number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {                                                   /*===estrictamente igual ==igual  ¡=no es igual*/
  console.log("number3 es distinto number1");                                 
}

if (number3*5==number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3*5==number1 && number1*2==number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}




if (number2/2==number1 || number1/5==number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
  }


/* 

let array=[0,1,2,3,4,5,6,7,8,9];
console.log(
    array.length
)
for (let index = 0; index <= array.length; index++) {
    const element = array[index];
    console.log(
        element
    )
    
}

let arraytwo=[0,1,2,3,4,5,6,7,8,9];
console.log(
    arraytwo.length
)
console.log(arraytwo)
for (let index = 0; index <= arraytwo.length; index++) {
    const element = arraytwo[index];
    if( element%2==0){
        console.log(element)
          
        }
    }
 */


 /* 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.

1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'.*/

