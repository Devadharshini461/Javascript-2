function bonus(){
    let gen=document.getElementById("sal").value;
    let year=document.getElementById("year").value;
    let gen1=Number(gen);
    let year1=Number(year);
    let bonus,b;
    if(year1>5){
        bonus=(0.15*gen1);
        b=gen1+bonus;
        alert(`Total Salary: ${gen1}\nBonus Amount: ${bonus}\nFinal Salary: ${b}`);
    }
    else{
        bonus=0;
        b=gen1+bonus;
        alert(`Total Salary: ${gen1}\nBonus Amount: ${bonus}\nFinal Salary: ${b}`);
    }
}

function bonus1(){
    let gen=document.getElementById("sal").value;
    let year=document.getElementById("year").value;
    let gen1=Number(gen);
    let year1=Number(year);
    let bonus,b;
    if(year1>5){
        bonus=(0.15*gen1);
        b=gen1+bonus;
        document.getElementById("output").innerText=`Total Salary: ${gen1}\nBonus Amount: ${bonus}\nFinal Salary: ${b}`;
    }
    else{
        bonus=0;
        b=gen1+bonus;
        document.getElementById("output").innerText=`Total Salary: ${gen1}\nBonus Amount: ${bonus}\nFinal Salary: ${b}`;

    }
}