function swap(){
    var s=document.getElementById("str").value
    var one=s[0];
    var last=s[s.length-1];
    var middle=s.slice(1,s.length-1);
    var s1=last+middle+one;
    document.getElementById("output").innerText=s1;
    
}