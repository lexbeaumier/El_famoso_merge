//1.implémente un merge sort récursif
const fs = require('fs');

//2.Montre le chemin en local
const fileName = process.argv[2];
const data = fs.readFileSync(fileName, 'utf8');
const listConvertArray = data.split(' ').map(num => parseInt(num, 10));


//3.Tri
function mergeSortTopDown(array) {
    if(array.length <= 1){
        return array
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}
//4.Merge
var countFunction = 0;

function mergeTopDown(left, right) {
    const array = [];
    countFunction ++;
    
    while(left.length && right.length) {
        
        if(left[0] < right[0]) {
            array.push(left.shift());
            
        } else {
            array.push(right.shift());
            
        }  
    }
    return array.concat(left.slice()).concat(right.slice());
}

console.log(mergeSortTopDown(listConvertArray))
console.log("The loop runs " + countFunction +  " times.")

