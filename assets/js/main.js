//chiedere all'utente quanti km vuole percorrere

const distance = Number(prompt('quanti km devi percorrere?')) 

//chiedere l'età passeggero 
const agePassenger = Number(prompt('quanti anni ha il passeggero?'))

//variabile di prezzo al km
let forKm = 0.21

//varibile percentuale sconto
let discountLess = 20

let discountOver = 40

//se età minore di 18 prezzo = 0.21 * km -20%
//se età maggiore di 65 prezzo = 0.21 * km -40% 
//il prezzo finale deve essere in forma umana 

/*if(agePassenger < 18){
    console.log((Math.round(distance * 0.21 - ((distance * 0.21)* 20 / 100))*100)/100);  
} else if(agePassenger > 65){
    console.log((Math.round(distance * 0.21 - ((distance * 0.21)* 40 / 100))*100)/100); 
}else{
    console.log((Math.round(distance * 0.21)*100)/100);
}*/


if(agePassenger < 18){
    alert(`${((distance * forKm - ((distance * forKm) * discountLess / 100))).toFixed(2)}\u20AC`);  
} else if(agePassenger > 65){
    alert(`${((distance * forKm - ((distance * forKm) * discountOver / 100))).toFixed(2)}\u20AC`); 
}else{
    alert(`${(distance * forKm).toFixed(2)}\u20AC`);
}





    
    
