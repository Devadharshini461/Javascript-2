function task(){
    let i;
    for (i=2014;i<=2050;i++){
        let d= new Date(i,0,1);
            if(d.getDay()==0){
                console.log(i) ;
            }
    
    }
}
task();