const numbers = [1, 2, 3, 4, 5];


const rotateLeft = (arr, n) => {
    for (let i = 0; i < n; i++) {
        const num = arr.shift();
        arr.push(num)
    }
}

rotateLeft(numbers, 2);

console.log(numbers)