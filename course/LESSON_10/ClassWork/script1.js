const developer = {
    //key: value,
    name: 'Maxim',
    job: 'Front-End разработчик',
    experience: 24,
    jobAllInfo: {
        type: 'Front-End',
        framework: {
            name:'ReactJS',
        }
    }
}

// Опциональная цепочка ?.
// console.log(developer.jobAllInfo.framework);

if(developer && developer.jobAllInfo && developer.jobAllInfo.framework && developer.jobAllInfo.framework.name) { 
    console.log("Разработчик уже знает фреймворк");
} else {
    console.log("Разработчик еще НЕ знает фреймворк");
}

if(developer?.jobAllInfo?.framework?.name) { 
    console.log("Разработчик уже знает фреймворк");
} else {
    console.log("Разработчик еще НЕ знает фреймворк");
}