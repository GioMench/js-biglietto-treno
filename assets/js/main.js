//chiedere all'utente quanti km vuole percorrere

const distance = prompt('quanti km devi percorrere?')

console.log(parseInt(distance));

//chiedere l'età passeggero 
const agePassenger = prompt('quanti anni ha il passeggero?')

console.log(parseInt(agePassenger));

//se età minore di 18 prezzo = 0.21 * km -20%
//se età maggiore di 65 prezzo = 0.21 * km -40%    
//il prezzo finale deve essere in forma umana 
if(agePassenger < 18){
    console.log((Math.round(distance * 0.21 - ((distance * 0.21)* 20 / 100))*100)/100);  
} else if(agePassenger > 65){
    console.log((Math.round(distance * 0.21 - ((distance * 0.21)* 40 / 100))*100)/100); 
}else{
    console.log((Math.round(distance * 0.21)*100)/100);
}



    
    
