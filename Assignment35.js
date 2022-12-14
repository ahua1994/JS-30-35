//Assignment-JS-35:
//This is an interview question asked by Google.
//Given a list of numbers and a number k, return whether
//any two numbers from the list add up to k.
//For example, given [10, 15, 3, 7] and k of 17, return true
//since 10 + 7 is 17.

// Assuming inputs are valid
// let equalsK = (arr, k) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === k) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };

let equalsK = (arr, k) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (
            arr.includes(k - arr[i]) &&
            arr.indexOf(k - arr[i]) != arr.lastIndexOf(k - arr[i])
        ) {
            return true;
        }
    }
    return false;
};

console.log(equalsK([10, 15, 3, 7], 17));
