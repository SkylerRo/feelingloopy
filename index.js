const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26/n"


let currentCell = 1
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';

for (let i = 0; i < csv.length; i++) {


   
 if (csv[i] === ","){

 currentcell++   

} else if (csv[i] === "\n") {

console.log(cell1,cell2,cell3,cell4);
currentCell = 1;
cell1 = '';
cell2 = '';
cell3 = '';
cell4 = '';

} else {
if (currentCell===1) {
    
}
}  

}
