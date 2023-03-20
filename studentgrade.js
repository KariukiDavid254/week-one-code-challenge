//Prompts user to input students marks and if the criteria is met, then, outputs grades
let marks = prompt("Student's marks (0 and 100):");
marks = parseInt(marks);

if (marks > 79) {
  console.log("A");
} else if (marks >= 60 && marks <= 79) {
  console.log("B");
} else if (marks >= 50 && marks <= 59) {
  console.log("C");
} else if (marks >= 40 && marks <= 49) {
  console.log("D");
} else {
  console.log("E");
}

