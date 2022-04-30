const sum = (a, b) => a+b;

console.log(sum(3,3));

const students = [
    {
        name: 'David',
    },
    {
        name: 'Michael',
    },
    {
        name: 'Valentina'
    },
    {
        name: 'Edwin'
    }
]

const studentsAndIds = students.map((student, idx) => (
    {
        ...student,
        id: idx
    }
))

console.log(studentsAndIds);