function modifyArray(numbers){
    const arr1 = numbers.slice(0,3)
    numbers.splice(5,7,99,100,101)
    return {
        originalSlice: arr1,
        modifiedArray: numbers
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(modifyArray(numbers));  
