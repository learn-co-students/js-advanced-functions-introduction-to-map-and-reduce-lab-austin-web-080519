// Your code here
function mapToNegativize(arr){
    return arr.map(el => 0-el);
}

function mapToNoChange(arr){
    return arr.map(el => el);
}

function mapToDouble(arr){
    return arr.map(el => el * 2);
}

function mapToSquare(arr){
    return arr.map(el => el ** 2);
}

function reduceToTotal(arr, num = 0){
    return arr.reduce(((sum, n) => sum + n), num);
}

function reduceToAllTrue(arr){
    return arr.reduce(((sum, n) => !!sum && !!n), true);
}

function reduceToAnyTrue(arr){
    return arr.reduce(((sum, n) => !!sum || !!n), false);
}

