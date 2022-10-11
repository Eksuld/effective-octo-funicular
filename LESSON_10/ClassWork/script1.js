const developer = {
    //key: value,
    name: 'Maxim',
    job: 'Front-End разработчик',
    experience: 24,
    jobAllInfo: {
        type: 'Front-End',
        framework: 'ReactJS',
    }
}

console.log('type', developer.jobAllInfo.type);
console.log('framework', developer['jobAllInfo']['framework']);

// console.log('developer', developer);

// //1 Получение значений через .

// console.log('name', developer.name);
// console.log('framework', developer.jobAllInfo.framework);

// //2 Получение значений через []

// const key = 'name';

// console.log('name', developer[key]);