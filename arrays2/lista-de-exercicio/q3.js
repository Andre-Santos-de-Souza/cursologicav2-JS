function filterAndTransform(numbers){
    const arr1 = []
    numbers.filter(function(n){
        if(n % 2 === 0){
            arr1.push(n)
        }
    })
    const arr2 = arr1.map(function(el){
        return el*2
    })
    return arr2
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterAndTransform(numbers));