module.exports = function solveEquation(equation) {
    let arr = equation.split(" ");
    let a = parseInt(arr[0]);
    let b = arr[4] * parseInt(arr[3] + 1);
    let c = arr[8] * parseInt(arr[7] + 1);
    let d = Math.pow(b, 2) - 4 * a * c;
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    let result = [];
    result.push(Math.round(x1));
    result.push(Math.round(x2));
    return result.sort((left, right) => left - right);
}