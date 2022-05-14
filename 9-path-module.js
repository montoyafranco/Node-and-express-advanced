const { readFileSync, writeFileSync } = require("fs");

// o const fs = require('fs)   ----  fs.readfyleSinc  otra forma de hacerlo

// CON ESTO  LEO LO QUE ESTA EN LOS ARCHIVOS O BASCIAMENTE EL ARCHIVO
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

/* CON ESTO SI EL ARCHIVO NO EXISTE LO CREA , ANTES NO EXISTIA RESULT.SYNC.TXT SINO LO SOBREESCRIBE(todo)
SI LE PASO UN 3ER PARAMETRO COMO OBJETO LO VA A APPEND PARA NO SOBRESCIRBIR*/
writeFileSync(
  "./content/result-sync.txt", //REQUERIDO - RUTA Y ARCHIVO A CREAR
  `Here is the result : ${first} , ${second} `, //REQUERIDO  -- QUE LE VAMOS A PONER AL ARCHIVO
  { flag: "a" } // OPCIONAL ESTE ES EL 3ER PARAMETRO Q VA A HACER Q SE HAGA APPEND
);
