//function that generates random names.

function NameGenerator(){ 
    let name = "";
    for(let i = 0; i < 4; i++){
            name += letterRandomizer();
        
    }
    return name;
    
}

//randomizer function
function letterRandomizer(){ 
let alphabet = ["a","b","c","d","e","f","g","h", "i","j","k","l", "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let index = Math.floor(Math.random()*alphabet.length);
let randomLetter = alphabet[index];
return randomLetter;

}

console.log(NameGenerator());

