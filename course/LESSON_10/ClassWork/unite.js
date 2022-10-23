const developerInfo = {
    age: 25,
    experience: 3,
    name: 'Maxim',
};

const developerExtraInfo = {
    height: 180,
    isJunior: false,
    name: 'Igor',
};



const developer = {
    ...developerInfo,
    ...developerExtraInfo,
    name: 'Nastya',
};

// console.log(developer);

const developer2 = Object.assign(developerExtraInfo, developerInfo);
// console.log(developer2);

console.log(developerExtraInfo);