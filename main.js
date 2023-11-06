//ESERCIZIO 0
 let valore1 = false;
 let valore2 =23;
 let valore3= NaN;
 let valore4= "ciao";


 //&&
 console.log(valore2 && valore4);

 //or
 console.log(valore1 || valore2);
 console.log(valore3 || valore4);
 console.log(valore2 || valore4);


 //ESERCIZIO 1

 a = 10;
 b = -2;
 c = 31;
 d = 22;
 e = 15;
 f = -6;
 g = 7;

 let temperatureMax = Math.max(a,b,c,d,e,f,g);
 let temperatureMin = Math.min(a,b,c,d,e,f,g);

 console.log(`La temperatura massima è ${temperatureMax} e la temperatura minima è ${temperatureMin}`);


 //ESERCIZIO 2


//se v e’ minore di 18,  stampare in console  “insufficiente”
//se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
//se v e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
//se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
//se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
//se v e’ uguale a 30, stampare in console:  “eccellente”
  

 let voto = 29

 if (voto < 18) {
    console.log(`Bocciato`);
    
 }
    else if(voto >=18 && voto<21){
         console.log(`sufficiente`); 
    }
       else if(voto>=21 && voto<24){
            console.log(`buono`);
       }
         else if(voto >=24 && voto<27){
                console.log(`distinto`);
         }

           else if (voto>= 27 && voto<=29){
            console.log(`ottimo`);
           }
            else if ( voto==30){
                    console.log(`eccellente`);
            }


// ESERCIZIO 2 CON SWITCH



switch (voto) {
    case voto< 18:
        console.log(`insufficiente`);
          break;

    case voto>=18 && voto<21:
        console.log(`sufficiente`);
        break;

    case voto>=21 && voto<24:
        console.log(`buono`);
        break;

    case voto>=24 && voto<27:
        console.log(`distinto`);
        break;

    case voto>= 27 && voto<=29:
        console.log(`ottimo`);
        break;

    case voto ==30:
        console.log(`eccellente`);
        break;
    
}

//ESERCIZIO 3

let num =2;

for (let i = 1; i <= 10; i++){
    console.log(num*i);
}

//ESERCIZIO 4

let nTiri=3;
let max =6;
let min=1;
let giocatore1=0
let giocatore2=0

for (let i = 0; i < nTiri; i++) {
    let numeroRandom1 = Math.floor(Math.random() * (max - min + 1) + min);
    let numeroRandom2= Math.floor(Math.random() * (max - min + 1) + min);
    giocatore1=giocatore1+ numeroRandom1
    giocatore2=giocatore2+ numeroRandom2
    
}
if (giocatore1>giocatore2) {
    console.log(`Ha vinto il giocatore uno per ${giocatore1} a ${giocatore2}`);
}else if (giocatore2>giocatore1){
    console.log(`Ha vinto il giocatore due per ${giocatore2} a ${giocatore1}`);
}else{
    console.log(`i giocatori hanno pareggiato ${giocatore1}a ${giocatore2}`);
}
    
console.log(giocatore1);
console.log(giocatore2);


//ESERCIZIO 5

let userPassword = prompt(`inserisci la tua password`);
let password = `123456`;
let tentativi=1;

while(userPassword != password){
   userPassword =prompt(`Password Errata`);
   tentativi++;
     if(tentativi==3){
        break;
     }
  
}

if(userPassword == password){
    console.log(`Benvenuto nel sito`);
}else{
    console.log(`Troppi tentativi effettuati, esegui il reset della password!`);
}
    

