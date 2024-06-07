interface Teacher{
    readonly firstName: string;
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: "Kofi",
    lastName: "Mensah",
    location: "Keta",
    fullTimeEmployee: true,
    numberOfReports: 13
}

console.log(director1)