function fun1 (){
    var var1;
    document.write("Value after variable declaration is : " + var1);
    document.write("<br>");
    
    var1 = 23;
    document.write("Initial value of the Variable now : "+var1);
    var1++;
    document.write("<br>");
    document.write("Value after increment is: "+ var1);
    document.write("<br>");
    var1=var1+7;
    document.write("Value after addition of 7 is: "+ var1);
    document.write("<br>");
    var1--;
    document.write("Value after decrement is: "+var1);
    document.write("<br>");
    document.write("Remainder is: "+(var1%3));
}

fun1();