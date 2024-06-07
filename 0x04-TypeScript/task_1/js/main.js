"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTeacher = void 0;
var teacher1 = {
    firstName: 'Kofi',
    lastName: 'Manu',
    fullTimeEmployee: true,
    location: 'Obuasi',
    contract: false,
};
console.log(teacher1);
var director1 = {
    firstName: 'Ama',
    lastName: 'Bonsu',
    location: 'Kejetia',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) { return "".concat(firstName[0], ". ").concat(lastName); };
exports.printTeacher = printTeacher;
console.log((0, exports.printTeacher)('john', 'doe'));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
function createStudent(cStudent, firstName, lastName) {
    return new cStudent(firstName, lastName);
}
var student1 = createStudent(StudentClass, 'mike', 'tyson');
console.log(student1);
