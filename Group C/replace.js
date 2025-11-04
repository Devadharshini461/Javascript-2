function replace(){
      var text=document.getElementById("ext").value
      if(text.includes(".")){
            var x=text.replace(text.slice(text.indexOf(".")),".js");
            document.getElementById("output").innerText=x;}
      else{
            alert("Enter valid File Name.")
            document.getElementById("output").innerText="Invalid FileName."
      }

}
