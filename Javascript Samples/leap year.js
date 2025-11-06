function leap(year){
    return year%4==0?
        year%100!=0?
            console.log("Leap year"):console.log("Not a leap year"):
        year%400==0?
            console.log("leap year"):console.log("Not a leap year");

}
leap(2024);