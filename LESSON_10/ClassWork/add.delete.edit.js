const student = {
    id: 1,
    programmingLanguage: 'JavaScript',
    hasExperienceInReact: false,
};

// Добавление
student.experience = 6;

// console.log(student); 

// Удаление

delete student.hasExperienceInReact;

// Изменение

student.experience = 12;
student.id = 2;

console.log('student', student);