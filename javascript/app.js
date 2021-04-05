for (var n = 0; n < 3; n++) {
    
    alert("welcome to the color theory page");
    }
    
    
    var username = prompt("what's your name?");
    
    
    var color = prompt("what's your favourite theory ? please choose between: C -> complementary colors, T -> trindic colors ,A ->analogous color");
    
    function favCol() {
    
        while (color!== 'T' && color !== 'C' && color !== 'A') {
            color = prompt("please choose T,C,A and upper case only");
        }
    
    }
    
    
    favCol();
    
    
    var numberOfTheorys = prompt("How many times you want us to see your favourite theory?");
    
    var favTheo=function() {
       
        var p = '';
        var result = '';
    
        if (color == 'C') {
            p = ('<img src="picture/1.png" >');
    
        } else if (color == 'T') {
    
            p = ('<img src="picture/3.png" >');
    
        } else if (color == 'A') {
    
            p = ('<img src="picture/2.png" >');
        }
    
        for (var i = 0; i < numberOfTheorys; i++) {
            result += p
        }
            return result
    }
    