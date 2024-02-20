//km
const distance = Number(prompt('quanti km devi percorrere?')) 

//age of passenger
const agePassenger = Number(prompt('quanti anni ha il passeggero?'))

//discount
const discountLess = 0.2

const discountOver = 0.4

//price for km
const forKm = 0.21

//standart price
 let price = distance * forKm 

//se età minore di 18 prezzo = 0.21 * km -20%
//se età maggiore di 65 prezzo = 0.21 * km -40% 

/*if(agePassenger < 18){
    console.log((Math.round(distance * 0.21 - ((distance * 0.21)* 20 / 100))*100)/100);  
} else if(agePassenger > 65){
    console.log((Math.round(distance * 0.21 - ((distance * 0.21)* 40 / 100))*100)/100); 
}else{
    console.log((Math.round(distance * 0.21)*100)/100);
}*/

if(agePassenger < 18){
   price = ((price - price * discountLess).toFixed(2));  
} else if(agePassenger > 65){
    price = ((price - price * discountOver).toFixed(2));  
}

//final price
console.log(`${price}\u20AC`);





    
    
