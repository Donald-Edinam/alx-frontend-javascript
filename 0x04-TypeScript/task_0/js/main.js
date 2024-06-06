var student1 = {
    firstName: "Kofi",
    lastName: "Manu",
    age: 23,
    location: "Kumasi"
};
var student2 = {
    firstName: "Ama",
    lastName: "Bonsu",
    age: 32,
    location: "Pankrono"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = 'coral';
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var parentCell = document.createElement('td');
    var childCell = document.createElement('tr');
    parentCell.textContent = student.firstName;
    childCell.textContent = student.lastName;
    // Style the table
    parentCell.style.border = "1px solid coral";
    childCell.style.border = "1px solid coral";
    parentCell.style.padding = "5px";
    childCell.style.padding = "5px";
    // Add row to table
    row.appendChild(parentCell);
    row.appendChild(childCell);
    // Add table to body
    document.body.appendChild(table);
});
