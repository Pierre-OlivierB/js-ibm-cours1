let dudule='test';
// console.log(dudule);
// document.write(dudule);

//----------------------------------
//integer
let day=3;
let work= 20;
let dayWork = day * work;
// console.log(typeof(dayWork));
// typeof(dayWork);

//string
let day2="3 need by part ";
let work2= "20 files";
let dayWork2 = day2 +" for "+ work2;
// console.log(dayWork2);
//---------------------------------------
//Array
let myBox  = new Array();
myBox[0]=1;
myBox[1]=0;
myBox[2]=12;
myBox[3]=8;
// console.log(myBox);
//---------------------------------
//Alert
//alert(myBox[0])
//---------------------------------
//boolean
let think = true;
// console.log(think);
//-----------------------------------
//Sort
let myNewBox  = new Array();
myNewBox = myBox.sort();
// console.log(myNewBox);

var table = new Array();
table[0]="an";
table[1]="cb";
table[2]="vr";
table[3]="vx";
table[4]="a";
table[5]="c";

// console.log(table[4]);

var tableTri = new Array();

tableTri = table.sort();

// console.log(tableTri);

//-----------
// Exercice
//program pair or impair
//display %
let turtle = new Array();
turtle[0]= 3;
turtle[1]= 12;
turtle[2]= 55;
turtle[3]= 4;

let modPair = new Array();
modPair[0]= turtle[0]%2;
modPair[1]= turtle[1]%2;
modPair[2]= turtle[2]%2;
modPair[3]= turtle[3]%2;
// console.log(modPair);
// if (Object.is(modPair[0], 0)){
//     console.log("Pair");
// }
// else{
//     console.log("Impair");
// }
// if (modPair[0]==0) {
//     console.log("Per-rier");
// }
// else{
//     console.log("Imper-méable");
// }


//Fibonacci suit
//display log[n] and value

let fibo = new Array();
fibo[0]=0;
fibo[1]=1;
fibo[2]=1;
fibo[3]=2;
fibo[4]=3;
fibo[5]=5;
fibo[6]=8;
fibo[7]=13;

let index = 0;
let value = 0;
// console.log("rang : "+fibo.indexOf(value),"value : "+fibo[index]);
let fiboFor = new Array();
let at = 0;
let bt = 1;
for(i=0;i<10;i++){
    fiboFor[i]= at;
    let c = at + bt ;
    at=bt;
    bt=c;
    // console.log(c);
}
console.log(fiboFor);

for(i=0;i<fiboFor.length;i++){
   console.log("rang : "+ i +" value : "+fiboFor[i]);  
}

//------------------------
//operator mini
let calc = 3;
calc++;
calc*=42;
// console.log(calc);
calc--;
// console.log(calc);

let position = 5;
let taille = 12;
let calcul;

calcul=(position++)*taille;
// console.log(position);
// console.log(calcul);
calcul=(++position)*taille;
// console.log(calcul);

//------------------------------
//condition
let a=5, b=7;
// if (a > b) {
//     console.log("a > b");
// }
// else{
//     console.log("a < b");
// }