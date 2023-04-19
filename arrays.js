var plants = ["Roses", "Cacti", "Sunflower", "Daffodil"]
var familyAges = [28, 23, 62, 61]
var happy = [true, false, false, true]

//The slice method returns a copy of an array where start and end represent
// the index of items in that array.
//It will be Cacti, and sunflower because it starts at index 1, and end before index 3.
console.log(plants.slice(1,3));

//The method will remove the last element from an array
//and returns that element. It will change the array length. 
//Array will now be 28,23,and 62. 
console.log(familyAges.pop());

//The shif()method removes the first element from an array and changes
// the length of the array. 
//The array will be false, false,true.
console.log(happy.shift());

