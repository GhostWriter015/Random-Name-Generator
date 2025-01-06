//scrievre un programma che genera nomi casuali, alla fine del nome ci deve essere una h.

function NameGenerator(){ //funzione che crea un nome 
    
    let name = "";
    for(let i = 0; i < 4; i++){
            name += letterRandomizer();
        
    }
    return name;
    
}

function letterRandomizer(){ //funzione che prende una lettera dall'alfabeto in maniera casuale 
let alphabet = ["a","b","c","d","e","f","g","h", "i","j","k","l", "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let index = Math.floor(Math.random()*alphabet.length);
let randomLetter = alphabet[index];
return randomLetter;

}

console.log(NameGenerator());

