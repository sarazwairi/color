// first prompt

var username = prompt("what's your name?");

function welcomeMessage(username) {
    console.log(username);
}
    alert("welcome " + username + " to the color theory page");




// second prompt

var color = prompt("what's your favourite theory ? please choose between: C -> complementary colors, T -> trindic colors ,A ->analogous color");
while (color!=='T'&&color!=='C'&&color!=='A') {
    color=prompt("please choose T,C,A and upper case only");
}
console.log(color);




// third prompt

var numberOfTheorys = prompt("How many times you want us to see your favourite theory?");

var p = '' ;
var result='' ;  

    if (color == 'C') {
        p = ('<img src="picture/1.png" >');
    } else if (color == 'T') {
        p = ('<img src="picture/3.png" >');
    } else if (color == 'A') {
        p = ('<img src="picture/2.png" >');
    }
    for (var i=0;i<numberOfTheorys;i++) {
    result+=p
    } 
   
    document.write('<h3>' + "Hello " + username + '</h3>');
       
    document.write('<h2>' + "Your favourite theory is:" + p + '</h2>');

    document.write('<h2>' + "Number of theorys is:" + numberOfTheorys + '</h2>');
     
    document.write(result)