function check(){
    var n1=document.getElementById("num1").value
    var n2=document.getElementById("num2").value
    if(n1&&n2){
        document.getElementById("xor").innerText=Boolean((n1<=0)^(n2<=0));
    }
    else{
        document.getElementById("xor").innerText="Enter the number"
    }
}