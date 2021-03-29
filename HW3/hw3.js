// task 1 

const array = [2, 3, 4, 5];
let productOfElements = 1;
let productOfElements2 = 1;


for (let i = 0; i < array.length; i++) {
    productOfElements *= array[i]
};

let count = 0;

while (count < array.length) {
    productOfElements2 *= array[count]
    count++
};

console.log(`Task 1 
For loop: ${productOfElements}, 
While loop: ${productOfElements2}`);

// task 2

(function(n) {
    console.log('Task 2')
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is odd`)
        } else {
            console.log(`${i} is even`)

        }
    }
}(15));

// task 3

function randArray(length) {
    const randomArray = [];
    let count = 0;
    while (count < length) {
        randomArray.push(Math.ceil(Math.random() * 499 + 1))
        count++;
    }
    console.log(`Task 3 
Random array: ${randomArray.join(',')};`)
}

randArray(5)

// task 4

let num = prompt('Enter the first integer', '')
let degree = prompt('Enter degree (integer)', '')

function raiseToDegree(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return confirm('Incorrect data');
    } else {
        let c = a ** b;
        return confirm(`${a}^${b} = ${c}`);
    }
}

if (num && degree) raiseToDegree(Number(num), Number(degree));

// task 5

function findMin() {
    return console.log(Math.min(...arguments))
};

findMin(12, 14, 4, -4, 0.2);

// task 6

function findUnique(arr) {
    repeatFound: for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                continue;
            } else if (arr[i] === arr[j]) {
                console.log(false)
                break repeatFound;
            } else if (i === arr.length - 2 && j === arr.length - 1) {
                console.log(true)
            }
        }
    }

}

findUnique([1, 2, 3, 5, 3]);
findUnique([1, 2, 3, 5, 11])

// task 7

function lastElem(arr, num = 1) {
    const newArray = arr.slice(-num)
    return console.log(newArray)
}
console.log(lastElem([3, 4, 10, -5])); // -5
console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]

//  task 8 

function toUppercase(string) {
    const arrayWords = string.split('');
    const arrayLeter = [];
    for (let i = 0; i < arrayWords.length; i++) {
        if (arrayWords[i - 1] === ' ' || i === 0) {
            arrayLeter.push(arrayWords[i].toUpperCase());
        } else {
            arrayLeter.push(arrayWords[i])
        }
    }
    return console.log(arrayLeter.join(''))
};

toUppercase('i love java script')