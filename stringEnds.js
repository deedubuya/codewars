// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
function solution(str, ending) {
    // TODO: complete
    let index = str.length - ending.length;
    // if (str.substring(index) === ending) {
    //     console.log("Is true");
    // }
    return str.substring(index) === ending;

}

// solution('abc', 'bc'); // returns true
// solution('abc', 'd'); // returns false
// solution('abcde', 'cde'); //returns true
// solution('abcde', 'abc'); //returns false