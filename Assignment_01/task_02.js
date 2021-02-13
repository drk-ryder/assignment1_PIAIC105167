function student() {
    var myname = "What is your name?";
    var defaultname = "Jhone Doe";
    var info_name = prompt(myname, defaultname);

    var myage = "What is your Age?";
    var defaultage = 15;
    var info_age = prompt(myage, defaultage);
    
    certificate = "Certified Mobile Application Development";

    alert(info_name);
    alert(info_age);
    alert(certificate);
};

student();