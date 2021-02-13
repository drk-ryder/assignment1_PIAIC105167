function fun1 (){
    var a = 2, b = 1;
  
    document.write("<br>");
    document.write("--a is: "+ (--a));
    document.write("<br>");
    document.write("--a - --b is: "+ (--a - --b));
    document.write("<br>");
    document.write("--a - --b + ++b is: "+ (--a - --b + ++b));
    document.write("<br>");
    document.write("--a - --b + ++b + b-- is: "+ (--a - --b + ++b + b--));
    document.write("<br>");
    document.write("Result: "+ (--a - --b + ++b + b--));
}

fun1();