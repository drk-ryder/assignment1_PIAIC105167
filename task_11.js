function temperature (){
    var c_grade = 25;
    var f_heit = (c_grade *(9/5)) + 32;
    document.write(c_grade +"°C is "+ f_heit +"°F");
    document.write("<br>");
    f_heit = 70;
    c_grade = (f_heit-32)*(5/9);
    document.write(f_heit +"°F is "+ c_grade+"°C");
}

temperature();