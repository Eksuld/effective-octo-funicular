const ordersArr = [4, 2, 1, 3];
const people = [
{ id: 1, name: "Максим" },
{ id: 2, name: "Николай" },
{ id: 3, name: "Ангелина" },
{ id: 4, name: "Виталий" },

];

function giveTalonsInOrder(people, ordersArr) {
    let compair = [];
    for (let i = 0; i < ordersArr.length; i++){
        switch(ordersArr[i] < ordersArr.length) {
            case(people.id === ordersArr[i]): console.log(compair.push(people[i]));
        }
    }
    
    }

console.log(people.length);

console.log(ordersArr);

const result = giveTalonsInOrder(people, ordersArr);

