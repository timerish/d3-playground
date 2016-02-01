//create an empty array with nothing in it
emptyarray = []

//push three objects into the set
emptyarray.push('now you have me'); //these are all single quotes
emptyarray.push('and me');
emptyarray.push('and me too');

//see if the array is there, in the console
console.log(emptyarray);
//result: ["now you have me", "and me", "and me too"]
//undefined
//it appears but is undefined

//json stringify the array (change from javascript to json)
JSON.stringify(emptyarray);

//final result: "["now you have me", "and me", "and me too"]"
//notice the extra quotes around the array
