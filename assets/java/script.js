let allButtons = document.querySelectorAll("button");
console.log(allButtons);
allButtons.forEach(unBouton => {
    unBouton.addEventListener("click", (clickEvent) => {
        console.log(clickEvent.target.innerText);
        document.querySelector(".ecran").innerText += clickEvent.target.innerText;
    })
})
// button.addEventListener("click", function() {console.log("oui")});
// if (Numero >= 0) {
// oninput.Number = ecran;
// }
let op;
function func() {
    var Rezultat;
    var num1 = Number(document.getElementById(num1).value);
    var num2 = Number(document.getElementById(num1).value);
    // var Rezultat = Number(document.getElementById(num1).value);
    switch (op) {
        case '+':
            Rezultat = num1 + num2;
            break;
        case '-':
            Rezultat = num1 - num2;
            break;
        case '*':
            Rezultat = num1 * num2;
            break; 
        case '/':
            Rezultat = num1 / num2;
            break;  
       
        // document.getElementById("Rez").innerHTML = ecran;          
    }
        //  if (Rezultat <=0) {
        //     //  oninput id="rez.value";
        //  }
    document.getElementById("Rezultat").innerHTML = Rezultat;
}


// let maTable = document.createElement("table");
// document.body.appendChild(maTable);
// // maTable.appendChild(Ecran);
// // maTable.appendChild(Zero);
// // maTable.appendChild(Numero);
// // maTable.appendChild(Signe);
// // Memory
// // Rezultat
// const letters = ["A", "B", "C", "D"];
// for (let nbRows = 0; nbRows <= 3; nbRows++) {
//     let uneRow = document.createElement("tr");
//     maTable.appendChild(uneRow);
//     for (let nbColumn = 0; nbColumn <= 4; nbColumn++) {
//         let uneColumn = document.createElement("td");
        

//         // uneColumn.setAttribute("id", letters[nbColumn] + parseInt(nbRows))
//         if (nbColumn = 0 && nbRows >= 2) {
//               uneColumn.classList.add("numero");
//         }
//         // uneColumn.setAttribute("id", letters[nbColumn] + parseInt(nbRows))
//             if (nbColumn = 0 && nbRows >= 4) {
//                 uneColumn.classList.add("zero");
//             }
//             if (nbColumn = 3 && nbRows >= 3) {
//                 uneColumn.classList.add("signe");
//             }
//         }
     
        
    
//     uneRow.appendChild(uneColumn);
// }
// }
// let maTable = document.createElement("table");
// document.body.appendChild(maTable);
// const letters = ["A", "B", "C", "D", "E","F", "G", "H"];
// for (let nbRows = 0; nbRows <= 8; nbRows++) {
//     let uneRow = document.createElement("tr");
//     maTable.appendChild(uneRow);
//     for (let nbColumn = 0; nbColumn <= 8; nbColumn++) {
//         let uneColumn = document.createElement("td");
//         if ((nbColumn != 0 && nbRows != 0) && (nbColumn % 2 == 0 && nbRows % 2 == 0) || (nbColumn % 2 == 1 && nbRows % 2 == 1)) {
//             uneColumn.classList.add("black");
//             uneColumn.setAttribute("id", letters[nbColumn-1] + parseInt(nbRows))
//         }
//         else {
//             uneRow.classList.add("white");
//             uneColumn.classList.add("letre");
//            if (nbColumn == 0 && nbRows >= 0) {
//               uneColumn.textContent = (nbRows);
//             }
//             uneColumn.setAttribute("id", letters[nbColumn-1] + nbRows)
//         }
//         if (nbRows==0 ){
//            let alpha=((nbColumn-1)+1).toString();
//            uneColumn.textContent=(letters[alpha-1]);
//            }
      
       
//         uneRow.appendChild(uneColumn);

//     }
// } 
// let img = document.createElement("img");
// img.setAttribute("src", "./assets/img/white/chevalier.png");
// document.querySelector("#A2").appendChild(img);



