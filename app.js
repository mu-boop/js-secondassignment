// Chapter-21

// Q-1

// var a = prompt("Enter your name");
// var b = a.toUpperCase();
// alert(b);

// Q-2

// var a = prompt("Enter you full name");
// var spacefind = a.indexOf(" ");
// var b = a.slice(0,1).toUpperCase()+ a.slice(1,spacefind)+" "+a.slice(spacefind++,spacefind+1).toUpperCase()+ a.slice(spacefind+1);
// alert(b);


// Chapter-22

// Q-1

// var a = prompt("Enter your favorite  mobile name");

// var b = a.length;

// alert(b);


// Q-2

// var a = prompt("ENter your name here");

// var b = a.charAt(a.length-1);

// alert(b);

// Chapter-23

// Q-1

// var a = "Pakistani";

// var b = a.indexOf("n");

// document.write(b);


// Q-2

// var a = prompt("ENter your name")
// var b = ["@","!","&","(",")"];
// for(var i = 0 ; i <=a.length ; i++){
//     if(a(i) >="charCodeAt(33)" && a(i) <="charCodeAt(47)" || a(i) > "charCodeAt(58)" && "charCodeAt(64)" || a(i) > "charCodeAt(91)" && a(i) < "charCodeAt(96)" ){
//         alert("Enter valid username")
//     }
// }
// for(var i = 0 ; i <=a.length ; i++){
//     if(a(i) >= a.charCodeAt(65) && a(i)< a.charCodeAt(90) || a(i) >= charCodeAt(97) && a(i) <=charCodeAt(122)){
//         alert("Enter valid username")
//     }
// }

// for(var i = 0 ; i <=a.length ; i++){
//     for(var j = 0 ; j <=b.length ; j++){
//         if(a(i) === b[j]){
//             alert("Enter valid username")
//         }
//     }

// }

// Q-3


// var a = "“The quick brown fox jumps over the lazy dog”";

// var b = a.indexOf("the");

// alert(b);


// Chapter-24

// Q-1
// var a = "pakistani";

// var b = a.charAt(3);
// document.write(b);

// Chapter-25

// Q-1

// var a = "Hyderabad";

// var b = a.replace("Hyder","Islam");

// document.write(b);


// Q-2

// var a ="“Ali and Sami are best friends. They play cricket and football together.”"

// var b = a.replace(/and/g,"&");

// document.write(b);

// Chapter-26

// Q-1

// var a = +prompt("Enter value with decimal");

// var b = Math.round(a);

// var c = Math.floor(a);

// var d = Math.ceil(a);

// document.write("Round off :"+b+ "<br />");
// document.write("Floor :"+c+ "<br />");
// document.write("Ceil :"+d+ "<br />");

// Q-2

// var a = +prompt("Enter nagetive value with decimal");

// var b = Math.round(-a);

// var c = Math.floor(-a);

// var d = Math.ceil(-a);

// document.write("Round off :"+b+ "<br />");
// document.write("Floor :"+c+ "<br />");
// document.write("Ceil :"+d+ "<br />");


// Chapter-27

// Q-1

// var a = Math.random();

// document.write(a);

// Q-2

// var a = prompt("Enter first player");
// var b = prompt("Enter second player");

// var c = Math.random()*2;


// var d = Math.round(c);

// if(d === 1){
// document.write(a+" tails <br />"+b+ " heads");
// }else{
// document.write(a+" heads <br />"+b+ " tails");
// }

// Q-3

// var a = +prompt("Enter number from 1 to 10")
// var b = Math.random()*11;
// var c = Math.floor(b);

// if(a === c){
//     alert("Congrats");
// }else{
//     alert("Try again");
// }

// Chapter-28

// Q-1

// var a =prompt("Enter your weight");
// var b = parseFloat(a);
// document.write(c + "Kgs");


// Chapter-29

// Q-1

// var a = "1999";
// var b = Number(a);

// var c = typeof(a);
// var d = typeof(b)
// document.write("Type of "+" '"+ a +"' "+ "is "+ c+"<br />");
// document.write("Type of "+b+" is "+d);

// Q-2

// var a = 23.45;
// var b = a.toString();
// var c = a + ' ';
// var d = c.replace('.','')

// document.write(d+"<br />");
// document.write(typeof(d))

// Chapter-30

// Q-1

// var percentage = 30/45*100;

// var control = percentage.toFixed(2);

// document.write("Your percentage is "+control)





