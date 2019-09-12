// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    // Return a new array with the strings filtered out
    //let result = l.filter(num => typeof (num) === "number");
    //console.log(result);
    //console.log(l.filter(num => typeof (num) === "number"));
    return l.filter(num => typeof (num) === "number");
}

filter_list([1, 2, 'a', 'b']) // == [1, 2]
filter_list([1, 'a', 'b', 0, 15]) // == [1, 0, 15]
filter_list([1, 2, 'aasf', '1', '123', 123]) // == [1, 2, 123]
