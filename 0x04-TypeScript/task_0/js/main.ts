interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Kofi",
    lastName: "Manu",
    age: 23,
    location: "Kumasi"
}

const student2: Student = {
    firstName: "Ama",
    lastName: "Bonsu",
    age: 32,
    location: "Pankrono"
}

const studentsList = [student1, student2]

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = 'coral';
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
    const row = document.createElement('tr');
    const parentCell = document.createElement('td');
    const childCell = document.createElement('tr');

    parentCell.textContent = student.firstName;
    childCell.textContent = student.lastName;
    
    // Style the table
    parentCell.style.border = "1px solid coral";
    childCell.style.border = "1px solid coral";
    parentCell.style.padding = "5px";
    childCell.style.padding = "5px";

    // Add row to table
    row.appendChild(parentCell);
    row.appendChild(childCell)

    // Add table to body
    document.body.appendChild(table)
})