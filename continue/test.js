
text2 ="";
var i; 
for (i=0; i<50;i++){
           if(i==10 || i==20 || i==30) {
        continue;}
            text2+=" the number is " + i+"<br>";
        }
            document.getElementById("continue").innerHTML=text2;
    