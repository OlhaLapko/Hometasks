const array = [1, 3, 4, 6, 2, 5, 7];
function removeElement(array, item) {
    const resultArray = [];
    for (let i=0; i<array.length; i++){
        if (array[i] !== item){
            resultArray[resultArray.length] = array[i];
        }
    }
    for (let i=0; i<resultArray.length; i++){
        array[i] = resultArray[i];
    }
    array.length = resultArray.length;
    return array;
}
removeElement(array, 4);
console.log(array);