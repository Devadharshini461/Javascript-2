function discount(){
    let amt=document.getElementById("amt").value;
    let amt1=Number(amt);
    let d,discount;
    if(amt1>500){
        d=(0.20*amt1);
        discount=amt1+d;
        document.getElementById("output").innerText=`Total Amount: ${amt1}\nDiscount Amount: ${d}\nFinal Amount: ${discount}`;
    }
    else{
        d=(0.10*amt1);
        discount=amt1+d;
        document.getElementById("output").innerText=`Total Amount: ${amt1}\nDiscount Amount: ${d}\nFinal Amount: ${discount}`;
    }

}