function calc(arg) {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var res;
    switch (arg) {
        case 'addition':
            res = num1 + num2;
            disp(num1, num2, res, arg);
            break;
        case 'subtraction':
            res = num1 - num2;
            disp(num1, num2, res, arg);
            break;
        case 'multiplication':
            res = num1 * num2;
            disp(num1, num2, res, arg);
            break;
        case 'division':
            res = num1 / num2;
            disp(num1, num2, res, arg);
            break;
    }
}

function disp(num1, num2, res, arg) {
    document.getElementById("result").innerHTML = "The " + arg + "  of  " + num1 + " and " + num2 + " is " + res;
}