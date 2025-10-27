//let elektro = [];
let kopejaVertiba = 0;
let preces =
[
   veļasmašīna = {nosaukums: "Samsung UltraFast XT 3000 Washing Machine", kategorija: "Elektronika", cena: 500, daudzums_noliktava: 3},
   telefons = {nosaukums: "Iphone 14", kategorija: "Elektronika", cena: 900, daudzums_noliktava: 6},
   bikses = {nosaukums: "Gucci Jeans", kategorija: "Apģerbi", cena: 90, daudzums_noliktava: 2},
];

for (let i = 0; i < preces.length; i++)
{
     kopejaVertiba = preces[i].cena * preces[i].daudzums_noliktava + kopejaVertiba;

    if (preces[i].kategorija == "Elektronika")
    {
        //elektro = elektro + preces[i].nosaukums + "; "

        console.log(preces[i].nosaukums)

    };
};

//console.log("Elektronika: " + elektro)

console.log("--------------Seperate-----------------");

console.log("Kopējā summa: " + kopejaVertiba + " EUR");
