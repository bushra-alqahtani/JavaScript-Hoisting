//1
var hello = 'world';
console.log(hello);  //world    

//2
console.log("======================");
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test(); //magnet

//3
console.log("======================");
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);//super cool


//4
console.log("======================");
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
} //chicken
//half-chicken

//5
console.log("======================");
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);
//chicken
// chicken
// fish
// chicken



//6
console.log("======================");
var genre = "disco";
console.log(genre);
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// disco
// rock
// r&b
// disco

//7
console.log("======================");
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//san jose
// seattle
// burbank
// san jose



//8

console.log("======================");


function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
    dojo.hiring = true;
}
    else if(dojo.students <= 0){
   // dojo = "closed for now";   can not reassign to const So i put it as comment
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); // logs { name: 'Chicago', students: 65, hiring: true }
console.log(makeDojo("Berkeley", 0));//{ name: 'Berkeley', students: 0 }