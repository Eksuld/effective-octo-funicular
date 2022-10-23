const user = {
    name: 'Maksim',
    programmingLanguage: 'JavaScript',
    getName: function() {
        return this.name;
    },
    // у стрелочной функции не контекста this
    // getProgrammingLanguage: () => {
    //     return this.programmingLanguage;
    // },
    // создавать так!
    getProgrammingLanguage: function() {
            return this.programmingLanguage;
        },
    // или так!!!
    getProgrammingLanguage() {
        return this.programmingLanguage;
    },
};

console.log('getName', user.getName());
const newGetName = user.getName;
console.log('newGetName', newGetName()); // window
console.log('newGetName', newGetName.call(user));


console.log(user.getProgrammingLanguage());