function lessComparator(lhs, rhs) {
    return lhs < rhs;
}

function greaterComparator(lhs, rhs) {
    return lhs > rhs;
}

function findMin(arr, comparator) {
    let min = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        let val = arr[i];
        if (comparator(val, min)) {
            min = val;
        }
    }
    return min;
}

function findMedian(arr) {
    let sorted = quicksort(arr, lessComparator);
    let ind = Math.floor(sorted.length / 2);
    return sorted[ind];
}

function quicksort(arr, anyComparator) {
    return quicksortImpl(arr.slice(0), anyComparator);
}

function quicksortImpl(arr, cmp) {
    if (arr.length < 2) {
        return arr;
    } else {
        let checkValue = arr[0];
        let containsTheSameVal = true;
        for (let val of arr) {
            if (val !== checkValue) {
                containsTheSameVal = false;
                break;
            }
        }
        if (containsTheSameVal) {
            return arr;
        }
    }

    let pivot_ind = Math.floor(Math.random() * arr.length);
    let pivot = arr[pivot_ind];

    let lhs = [];
    let rhs = [];
    for (let val of arr) {
        if (cmp(val, pivot)) {
            lhs.push(val);
        } else {
            rhs.push(val);
        }
    }
    return quicksortImpl(lhs, cmp).concat(quicksortImpl(rhs, cmp));
}

function countSubElementsImpl(element, currState) {
    let tag = element.tagName;
    if (!currState.hasOwnProperty(tag)) {
        currState[tag] = 0;
    }

    currState[tag] += 1;
    for (let child of element.children) {
        countSubElementsImpl(child, currState);
    }
    return currState;
}

function countElements() {
    const element = document.getElementsByTagName("body")[0];
    let currState = {};
    return countSubElementsImpl(element, currState);
}

// checking comparators
let isLess = lessComparator(10, 14);
console.log("10 < 14:", isLess);
let isGreater = greaterComparator(10, 14);
console.log("10 > 14:", isGreater);

// creating an array with random numbers
let arr = [];
let size = 1000;
let maxValue = 1000000;
for (let i = 0; i < size; ++i) {
    let randValue = Math.floor(Math.random() * maxValue);
    arr.push(randValue);
}

//  printing out the array
console.log("Array before sorting:")
console.log(arr);

// sorting the array and checking whether it's sorted
arr = quicksort(arr, lessComparator);
for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] > arr[i + 1]) {
        console.log('Error. Array is not sorted');
    }
}


// printing out the sorted array
console.log("Array after sorting:")
console.log(arr);
// printing out the min, max, median elements
console.log("sorted array's first element:", arr[0]);
console.log("sorted array's last element:", arr[arr.length - 1]);
console.log("sorted array's middle element:", arr[arr.length / 2]);

// searching and printing out found max, min, median elements
console.log("array found min element:", findMin(arr, lessComparator));
console.log("array found max element:", findMin(arr, greaterComparator));
console.log("array found median element:", findMedian(arr));

console.log(countElements());