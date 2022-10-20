// this - object
 
const user  = {
    name: 'Maxim',
    dateOfBirth: 2001,
    getName() {
        // return user.name;
        return this.name;
    },
    calculateAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.dateOfBirth;
    },
    getAllInfo: function() {
        const age = this.calculateAge();
        console.log(`Имя: ${this.name}, Возраст: ${age} $`);
    },
};

console.log(user.getName());
console.log(user.calculateAge());
user.getAllInfo();


//bind, call, apply

 //call

 const user2 = {
    name: 'Igor',
 };

 const user2Name = user.getName.call(user2);
 console.log('user2Name', user2Name);