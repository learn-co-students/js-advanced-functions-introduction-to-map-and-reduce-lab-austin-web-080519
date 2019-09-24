const mapToNegativize = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let newValue = array[i] - (array[i] * 2);
        newArray.push(newValue);
    }
    return newArray;
}

const mapToNoChange = (array) => {
    let newArray = array;
    return newArray;
}

const mapToDouble = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let newValue = array[i] * 2
        newArray.push(newValue);
    }
    return newArray;
}

const mapToSquare = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let newValue = array[i] ** 2;
        newArray.push(newValue);
    }
    return newArray;
}

const reduceToTotal = (array, startingPoint = 0) => {
    let currentSum = startingPoint;
    for (let i = 0; i < array.length; i++) {
        currentSum = currentSum + array[i];
    }
    return currentSum;
}

const reduceToAllTrue = (array) => {
    let value;
    for (const element of array) {
        if ( Boolean(element) === false ){
            value = false;
        } else {
            value = true;
        }
    }
    return value;
}

const reduceToAnyTrue = (array) => {
    let value;
    for (const element of array) {
        if (Boolean(element) === true) {
            return value = true;
        } else {
            value = false;
        }
    }
    return value;
}