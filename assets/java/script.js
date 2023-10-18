let saisies = [];
const totalProcent = [];
const reset = 0;
console.log(rassembler);
console.log(totalProcent);
console.log(reset);
let allButtons = document.querySelectorAll("button");
console.log(allButtons);
allButtons.forEach(unBouton => {
    unBouton.addEventListener("click", (clickEvent) => {
        if (clickEvent.target.innerText != "=" && clickEvent.target.innerText != "C" && clickEvent.target.innerText != "A2" && clickEvent.target.innerText != "%") {
            
             console.log(clickEvent.target.innerText);
             saisies.push(clickEvent.target.innerText);
             document.querySelector(".ecran").innerText += clickEvent.target.innerText;
             console.log(saisies);
        }
            else {
                if (clickEvent.target.innerText == "C") {
                    document.querySelector(".ecran").innerText = "0";
                    let reset = 0;
                    console.log(reset);
                    saisies = [];
                }
                else {
                     console.log(saisies);
                     let operations = saisies.join("");
                     console.log(operations);
                     const total = eval(operations);
                     console.log("Total : ", total);
                     document.querySelector(".ecran").innerText = total;
                         if (clickEvent.target.innerText == "A2") {
                             let myString2 = total;
                             let asFloat2 =parseFloat(myString2).toFixed(2);
                             console.log(asFloat2);
                             document.querySelector(".ecran").innerText = asFloat2;                            
                            }
                        if (clickEvent.target.innerText == "%") {
                             let totalProcent = total/100;
                             document.querySelector(".ecran").innerText = totalProcent;                             
                         }
                     }// saisies = [];     
                
            }
     })
})
            
            
            
            
            
            
            
            
            
            
            
            
        
//         if (clickEvent.target.innerText != "=" && clickEvent.target.innerText != "C" && clickEvent.target.innerText != "M" && clickEvent.target.innerText != "%") {
//             console.log(clickEvent.target.innerText);
//             saisies.push(clickEvent.target.innerText);
//             document.querySelector(".ecran").innerText += clickEvent.target.innerText;
//             console.log(saisies);
        
//         }
//         else {
                 
            
//             console.log(saisies);
            
//             let operations = saisies.join("");
//             console.log(operations);
//             const total = eval(operations);
//             console.log("Total : ", total);
//             document.querySelector(".ecran").innerText = total;
//             let reset = 0;

                
             
//         }
//              if (clickEvent.target.innerText == "C") {
//                 document.querySelector(".ecran").innerText = "0";
//                 let reset = 0;
//                 console.log(reset);
                
//             }
//             if (clickEvent.target.innerText == "M") {
                 
//                 let memory = total;
//                 console.log("Memory :", memory);
//                 document.querySelector(".ecran").innerText = "0";
//             }
//             if (clickEvent.target.innerText == "%") {
                  
//                 let totalProcent = total/100;
//                 document.querySelector(".ecran").innerText = totalProcent;
                
//             }
            
                   
        
            
           
//     })
        
// })

// if (clickEvent.target.innerText != "=" && clickEvent.target.innerText != "C" && clickEvent.target.innerText != "M" && clickEvent.target.innerText != "%") {
//     console.log(clickEvent.target.innerText);
//     saisies.push(clickEvent.target.innerText);
//     document.querySelector(".ecran").innerText += clickEvent.target.innerText;
//     console.log(saisies);
// }
// else {
//     if (clickEvent.target.innerText == "C") {
//         document.querySelector(".ecran").innerText = "0";
//         let reset = 0;
//         console.log(reset);
        
//     }
//         else {
         
    
//         console.log(saisies);
        
//         let operations = saisies.join("");
//         console.log(operations);
//         const total = eval(operations);
//         console.log("Total : ", total);
//         document.querySelector(".ecran").innerText = total;
//         let reset = 0;

//             if (clickEvent.target.innerText == "M") {
         
//             let memory = total;
//             console.log("Memory :", memory);
//             document.querySelector(".ecran").innerText = "0";
         
//         }
//             if (clickEvent.target.innerText == "%") {
          
//             let totalProcent = total/100;
//             document.querySelector(".ecran").innerText = totalProcent;
            
//             }
//         }
    
   
// }











