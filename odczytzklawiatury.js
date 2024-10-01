//nalezy zainstalowac prompt sync npmeme
//npm install prompt-sync

//polecenie ktore wymaga funkcji prompt sync, bez tego nie bedzie dzialac
const prompt = require("prompt-sync")({ sigint: true });

console.log("[0].Dodawanie");
console.log("[1].Odejmowanie");
console.log("[2].Mnozenie");
console.log("[3].Dzielenie");
console.log("[4].Exit");

let wybor = "0";
let zm1, zm2;

function pobierz(){
    const a = prompt("Podaj a: ","0");
    const b = prompt("Podaj b: ","0");
    zm1 = parseFloat(a);
    zm2 = parseFloat(b);
};

do{
    wybor = prompt("Dzialanie: ","0");

    switch(wybor){
    case "0":
        pobierz();
        console.log(zm1+zm2);break;
    case "1":
        pobierz();
        console.log(zm1-zm2);break;
    case "2":
        pobierz();
        console.log(zm1*zm2);break;
    case "3":
        pobierz();
        console.log(zm1/zm2);break;
    case "4":
        console.log("Papa :(");break;
    default:
        console.log("zły wybor");break;

}
}while(wybor!=4);





