const studentDatabase = ["Jhon", "Jack", "Larry", "Jessica", "Jhonny"];

function iterateAllStudents(allStudents, studentName) {
  for (let i = 0; i < studentDatabase.length; i++) {
    if (studentDatabase[i] === studentName) {
      console.log(`Found : ${studentName}`);
    }
  }
}

iterateAllStudents(studentDatabase, "Jhonny");
