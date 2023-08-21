const fs = require('fs');

/**
 * Reads CSV file containing student data, parses the data and
 * prints it to stdout.
 * @param {string} dbPath - path to csv file.
 */
function countStudents(dbPath) {
  try {
    let students = fs.readFileSync(dbPath, 'utf-8');
    students = students.split('\n');
    students = students.slice(1, students.length - 1);
    const courses = new Map();

    // Parse CSV data creating a map of courseData objects.
    students.forEach((student) => {
      const studentData = student.split(',');
      const firstName = studentData[0];
      const field = studentData[3];
      if (courses.has(field)) {
        courses.get(field).students.push(firstName);
        courses.get(field).count += 1;
      } else {
        courses.set(field, { students: [firstName], count: 1 });
      }
    });

    // Display information from map
    console.log(`Number of students: ${students.length}`);
    courses.forEach((courseData, course) => {
      console.log(`Number of students in ${course}: ${courseData.count}. List: ${courseData.students.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
