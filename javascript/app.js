// first prompt

var username = prompt("what's your name?");

    alert("welcome " + username + " to van's gallery");

welcomeMessage(username);


// second prompt

var painting = prompt("what's your favourite van's painting? please choose between: S -> Starry Night, I -> Irises  or W -> Wheatfield ");

console.log(painting);


// third prompt

var numberOfPaintings = prompt("How many times you want us to view your favourite painting?");
   
var p = '';

    if (painting == 'S') {
        p = ('<img src="photos/starryNight.jpg" >');
    } else if (painting == 'I') {
        p = ('<img src="photos/irises.jpg" >');
    } else if (painting == 'W') {
        p = ('<img src="photos/field.jpg" >');
    }
   
   