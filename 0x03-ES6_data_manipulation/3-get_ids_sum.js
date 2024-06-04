export default function getStudentIdsSum(students = []) {
    return (
        students.reduce((total, student) => {
          return total + student.id;          
        }, 0)
    )
}