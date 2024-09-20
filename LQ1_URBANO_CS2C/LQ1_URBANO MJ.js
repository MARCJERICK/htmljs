//Variable name and personas 1 information
let fullname = "Maria Delos Santos Las Marias"
let age = 25
let address = "Upper Session Road, Baguio City, Benguet"
//Variable name and persona 2 information
let fname = "Juan Gamoso Dela Cruz"
let Age = 28
let Address = "San Nicolas, Candon City, Ilocos Sur" 
//using of split&join type Conversion
let split = fullname.split(" ");
let rearrange = [split[3], split[4], split[0], split[1], split[2]].join(" ");
let split2 = fname.split(" ");
let rearrange2 = [split2[2], split2[3], split2[0], split2[1],].join(" ");
// Output the rearranged name and length of the name, age, address, and address length of persona 1
console.log("Name:", rearrange.toLocaleUpperCase() + ", " + "Age:", age + ", " + "Address:", address);
// Output the rearranged name and length of the name, age, address, and address length of persona 2
console.log("Name:", rearrange2.toLocaleUpperCase() + ", "+ "Age:", Age + ", " + "Address:", Address );
//The Name length and Address length of Person 1 and 2
console.log("Person1 Name length:",fullname.length);
console.log("Person 2 Name length:",fname.length);
console.log("Person 1 Address length:", address.length);
console.log("Person 2 Address length:", Address.length);
//sum of all numeric value
let sum = age + Age + fullname.length + address.length + fname.length + Address.length;
console.log("Result:", sum)
//adding the both age of person 1 and 2
let add = age + Age;
//the resukt of two age
console.log("Result:", add);
//subtracting the sum of both age to name length of pesona 1
let sub = add - fullname.length;
//this is the result ff subtracting
console.log("Result:", sub);
//mutiplying the result of persona 2 name
let mult = sub * fname.length;
//the result multiplying
console.log("Result:", mult);
//raising the power of persona 1 to persona 2
let power = address.length ** Address.length;
console.log("Result:", power);