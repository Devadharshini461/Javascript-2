function calculateMarks()
{    let total = 0;

    for (let i = 1; i <= 5; i++) {
      let mark = Number(prompt("Enter marks for subject " + i + ":"));
   
      if (!mark || mark < 0 || mark > 100) {
        alert("Please enter valid marks between 0 and 100.");
      }

      total += mark; 
    }

    let average = total / 5;
    let grade;

  
    if (average >= 90) {
      grade = "A";
    } else if (average >= 75) {
      grade = "B";
    } else if (average >= 50) {
      grade = "C";
    } else {
      grade = "Fail";
    }

    
    alert(
      "Total Marks: " + total +
      "\nAverage: " + average.toFixed(2) +
      "\nGrade: " + grade
    );}

    // console.log("Total Marks:", total);
    // console.log("Average:", average.toFixed(2));
    // console.log("Grade:", grade);