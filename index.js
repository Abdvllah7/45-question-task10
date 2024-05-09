"use strict";
/* This video is for comment tutorial

/ please dont change line 3 to 6. (abdullah)
let PersonName: string = "muhammad abdullah";

// step 1 show in lower case:

let lowercaseName: string = PersonName.toLowerCase();

console.log(lowercaseName);

// step 2 show name in uppercase:

let uppercaseName: string = PersonName.toUpperCase();

console.log(uppercaseName);

// step 3 show name in titlecase

let words: string[] = PersonName.split(" ");

let titlecaseName: string = ""

for (let i = 0 ; i < words.length; i++) {

    titlecaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+" "
};

console.log(titlecaseName) 
