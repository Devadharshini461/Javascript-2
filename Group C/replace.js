function replace(){
      var text=document.getElementById("ext").value
      var x=text.replace(text.slice(text.indexOf(".")),".js");
document.getElementById("output").innerText=x;
//     if(x.indexOf('.')==-1){
//     document.getElementById("output").innerText=z;
// }
// else{
//     document.getElementById("output").innerText="enter valid extension";
// }
}
