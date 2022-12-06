//Task 1
const arr = ['js', 'css', 'html'];
console.log(arr[0]);

//Task 2
let arr1 = [0, 1, false, 2, undefined, '', 3, null];

let arrNew = arr1.filter(function(n) {
    return n > 0;
});

console.log(arrNew);

//Task 3
let arr3 = [[1,2], [1,2,3], [1,2,3,4]];

function result(n) {
    for(i = 0; i < n; i++) {
        if (arr3[i].length < 3) {
            i+=1;
        } else {
            console.log(arr3[i].length);
        }
    }
    return arr3[i].length;
};

console.log(result());