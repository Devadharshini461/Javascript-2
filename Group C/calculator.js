function cal(op,a,b){
    switch (op){
        case '+':
            console.log(a+b);
            break;
        case '-':
            console.log(a-b);
            break;
        case '*':
            console.log(a*b);
            break;
        case '%':
            console.log(a%b);
            break;
        default:
            console.log("Enter valid operator")
    }
}

cal('+',1,2);
