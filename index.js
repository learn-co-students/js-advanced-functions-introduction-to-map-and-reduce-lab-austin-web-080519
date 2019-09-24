// Your code here

const mapToNegativize = (array) => {
    let newArray = array.map( (num) => {
        return num * -1
    })
    return newArray
}

const mapToNoChange = (array) => {
    let newArray = array.map( (num) => {
        return num
    })
    return newArray
}

const mapToDouble = (array) => {
    let newArray = array.map( (num) => {
        return num * 2
    })
    return newArray
}

const mapToSquare = (array) => {
    let newArray = array.map( (num) => {
        return num ** 2
    })
    return newArray
}

const reduceToTotal = (sourceArray, startingPoint = 0) => {
    let sum = sourceArray.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, startingPoint);
      return sum
}

const reduceToAllTrue = (sourceArray) => {
    return sourceArray.reduce( (accumulator, item) => {
        if(!item) {
            accumulator = accumulator && false
        }
        return accumulator
    }, true)
}

const reduceToAnyTrue = (sourceArray) => {
    return sourceArray.reduce( (accum, item) => {
        if(item) {
            accum = accum || true
        }
        return accum
    }, false)
}