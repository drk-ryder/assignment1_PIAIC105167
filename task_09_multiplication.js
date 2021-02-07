function result() {
    var a = "Enter First Number : ";
    var default_a = 3;
    var received_a = prompt(a, default_a);

    var b = "Enter Second Number : ";
    var default_b = 5;
    var received_b = prompt(b, default_b);

    var product = Number(received_a) * Number(received_b);
    document.write("The product of "+ received_a +" and "+ received_b+" is " + product);
}

result();