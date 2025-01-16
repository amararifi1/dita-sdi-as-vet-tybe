var firstName = "Digital"
var lastName = "School"
var fullName;

console.log(firstName + ' ' + lastName);

//////////////////////////////////////////// var + " " var

var school = "Digital School"

console.log(`Hello from ${school}`)

//////////////////////////////////////////// ${var}

var age = 65

console.log(age > 18 && age < 65)

var var1 = 5
var var2 = 6

//////////////////////////////////////////// &&

console.log(var1 == 5 || var2 == 5)

var var3 = 5;
var var4 = 6;
console.log(!(var3 == var4))

//////////////////////////////////////////// !()

function showMessage(){
    alert("This message is inside a function");
}

//showMessage();

//////////////////////////////////////////// function

function sum(x , y){
    return(x , y);
}

console.log(sum(5 , 10))
console.log(sum(5 , 2))
console.log(sum(100 , 10))

//////////////////////////////////////////// challenge ferenheight n celcius

function convert(f){
    return((f-32)*5/9)
}

console.log(convert(45))