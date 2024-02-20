## consegna
Descrizione:
Trenitalia ha bisogno di un programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 (fortunelli :adulto_anziano:).
L'output del prezzo finale va messo fuori in forma umana (con massimo due cifre decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca - come quelle fatte in classe
Consigli:
scrivete lo pseudo code
preparate lista strumenti
pensate prima al caso base e poi vi complicate la vita
zero grafica solo js.
##

- chiedere all'utente quanti km vuole percorrere
    - prompt 
    - const/let 
    - number()

- chiedere l'età passeggero 
    - prompt 
    - const/let 
    - number()

- se età minore di 18 prezzo = 0.21 * km -20%
    - if 

- se età maggiore di 65 prezzo = 0.21 * km -40%
    - else if
    
- il prezzo finale deve essere in forma umana 
    - log