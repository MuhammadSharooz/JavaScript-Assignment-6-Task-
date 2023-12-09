let limit= 20 ;
 let odd = [];
 let even = [];
for(let i=1; i<= 20; i++){
    if (i % 2 === 0) {
        even.push(i);
    }    
    else {
        odd.push(i);
    }
} 
document.write("<h1>Even number:</h1>");
document.write("Even Number : " + even.join("'") + "<br>")
document.write("<h1>Odd number:</h1> odd: " + odd);

