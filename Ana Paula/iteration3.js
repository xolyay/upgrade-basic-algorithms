const users = [
    /* {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        } 
    } ,
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    }, */
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let sonidos={};
for (const iterator of users) {
    for (const property in iterator.favoritesSounds) {
        console.log(`${property}: ${iterator.favoritesSounds[property]}`);
         if (iterator.favoritesSounds[property] in sonidos ) {
             sonidos[iterator.favoritesSounds[property]]++;
             console.log('entre');
         }  
         else{
            sonidos[iterator.favoritesSounds[property]]=1;
            console.log('no entre');
         }
    }
}
console.log(sonidos);